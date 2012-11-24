import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.net.*;


public class WebServer {

	private Connection connection;

	public WebServer(int port) throws IOException, ClassNotFoundException, SQLException {
		
		log("Connecting to database...");
		connectToDatabase("data.db", "SELECT * FROM constituencies ORDER BY name ASC");
		log("Connected.");
		
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
	
	public ResultSet connectToDatabase(String path, String query) throws SQLException, ClassNotFoundException {
		Class.forName("org.sqlite.JDBC");
		connection = DriverManager.getConnection("jdbc:sqlite:"+path);
		Statement statement = connection.createStatement();
	    statement.setQueryTimeout(30);
	    ResultSet result = statement.executeQuery(query);
	    connection.close();
	    return result;
	}
	
	public void log(String message) {
		System.out.println(message);
	}
	
	public void handle(BufferedReader input, DataOutputStream output) throws IOException, SQLException {
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
	
	public static void main(String[] args) throws IOException, ClassNotFoundException, SQLException {
		new WebServer(1337);
	}
	
}
