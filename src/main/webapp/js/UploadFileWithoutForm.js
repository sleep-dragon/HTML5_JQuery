var $div1 = $('#div1');
//get file info
/*$('#pictureFile').change(function(event){
    var filelist = event.target.files;
    var str = "";
    for(var i = 0; i < filelist.length ; i++ ) {
        var file = filelist[i]
        str += "name：" + escape(file.name) + "\n" + //檔名
               "type：" + file.type + "\n" +  //檔案類型
               "size：" + file.size + "\n" +  //檔案大小
               "lastModifiedDate：" + file.lastModifiedDate.toLocaleDateString() + "\n\n\n"; //最後修改日期
    }
    console.log(str);
});*/
$('#pictureFile').change(function(event){
    //Filelist Object
    var str = "";
    var filelist = event.target.files;
    $.each(filelist,function(index,value){
        console.log(value.name);
        console.log(value.name);
        var file = value;
        str += "name：" + escape(file.name) + "\n" + //檔名
            "type：" + file.type + "\n" +  //檔案類型
            "size：" + file.size + "\n" +  //檔案大小
            "lastModifiedDate：" + file.lastModifiedDate.toLocaleDateString() + "\n\n\n"; //最後修改日期
        //判斷是否為圖片
        if (!file.type.match('image.*')) {
            return;
        }
        //FileReader Object
        var reader = new FileReader();
        //定義執行動作
        reader.onload = (function(file){
            return function(event){
                //event.target.result為檔案的編碼
                $div1.append($('<img>').attr('src',event.target.result).attr('title',escape(file.name)));
            };
        })(file);
        //利用DataURL的方式讀取圖片
        reader.readAsDataURL(file);
    });
});

$('#buttonLoad').click(function() {

    var files = $('#pictureFile').prop('files');
    var filename = $('#pictureFile').val().split('\\').pop();


    var myFormData = new FormData();
    myFormData.append('name', filename);
    myFormData.append('file', files[0]);

    $.ajax({
        url : 'UploadFileDeom',
        type : 'POST',
        processData : false,
        contentType : false,
        data : myFormData,
        success : function(result) {
            if($div1.children().length > 0){
                $div1.empty();
            }
            data = JSON.parse(result);
            console.log(data.pic.length);

            if (data.pic.length>0) {
                $('<img>').attr('src','data:image/jpg;base64,'+data.pic).appendTo($('#div1'));
            }
        },
        error : function(xhr) {
            alert('Ajax request 發生錯誤');
        }
    });
});