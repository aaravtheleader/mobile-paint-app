
var lx,ly ;
canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");//rendering the canvas
color="black";
widthofline=1;
var width=screen.width;
new_width=width-100;
new_height=screen.height-300;
if (width<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;

}
canvas.addEventListener("touchStart",a);
function a(){
    color=document.getElementById("color").value ;
    widthofline=document.getElementById("width").value ;
lx=e.touches[0].clientX-canvas.offsetLeft;
ly=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",b);
function b(e){
    cx=e.touches[0].clientX-canvas.offsetLeft;
    cy=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    ctx.moveTo(lx,ly);
    ctx.lineTo(cx,cy);
    ctx.stroke();

lx=cx;
ly=cy;

}

function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
