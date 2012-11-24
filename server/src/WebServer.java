import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.*;


public class WebServer {

	public WebServer(int port) throws IOException {
		
		log("Binding on "+InetAddress.getLocalHost().toString()+":"+port);
		ServerSocket serverSocket = new ServerSocket(port);	
		
		while (true) {
			log("Listening...");
			Socket connectionSocket = serverSocket.accept();
			BufferedReader input = new BufferedReader(new InputStreamReader(connectionSocket.getInputStream()));
			DataOutputStream output = new DataOutputStream(connectionSocket.getOutputStream());
			handle(input, output);
		}
		
	}
	
	public void log(String message) {
		System.out.println(message);
	}
	
	public void handle(BufferedReader input, DataOutputStream output) throws IOException {
		int method = 0;
		
		String methodStr = input.readLine();
		String temp = new String(methodStr);
		methodStr.toUpperCase();
		if (methodStr.startsWith("GET")) {
			method = 1;
		}
		else if (methodStr.startsWith("HEAD")) {
			method = 2;
		}
		
		if (method == 0) {
			output.writeBytes(constructHeader(501));
			output.close();
			return;
		}
		
		temp = temp.split(" ")[1];
		String path = new String(temp);
		output.writeBytes("You asked for "+path);
		output.close();
		
	}
	
	public String constructHeader(int returnCode) {
		String output = "HTTP/1.0 ";
		
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
			case 500:
				output += "500 Internal Server Error";
				break;
			case 501:
				output += "501 Not Implemented";
				break;
		}
		
		output += "\r\nConnection: close\r\nServer: frozen-bear\r\nContent-Type: text/html\r\n\r\n";
	
		return output;
		
	}
	
	public static void main(String[] args) throws IOException {
		new WebServer(1337);
	}
	
}
