var canvas = document.getElementById("pic");

objAStart = [32, 7];
objBStart = []
                
if(canvas.getContext){
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "black";
    for(var i = 0; i <=5; i++){
        ctx.fillRect(30 + i * 47, 5, 5 , 5 );
    }
    ctx.fillRect(90, 190, 5 , 5 );
    ctx.fillRect(205, 190, 5 , 5 );

    ctx.beginPath();
    ctx.moveTo(32, 7);
    ctx.lineTo(92.5, 190);
    ctx.stroke();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(32, 7);
    ctx.lineTo(206, 190);
    ctx.fillStyle = "#ed1a1a";
    ctx.stroke();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(80, 7);
    ctx.lineTo(92.5, 190);
    ctx.stroke();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(127, 7);
    ctx.lineTo(92.5, 190);
    ctx.stroke();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(175, 7);
    ctx.lineTo(92.5, 190);
    ctx.stroke();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(223, 7);
    ctx.lineTo(92.5, 190);
    ctx.stroke();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(270, 7);
    ctx.lineTo(92.5, 190);
    ctx.stroke();
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(268, 7);
    ctx.lineTo(92.5, 190);
    ctx.stroke();
    ctx.save();
}else{
    console.log("no support !!");
}

