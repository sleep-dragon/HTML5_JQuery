

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.io.IOUtils;
import org.json.simple.JSONObject;

/**
 * 
 * Servlet implementation class JsonSimpleDemo
 */
@WebServlet("/UploadFileDeom")
@MultipartConfig()
public class UploadFileDeom extends HttpServlet {
       
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		PrintWriter out = response.getWriter();
		response.setHeader("content-type", "text/html;charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		
		try {
			String fileName = request.getParameter("name");
			String testName = request.getParameter("testName");
			System.out.println(testName);
			System.out.println(fileName);
			Part filePart = request.getPart("file");
			InputStream fileContent = filePart.getInputStream();
			byte[] pic = IOUtils.toByteArray(fileContent);
			System.out.println("byte的byte:"+pic.length);
			String result = Base64.encodeBase64String(pic);
			System.out.println("Base64的byte:"+result.getBytes().length);
			JSONObject json = new JSONObject();
			json.put("name", fileName);
			json.put("pic", result);
			System.out.println("JSON的byte" + json.toString().getBytes().length);
			out.print(json.toString());
		}  finally {
			
		}
	}

}
