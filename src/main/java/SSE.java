import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/sse")
public class SSE extends HttpServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse response) {
		try {
			System.out.println("SSE Demo");
			response.setContentType("text/event-stream");
			response.setCharacterEncoding("UTF-8");

			PrintWriter pw = response.getWriter();
			pw.write("data: " + "123456" + "\n\n");//data後面接甚麼都可以
			pw.write("retry: 1000\n");//retry 後面是毫秒
			System.out.println("Data Sent!!!");
			pw.close();

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) {
		doPost(request, response);
	}

}