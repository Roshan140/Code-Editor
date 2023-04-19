function run(){
    let output = document.querySelector(".output");
    let html = document.querySelector(".html").value;
    let css = document.querySelector(".css").value;
    let js = document.querySelector(".js").value;

    output.contentDocument.body.innerHTML=html + "<style>" + css + "</style>";
output.contentWindow.eval(js);
}
