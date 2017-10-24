var $userName = $("#name");
var $password = $("#pw");
$("#login").click(function() {
    $.ajax({
        url : 'AccountCheck',
        data : {
            name : $userName.val(),
            password : $password.val()
        },
        type : 'POST',
        error : function(xhr) {
            alert('Ajax request 發生錯誤');
        },
        success : function(result) {
            console.log(result);

            if (result == '帳號不存在') {
                console.log("帳號或密碼有錯");
            } else {
                console.log("123456");

            }

        }
    });
});