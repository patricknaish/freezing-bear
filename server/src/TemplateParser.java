import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class TemplateParser {
	
	private File file;
	
	public TemplateParser(File f) throws FileNotFoundException {
		if (!f.exists()) {
			throw new FileNotFoundException("Could not find "+f.getName());
		}
		file = f;
	}
	
	public Object[] parse() {
		ArrayList<String> output = new ArrayList<String>();
		String input;
		String match;
		try {
			BufferedReader reader = new BufferedReader(new FileReader(file));
			while ((input = reader.readLine()) != null) {
				if (input.contains("<%") && input.contains("%>")) {
					match = input.split("<%")[1];
					match = match.split("%>")[0];
					DatabaseConnector dbc = new DatabaseConnector(match);
					ResultSet results = dbc.query("SELECT * FROM constituencies, mps "+
												  "WHERE constituencies.name = mps.constituency "+
												  "ORDER BY constituencies.name ASC");
					output.add("<script>\nvar mps = [");
					while (results.next()) {
						output.add("{name:\""+results.getString("name")+"\", " +
								   "population:\""+results.getString("population")+"\", " +
								   "outOfWorkLevel:\""+results.getString("outofwork_level")+"\", " +
								   "outOfWorkRate:\""+results.getString("outofwork_rate")+"\", " +
								   "incapacityLevel:\""+results.getString("incap_level")+"\", " +
								   "incapacityRate:\""+results.getString("incap_rate")+"\", " +
								   "mpName:\""+results.getString("title")+" "+results.getString("firstname")+" "+results.getString("lastname")+"\"},");
					}
					output.add("]\n<\\script>\n");
					
				}
				else {
					output.add(input);
				}
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		return output.toArray();
	}
	
}
