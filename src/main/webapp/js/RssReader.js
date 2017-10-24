/*var btn = document.getElementById("buttonLoad"), divRss = document
				.getElementById("rss");
		btn.addEventListener("click", load);
		function load() {
			//呼叫LoadRSS Servlet
			xhr = new XMLHttpRequest();
			if (xhr != null) {
				xhr.addEventListener("readystatechange", callback);
				xhr.open("get", "LoadRSS", true);
				xhr.send();
			} else {
				alert("您的瀏覽器不支援Ajax功能!!");
			}

		}
		function callback() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					//要如何接收Server端回傳的XML資料
					var doc = xhr.responseXML;
					while (divRss.hasChildNodes()) {
						divRss.removeChild(divRss.lastChild);
					}
					var item = doc.getElementsByTagName('item');
					for (var i = 0; i < item.length; i++) {
						var title = item[i].getElementsByTagName('title')[0].firstChild.nodeValue;
						var link = item[i].getElementsByTagName('link')[0].firstChild.nodeValue;
						var description = item[i].getElementsByTagName('description')[0].firstChild.nodeValue;
						var pubDate = item[i].getElementsByTagName('pubDate')[0].firstChild.nodeValue;

						var eleA = document.createElement("a");
						var txtA = document.createTextNode(title);
						eleA.appendChild(txtA);
						var eleSmall1 = document.createElement("small");
						var txtSmall1 = document.createTextNode(description);
						eleSmall1.appendChild(txtSmall1);
						var eleP = document.createElement("p");
						eleP.appendChild(eleSmall1);

						eleA.setAttribute("href", link);
						var eleH4 = document.createElement("h4");
						eleH4.appendChild(eleA);

						var eleHr = document.createElement("hr");
						var eleSmall = document.createElement("small");
						var txtSmall = document.createTextNode(pubDate);
						eleSmall.appendChild(txtSmall);
						var eleArticle = document.createElement("article");
						eleArticle.appendChild(eleH4);
						eleArticle.appendChild(eleHr);
						eleArticle.appendChild(eleSmall);
						eleArticle.appendChild(eleP);
						divRss.appendChild(eleArticle);
					}
				} else {
					alert(xhr.status + ":" + xhr.statusText);
				}
			}
		}*/
var $btn = $("#buttonLoad"), $divRss = $("#rss");
$btn.click(function(){
    $.ajax({
        url : 'LoadRSS',
        type : 'GET',
        dataType: "xml",
        success : function(result) {
            while($divRss.children().length > 0){
                $divRss.empty();
            }
            console.log(result);
            $(result).find('item').each(function (index, value) {
                var title=$(this).find("title").text();
                var description =$(this).find('description').text();
                var link =$(this).find('link').text();
                var pubDate =$(this).find('pubDate').text();
                $divRss.append($('<article>')
                    .append($('<h4>').append($('<a>').text(title).attr('href',link)))
                    .append($('<p>').append($('<small>').text(description)))
                    .append($('<hr>'))
                    .append($('<small>').text(pubDate)));
            });
        },
        error : function(xhr) {
            alert('Ajax request 發生錯誤');
        }
    });
});