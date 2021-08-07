window.onload = function() {
    //フルスクリーンにする
    document.body.onclick = function() {
        if (this.webkitRequestFullScreen) {
             this.webkitRequestFullScreen();
        }
        else if (this. mozRequestFullScreen) {
            this. mozRequestFullScreen();
        }
        else {
            alert("not found")
        }
    };
};





let p1 = document.getElementById('p1');
let te = document.getElementById('te');

let tex = 250 ;//tex
let tey = 180 ;//tey


p1.addEventListener('mousemove', function(e) {
let x = e.clientX - tex;
let y = e.clientY - tey;

te.style.transform = 'translate(' + x + 'px , ' + y + 'px )';

});
