var $myDiv = $("#div1");
var $btn = $("#buttonLoad").click(function(){
    $.ajax({
        url : 'testimage3.xml',
        type : 'GET',
        dataType: "xml",
        success : function(result) {
            while($myDiv.children().length > 0){
                $myDiv.empty();
            }
            $('<img>').attr('src','data:image/jpg;base64,'+$(result).find('test').text()).appendTo($('#div1'));
        },
        error : function(xhr) {
            alert('Ajax request 發生錯誤');
        }
    });
});