// 		var sel = document.getElementById("select1");
// 		sel.addEventListener("change", loadProducts);
var $sel = $('#select1');
// 		window.addEventListener("load", LoadCategories);
$(window).load(function(){
    $.ajax({
        url : 'Categories',
        type : 'GET',
        dataType: "JSON",
        success : function(result) {
            $.each(result, function (index,value) {
                $sel
                    .append($("<option></option>")
                        .attr('value',result[index].CategoryID)
                        .text(result[index].CategoryName));
// 						   $.each(this, function (name, value ,index) {
// 						      console.log(name,value);
// 						   });
            });
        },
        error : function(xhr) {
            alert('Ajax request 發生錯誤');
        }
    });
});
//網頁載入時，將產品分類的資料，放進html select標籤中
/*function LoadCategories() {
    var xhrCategory = new XMLHttpRequest();
    if (xhrCategory != null) {
        xhrCategory.addEventListener("readystatechange", function() {
            if (xhrCategory.readyState == 4) {
                if (xhrCategory.status == 200) {

                    //收到的資料是JSON字串
                    var datas = xhrCategory.responseText;
                    //使用前要先轉型成JSON物件，怎麼做?
                    var categories = JSON.parse(datas);
                    for (var x = 0; x < categories.length; x++) {
                        var opt = new Option(
                                categories[x].CategoryName,
                                categories[x].CategoryID);
                        select1.options.add(opt);
                    }

                    //讀出JSON中的資料
                    //將資料顯示在html的select標籤中

                    //用for迴圈讀出JSON中的資料
                    //再將讀出的資料顯示在html的select標籤中
                    //參考語法如下
                    //var opt = new Option("text", "value");
                    //select1.options.add(opt);

                } else {
                    alert(xhrCategory.status + ":"
                            + xhrCategory.statusText);
                }
            }
        });
        xhrCategory.open("get", "Categories");
        xhrCategory.send();

    }
}*/

//html select標籤選到不同項目時，會引發change事件
//change事件發生時，執行LoadProducts()函式
$sel.change(function(){
    $.ajax({
        url : 'Products',
        type : 'GET',
        data : {'categoryID' : $('#select1 option:selected').attr('value') },
        success : function(result) {
            console.log(result);
        },
        error : function(xhr) {
            alert('Ajax request 發生錯誤');
        }
    });
});
/*function loadProducts() {
    var xhr = new XMLHttpRequest(), id = 0;

    if (xhr != null) {
        xhr.addEventListener("readystatechange",
                function() {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            var datas = xhr.responseText;
                            //還是要轉型成JSON物件
                            var products = JSON.parse(datas);

                            var myBody = document.querySelector(".table>tbody");
                            //先刪除表格中的內容
                            while (myBody.hasChildNodes()) {
                                myBody.removeChild(myBody.lastChild);
                            }
                            for(var x = 0;x<products.length;x++){
                                var ProductID = products[x].ProductID;
                                var ProductName = products[x].ProductName;
                                var UnitPrice = products[x].UnitPrice;
                                var UnitsInStock = products[x].UnitsInStock;

                                var cell1 = document.createElement("td");
                                var txt1 = document.createTextNode(ProductID);
                                cell1.appendChild(txt1);
                                var cell2 = document.createElement("td");
                                var txt2 = document.createTextNode(ProductName);
                                cell2.appendChild(txt2);
                                var cell3 = document.createElement("td");
                                var txt3 = document.createTextNode(UnitPrice);
                                cell3.appendChild(txt3);
                                var cell4 = document.createElement("td");
                                var txt4 = document.createTextNode(UnitsInStock);
                                cell4.appendChild(txt4);

                                var row = document.createElement("tr");
                                row.appendChild(cell1);
                                row.appendChild(cell2);
                                row.appendChild(cell3);
                                row.appendChild(cell4);

                                myBody.appendChild(row);
                            }
                            //讀出JSON中的資料
                            //將資料顯示在html的select標籤中
                            //用for迴圈讀出JSON中的資料
                            //再將讀出的資料顯示在html的table標籤中
                            //參考語法如下
                            //建立<td>iPhone</td>
                            //var cell1 = document.createElement("td");
                            //var txt1 = document.createTextNode("iPhone");
                            //cell1.appendChild(txt1);
                            //將<td>加到<tr>之下
                            //var row = document.createElement("tr");
                            //row.appendChild(cell1);
                            //將<tr>加到<tbody>之下

                        } else {
                            alert(xhr.status + ":" + xhr.statusText);
                        }
                    }

                });

        //讀取html select標籤中，目前被選取項目的value(CategoryID)，語法參考如下
        //select.options[select.selectedIndex].value
        id = sel.options[sel.selectedIndex].value;

        //使用get的方式，將資料id傳到Server端Products.java的程式

        xhr.open('get', 'Products?categoryID=' + id, true);
        xhr.send();
    } else {
        alert("您的瀏覽器不支援Ajax功能!!");
    }

}*/