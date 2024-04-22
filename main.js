var btn = document.getElementById("menubtn");
var c = 0;
btn.onclick = function () {
  if (c === 0){
    document.getElementById('menu').style.height = "50px";
    c =1;
  } else {
    document.getElementById('menu').style.height = "0px";
    c = 0;
  }
  
}

const typed = new Typed('.multi-w', {
  strings: ['Developer', 'student', 'writer'],
  typedSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});