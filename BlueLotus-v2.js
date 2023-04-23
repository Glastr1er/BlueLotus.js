var c = "#000000";
var fs = 15;
var ff = "Nunito";

function fill(color){
    c = color;
    return document.createElement("div");
}

function fontSize(x){
    fs = x;
    return document.createElement("div");
}

function fontFamily(family){
    ff = family;
    return document.createElement("div");
}

function headImage(source, title, subtitle){
    var hi = document.createElement("div");
    hi.style.position="relative";

    var image = document.createElement("img");
    image.src=source;
    image.height="600";
    document.body.appendChild(image);

    hi.appendChild(image);

    var at = document.createElement("div");
    at.style.textAlign = "center";
    at.style.position = "absolute";
    at.style.top = "50%"
    at.style.left = "50%"
    at.style.width = "100vw"
    at.style.transform = "translate(-50%, -50%)";

    var t = document.createElement("h1");
    t.innerHTML = title;
    t.style.color = c;
    t.style.fontFamily = ff;
    t.style.fontSize = "55px";

    var st = document.createElement("h2");
    st.innerHTML = subtitle;
    st.style.color = c;
    st.style.fontFamily = ff;
    st.style.fontSize = "20px";

    at.appendChild(t);
    at.appendChild(st);

    hi.appendChild(at);

    return hi;
}

function text(message, alignment, width, align){
    var container = document.createElement("div");
    container.style.width="100vw";
    container.style.position = "relative";

    var txt = document.createElement("p");
    txt.innerHTML = message;
    txt.style.fontFamily = ff;
    txt.style.fontSize = fs + "px";
    txt.style.color = c;
    txt.style.textAlign = alignment;
    txt.style.left = align;
    txt.style.width = width;
    if(alignment == 'center'){
        txt.style.transform = "translate(-50%)"
    }
    txt.style.position = "relative";
    txt.style.margin = "10px";
    txt.classList.add("text");
    container.appendChild(txt);

    return container;
}

function list(message, alignment, width, align){
    var container = document.createElement("div");
    container.style.width="100vw";
    container.style.position = "relative";

    for(var i = 0; i < message.length; i++){
        var txt = document.createElement("li");
        txt.innerHTML = message[i];
        txt.style.fontFamily = ff;
        txt.style.fontSize = fs + "px";
        txt.style.color = c;
        txt.style.textAlign = alignment;
        txt.style.left = align;
        txt.style.width = width;
        if(alignment == 'center'){
            txt.style.transform = "translate(-50%)"
        }
        txt.style.position = "relative";
        txt.style.margin = "10px";
        txt.classList.add("text");
        container.appendChild(txt);
    }

    return container;
}

function image(source, width, height, align){
    var container = document.createElement("div");
    container.style.width="100vw";
    container.style.position = "relative";

    var image = document.createElement("img");
    image.src=source;
    image.width=width;
    image.height=height;
    if(align == "center"){
        image.classList.add("center");
    }
    image.style.margin = 10 +"px";
    image.style.position = "relative";
    image.style.left = align;
    image.style.transform = "translate(-50%)"
    container.appendChild(image);

    return container
}

function nav(arr){
    var nav = document.createElement("div");
    nav.style.width = "100vw";
    nav.style.height = "40px";
    nav.style.background = "black";
    nav.style.opacity = 0.7;
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.lineHeight = "40px";
    nav.style.zIndex = "1000";

    for(var i = 0; i < arr.length; i++){
        var link = document.createElement("a");
        link.textContent = arr[i];
        link.style.color = "white"
        link.style.fontFamily = ff;
        link.style.fontSize = "18px";
        link.style.margin = "10px";
        link.href="#";
        link.onclick = newPage.bind(link, i);

        nav.appendChild(link);
    }

    document.body.appendChild(nav);
}

function flex(arr){
    var flexbox = document.createElement("div");
    flexbox.style.display = "flex";
    for(var i = 0; i < arr.length; i++){
        var append = arr[i];
        append.style.position = "absolute";
        flexbox.appendChild(append);
    }
    return flexbox;
}

function load(x, page){
    x.classList.add(page);
    x.classList.add("body_element");
    document.body.appendChild(x);
}

function newPage(p){
    var allElements = document.getElementsByClassName("body_element");
    for(var i = 0; i < allElements.length; i++){
        //alert(allElements[i].classList.contains(1));
        if(allElements[i].classList.contains(p)){
            allElements[i].style.display = ""
        }
        else{
            allElements[i].style.display = "none"
        }
    }
}
