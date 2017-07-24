var xmlHttp = null;
function initXMLHttpRequest()
{
  if (window.XMLHttpRequest)
  {
	 //IE7以上及其它瀏覽器
     xmlHttp = new XMLHttpRequest();
  }
  else if(window.ActiveXObject){
	  //IE7以下瀏覽器
      var theVersions = new Array("MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.5.0","MSXML2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP");
            
       for (var i=0;i<theVersions.length; i++){
	      try {
	              xmlHttp = new ActiveXObject (theVersions[i]);
	              break;
	      }
	      catch(e){xmlHttp = null;}
       }
   }
  else{
	  xmlHttp = null;
  }
         
     return xmlHttp;
}