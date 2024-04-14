let c = 0;
document.getElementById('cm').onclick = function () {
  if(c === 0){
  document.getElementById('menu').style.height = 25+'vh';
  c = 1
  } else {
    document.getElementById('menu').style.height = 0 + 'vh';
    c = 0
  }
}
//------------API--------------

const _api = "https://api.jikan.moe/v4";

let searchtxt = document.getElementById('searchtxt');
let searchres = document.getElementById('searchres');

searchtxt.addEventListener('keyup', function() {
  if (this.value.length > 3) {
    getResults(this.value)
  }
  
})
async function getResults(value) {
  const res = await fetch(_api+'/anime?q='+value);
  const data = await res.json()
  
  if (data.data.length > 0) {
    searchres.innerHTML = '';
    data.data.map(anime => {
      searchres.innerHTML += '<li><img src="'+ anime.images.jpg.image_url+'"><a href="'+anime.url+'"target="_blank">'+anime.title+'</a></li>';
    })
  }
}
const trending = document.getElementById('trending');
async function getTopA(){
   const res = await fetch(_api+'/top/anime');
   const animes = await res.json();
   
   animes.data.map(anime => {
     trending.innerHTML += '<div id="container"> <span>'+anime.score+'</span><img src="'+anime.images.jpg.image_url+'" alt=""><p>'+anime.source+'</p><h1>'+anime.title+'</h1></div>'
   })
 }
 getTopA();
 const Upcs = document.getElementById('Upcs');
 async function UCS() {
   const res = await fetch(_api+'/seasons/upcoming');
   const UPCS = await res.json();
   UPCS.data.map(x => {
     Upcs.innerHTML +='<div id="container"><img src="'+x.images.jpg.image_url+'" alt=""><p>'+x.source+'</p><h1>'+x.title+'</h1></div>'
   })
 }
 UCS();