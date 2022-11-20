const specifyCanvasSize = ()=>{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

window.addEventListener('load', ()=>{

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    specifyCanvasSize();

    // context.strokeStyle = "tan";
    // context.lineWidth = 50
    // context.strokeRect(0, 0, window.innerWidth, window.innerHeight);

    let painting = false;

    let draw = (e)=>{
        if (!painting) return;
        context.lineWidth = 10;
        context.lineCap = "round";

        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener('mousedown', e => {painting = true; draw(e);});
    canvas.addEventListener('mouseup', e => {painting = false; context.beginPath();});
    canvas.addEventListener('mousemove', draw);

});

window.addEventListener('resize', specifyCanvasSize);