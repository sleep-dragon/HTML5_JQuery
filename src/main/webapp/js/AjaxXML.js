/*var xhr = null, btn = document.getElementById("buttonLoad"), myDiv = document
				.getElementById("div1");

		btn.addEventListener("click", load);

		function load() {
			xhr = new XMLHttpRequest();
			if (xhr != null) {
				xhr.addEventListener("readystatechange", callback);
				xhr.open("get", "travel.xml", true);
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
					while(myDiv.hasChildNodes()){
						myDiv.removeChild(myDiv.lastChild);
					}
					//讀取XML中的資料
					//var titles = doc.getElementsByTagName("stitle");
					//for (var i = 0, max = titles.length; i < max; i++) {
					//console.log(titles[i].firstChild.nodeValue);
					//}
					//試試看讀取XML文件中的 stitle、xbody資料
					var sections = doc.getElementsByTagName('Section');
					for (var i = 0, max = sections.length; i < max; i++) {
						var title = sections[i].getElementsByTagName('stitle')[0].firstChild.nodeValue;
						var body = sections[i].getElementsByTagName('xbody')[0].firstChild.nodeValue;
						var file = sections[i].getElementsByTagName('file')[0];
						var imgPath = file.childNodes[0].firstChild.nodeValue;
						var desc = file.childNodes[0]
								.getAttribute('description');
						var eleImg = document.createElement("img");
						eleImg.setAttribute("src", imgPath);
						eleImg.setAttribute("title", desc);
						eleImg.className = "img-thumbnail"
						var eleDiv1 = document.createElement("div");
						eleDiv1.className = "col-md-4";
						eleDiv1.appendChild(eleImg);
						//<h3>新北投溫泉區</h3>
						var eleH3 = document.createElement("h3");
						var txtH3 = document.createTextNode(title);
						eleH3.appendChild(txtH3);
						//<p>北投溫泉從日....</p>
						var eleP = document.createElement("p");
						var txtP = document.createTextNode(body);
						eleP.appendChild(txtP);
						var eleDiv2 = document.createElement("div");
						eleDiv2.className = "col-md-8";
						eleDiv2.appendChild(eleH3);
						eleDiv2.appendChild(eleP);
						var eleRow = document.createElement("div");
						eleRow.className = "row";
						eleRow.appendChild(eleDiv1);
						eleRow.appendChild(eleDiv2);
						myDiv.appendChild(eleRow);
					}
					//再試試看讀取每個景點中的(file)第一張圖片及(description)圖片描述的資料
					//將讀出的資料顯示在網頁上
					//我們最後要產生的HTML內容
					// 					 <div class="row">
					// 					    <div class="col-md-4">
					// 					       <img src="http://www.travel.taipei/d_upload_ttn/sceneadmin/pic/11000848.jpg" title="北投溫泉溫泉博物館" class="img-thumbnail">
					// 					    </div>
					// 					    <div class="col-md-8">
					// 					      <h3>新北投溫泉區</h3>
					// 					       <p>北投溫泉從日據時代便有盛名，深受喜愛泡湯的日人自然不會錯過，瀧乃湯、星乃湯、鐵乃湯就是日本人依照溫泉的特性與療效給予的名稱，據說對皮膚病、神經過敏、氣喘、風濕等具有很好的療效，也因此成為了北部最著名的泡湯景點之一。新北投溫泉的泉源為大磺嘴溫泉，泉質屬硫酸鹽泉，PH值約為3~4之間，水質呈黃白色半透明，泉水溫度約為50-90℃，帶有些許的硫磺味 。目前北投的溫泉旅館、飯店、會館大部分集中於中山路、光明路沿線以及北投公園地熱谷附近，總計約有44家，每一家都各有其特色，多樣的溫泉水療以及遊憩設施，提供遊客泡湯養生，而鄰近的景點也是非常值得造訪，例如被列為三級古蹟的三寶吟松閣、星乃湯、瀧乃湯以及北投第一家溫泉旅館「天狗庵」，都有著深遠的歷史背景，而北投公園、北投溫泉博物館、北投文物館、地熱谷等，更是遊客必遊的景點，來到北投除了可以讓溫泉洗滌身心疲憊，也可以順便了解到北投溫泉豐富的人文歷史。</p>
					// 					    </div>
					// 				      </div>
					//範例參考如下
					//<img src="http://www.travel.taipei/d_upload_ttn/sceneadmin/pic/11000848.jpg" title="北投溫泉溫泉博物館" class="img-thumbnail">

				} else {
					alert(xhr.status + ":" + xhr.statusText);
				}
			}
		}*/

var $myDiv = $("#div1");
var $btn = $("#buttonLoad").click(function(){
    $.ajax({
        url : 'travel.xml',
        type : 'GET',
        dataType: "xml",
        success : function(result) {
            while($myDiv.children().length > 0){
                $myDiv.empty();
            }
            $(result).find('Section').each(function  (index, value) {
                var title=$(this).find("stitle").text();
                var body =$(this).find('xbody').text();
                var file =$(this).find('file img:first-child');
                var imgPath = file.text();
                var desc = file.attr('description');
                var $eleDiv1 = $('<div>').addClass("col-md-4").append($('<img>')
                    .attr('src',imgPath)
                    .attr('title',desc)
                    .addClass("img-thumbnail"));
                var $eleDiv2=$('<div>')
                    .addClass('col-md-8')
                    .append($('<h3>').text(title),$('<p>').text(body));

                $myDiv.append($('<div>').addClass('row').append($eleDiv1,$eleDiv2));
            });
        },
        error : function(xhr) {
            alert('Ajax request 發生錯誤');
        }
    });
});