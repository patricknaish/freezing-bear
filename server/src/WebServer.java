import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.sql.SQLException;


public class WebServer {

	public WebServer(int port) throws IOException, ClassNotFoundException, SQLException {
				
		log("Binding on "+InetAddress.getLocalHost().toString()+":"+port);
		ServerSocket serverSocket = new ServerSocket(port);	
		log("Listening...");
		
		while (true) {
			Socket connectionSocket = serverSocket.accept();
			BufferedReader input = new BufferedReader(new InputStreamReader(connectionSocket.getInputStream()));
			DataOutputStream output = new DataOutputStream(connectionSocket.getOutputStream());
			handle(input, output);
		}
		
	}
	
	public void log(String message) {
		System.out.println(message);
	}
	
	public void handle(BufferedReader input, DataOutputStream output) throws IOException, SQLException {
		int method = 0;
		
		if (input == null || output == null) {
			return;
		}
		
		String methodStr = input.readLine();
		if (methodStr == null) {
			return;
		}
		String temp = new String(methodStr);
		methodStr.toUpperCase();
		if (methodStr.startsWith("GET")) {
			method = 1;
		}
		else if (methodStr.startsWith("HEAD")) {
			method = 2;
		}
		
		if (method == 0) {
			output.writeBytes(constructHeader(501,0));
			output.close();
			return;
		}
		
		temp = temp.split(" ")[1];
		String path = new String(temp);
		if (path.equals("/")) {
			path = "index.html";
		}
		else {
			path = path.substring(1);
		}
		
		if (path.contains(".jpg")) {
			int outputJPG;
			FileInputStream f = new FileInputStream(path);
			output.writeBytes(constructHeader(200,1));
			while ((outputJPG = f.read()) != -1) {
				output.writeByte(outputJPG);
			}
			output.close();
			return;
		}
		
		if (!path.contains(".html")) {
			output.writeBytes(constructHeader(404,0));
			output.close();
			return;
		}
		
		TemplateParser tp = new TemplateParser(new File(path));
		Object[] outputHTML = tp.parse();
		for (int i = 0; i < outputHTML.length; i++) {
			output.writeBytes((String)outputHTML[i]);
		}
		
		output.close();
	}
	
	public String constructHeader(int returnCode, int fileType) {
		String output = "HTTP/1.1 ";
		
		switch(returnCode) {
			case 200:
				output += "200 OK";
				break;
			case 400:
				output += "400 Bad Request";
				break;
			case 403:
				output += "403 Forbidden";
				break;
			case 404:
				output += "404 Not Found";
				break;
			case 500:
				output += "500 Internal Server Error";
				break;
			case 501:
				output += "501 Not Implemented";
				break;
		}
		
		if (fileType == 0) {		
			output += "\r\nConnection: close\r\nServer: frozen-bear\r\nContent-Type: text/html\r\n\r\n";
		}
		else if (fileType == 1) {
			output += "\r\nConnection: close\r\nServer: frozen-bear\r\nContent-Type: image/jpeg\r\n\r\n";
		}
	
		return output;
		
	}
	
	public static void main(String[] args) throws IOException, ClassNotFoundException, SQLException {
		new WebServer(1337);
	}
	
}
