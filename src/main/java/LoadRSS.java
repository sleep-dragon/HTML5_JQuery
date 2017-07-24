

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.DocumentBuilder;
import org.w3c.dom.*;
import org.xml.sax.SAXException;

import java.io.PrintWriter;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

/**
 * Servlet implementation class LoadRSS
 */
@WebServlet("/LoadRSS")
public class LoadRSS extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoadRSS() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		response.setHeader("content-type", "text/html;charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		
		DocumentBuilderFactory dbf=DocumentBuilderFactory.newInstance();
		DocumentBuilder db = null;
		try {
			db = dbf.newDocumentBuilder();
		} catch (ParserConfigurationException e2) {
			e2.printStackTrace();
		}
		Document doc = null;
		try {
			doc = db.parse("http://news.ltn.com.tw/rss/sports.xml");
		} catch (SAXException e1) {
			e1.printStackTrace();
		}

		StringBuffer buf=new StringBuffer();
		buf.append(doc.toString());
		response.setContentType("text/xml");
		response.setHeader("Content-type", "text/xml");
		response.setHeader("Cache-Control", "no-cache");

		PrintWriter os = response.getWriter();   

		TransformerFactory tf = TransformerFactory.newInstance();
		Transformer ts = null;
		try {
			ts = tf.newTransformer();
		} catch (TransformerConfigurationException e) {
			e.printStackTrace();
		}

		try {
			ts.transform(new DOMSource(doc), new StreamResult(os));
		} catch (TransformerException e) {
			e.printStackTrace();
		}
		os.close();
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
