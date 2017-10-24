var source = null;
mydiv = document.querySelector("#div1");
document.querySelector("#button1").addEventListener("click",function(){
    if(this.value=="start"){
        this.value="stop";
        show();
    } else {
        this.value="start";
        source.close();
        mydiv.innerHTML += "stop Connection"+"<br>";
    }
})

function show(){
    source = new EventSource('sse');
    source.addEventListener("open",function(event){
        mydiv.innerHTML += "Connection"+"<br>";
    })
    source.addEventListener("message",function(event){
        mydiv.innerHTML += event.data+"<br>";
    })
}