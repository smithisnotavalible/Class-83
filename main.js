var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
color = "black";
width = 1;
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e)
{
color = document.getElementById("color").value;
width = document.getElementById("width").value;
radius = document.getElementById("radius").value;
mouseEvent = "mousedown";
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e)
{
    mouseEvent = "mouseup";
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e)
{
    currentPositionOfX = e.clientX-canvas.offsetLeft;
    currentPositionOfY = e.clientY-canvas.offsetTop;
    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color
        ctx.lineWidth = width
        //ctx. moveTo(lastPositionOfX,lastPositionOfY)
        //ctx.lineTo(currentPositionOfX,currentPositionOfY)
        ctx.arc(currentPositionOfX,currentPositionOfY,radius,0,2*Math.PI)
        ctx.stroke()
    }
    lastPositionOfX = currentPositionOfX;
    lastPositionOfY = currentPositionOfY;
}
function clearArea(){
ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
}