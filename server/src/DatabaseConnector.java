import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class DatabaseConnector {
	
	private Connection connection;
	
	public DatabaseConnector(String path) throws SQLException, ClassNotFoundException {
		Class.forName("org.sqlite.JDBC");
		connection = DriverManager.getConnection("jdbc:sqlite:"+path);
	}
	
	public ResultSet query(String query) throws SQLException {
		Statement statement = connection.createStatement();
	    statement.setQueryTimeout(30);
	    ResultSet result = statement.executeQuery(query);
	    return result;
	}
	
}
