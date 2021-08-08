window.onload = function() {
    //フルスクリーンにする
        if (this.webkitRequestFullScreen) {
             this.webkitRequestFullScreen();
        }
        else if (this. mozRequestFullScreen) {
            this. mozRequestFullScreen();
        }
};

let p1 = document.getElementById('p1');
let te = document.getElementById('te');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

let i=0;
let c=0;
let nc;

let nnc;

//なでる
btn1.addEventListener('click',function(){

btn1.style.backgroundColor = "#ccc";

te.style.top = "130px";
for(nc=0; nc<3; nc++){
 i +=100;
 setTimeout('te.style.left = "150px"', i);
 i +=100;
 setTimeout('te.style.left = "180px"', i);
 i +=100;
 setTimeout('te.style.left = "210px"', i);
 i +=100;
 setTimeout('te.style.left = "180px"', i);
}
setTimeout('btn1.style.backgroundColor = "#fff"', i);
i =0;
c++;
console.log(c);


if(2<c){
 i +=800;
 setTimeout('p1.src="img/2.png"', i);
}
});

//なでない
btn2.addEventListener('click',function(){
 setTimeout('te.style.top = "50px"', 100);
 setTimeout('p1.src="img/3.png"', 100);
  c=0;
});


