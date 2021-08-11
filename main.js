canvas =
 document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");



ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth=4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth=5;
ctx.arc(250, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth=5;
ctx.arc(365, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth=5;
ctx.arc(485, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth=5;
ctx.arc(310, 250, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth=5;
ctx.arc(425, 250, 40, 0, 2*Math.PI);
ctx.stroke();