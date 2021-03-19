canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color = "grey";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();


color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();


color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(350, 210, 40, 0, 2* Math.PI);
ctx.stroke();


color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(450, 210, 40, 0, 2* Math.PI);
ctx.stroke();


color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(300, 259, 40, 0, 2 * Math.PI);
ctx.stroke();


color = "lime";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(400, 259, 40, 0, 2 * Math.PI);
ctx.stroke();