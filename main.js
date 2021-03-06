canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue";
width = 2;
var oldX;
var oldY;
var toucholdX;
var toucholdY;
var swidth = screen.width;
var nwidth = screen.width-70;
var nheight = screen.height-300;
var mouseEvent="empty"
if(swidth<992){
    document.getElementById("myCanvas").width = nwidth;
    document.getElementById("myCanvas").height = nheight;
    document.body.style.overflow="hidden";
    }
canvas.addEventListener("mousedown",mdn)
function mdn() {
    color = document.getElementById("col").value;
    width = document.getElementById("wid").value;
    mouseEvent = "mousedown"
}
canvas.addEventListener("mouseup",mdp)
function mdp(){
    mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave",mdl);
function mdl(){
    mouseEvent = "mouseleave"
}
canvas.addEventListener("mousemove",mde);
function mde(v){
    x=v.clientX-canvas.offsetLeft;
    y=v.clientY-canvas.offsetTop;
    if(mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(oldX,oldY);
        ctx.lineTo(x,y);
        ctx.stroke();
        console.log("Last position of x coordinate: "+oldX+"and the Y coordinate: "+oldY);
       
        console.log("New position of x coordinate: "+x+"and the Y coordinate: "+y);
    }
    oldX=x;
    oldY=y;
}
canvas.addEventListener("touchstart",tct)
function tct(e){
    color = document.getElementById("col").value;
    width = document.getElementById("wid").value;
    touchx=e.touches[0].clientX - canvas.offsetTop;
    touchy=e.touches[0].clientY - canvas.offsetLeft;
    console.log("touchstart");
}
canvas.addEventListener("touchmove",tcm)
function tcm(f){
    console.log("touchmove")
    touchx=f.touches[0].clientX-canvas.offsetTop;
    touchy=f.touches[0].clientY-canvas.offsetLeft;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    console.log("Last position of x coordinate: "+toucholdX+"and the Y coordinate: "+toucholdY);
    ctx.moveTo(toucholdX,toucholdY);
    console.log("New position of x coordinate: "+touchx+"and the Y coordinate: "+touchy);
    ctx.lineTo(touchx,touchy);
    ctx.stroke();
toucholdX=touchx;
toucholdY=touchy
}
function wipe(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}