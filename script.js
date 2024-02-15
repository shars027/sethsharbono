//CONSTANTS
let LOADTHIS, CONTENT;
const LOADER = 'assets/Spinner-0.8s-200px.svg';

//Utilities
div = (text, id, classes, data) => {
  let fullid = '', fullclass = '',texts = '',datas = '';
  if(id != undefined && id.trim() != ''){
    fullid = ` id="${id}"`;
  }
  if(classes != undefined && classes.trim() != ''){
    fullclass = ` class="${classes}"`;
  }
  if(text != undefined && text.trim() != ''){
    texts = text;
  }
  if(typeof data === 'object'){
    datas = ` data-${data.type}="${data.value}"`;
  }
  return `<div${fullid}${fullclass}${datas}>${texts}<div>`;
}

let displayFunctions = {};

displayFunctions.image = (url, id, classes, data) => {
  let fullid = '', fullclass = '',datas = '';
  if(id != undefined && id.trim() != ''){
    fullid = ` id="${id}"`;
  }
  if(classes != undefined && classes.trim() != ''){
    fullclass = ` class="toLoad ${classes}"`;
  }else{
    fullclass = ` class="toLoad"`;
  }
  if(typeof data === 'object'){
    datas = ` data-${data.type}="${data.value}"`;
  }
  return `<img src="${LOADER}" class="loader" /><img src="${url}" ${fullid}${fullclass}${datas} loading="lazy" />`;
}

displayFunctions.video = (src, id, classes, data, ctrls = false) => {
  let fullid = '', fullclass = '',datas = '', ctrl = '';
  if(id != undefined && id.trim() != ''){
    fullid = ` id="${id}"`;
  }
  if(classes != undefined && classes.trim() != ''){
    fullclass = ` class="${classes}"`;
  }
  if(data){
    datas = data;
  }
  if(ctrls){
    ctrl = 'controls preload="auto"';
  }else{
    ctrl = 'autoplay loop muted playsinline'
  }
  let srcPrt = `<source src="${src}" type="video/mp4">`;
  return `<video ${ctrl} loading="lazy" ${fullid}${fullclass}${datas}>${srcPrt}</video>`;
}

displayFunctions.videolink = (src, id, classes, link, data) => {
  let fullid = '', fullclass = '',datas = '';
  if(id != undefined && id.trim() != ''){
    fullid = ` id="${id}"`;
  }
  if(classes != undefined && classes.trim() != ''){
    fullclass = ` class="${classes}"`;
  }
  if(data != undefined){
    datas = data;
  }
  let srcPrt = `<source src="${src}" type="video/mp4">`;
  let vid = `<video autoplay loop muted playsinline loading="lazy" ${fullid}${fullclass}${datas}>${srcPrt}</video>`;
  return `<a href="${link}" target="_blank" rel="noopener noreferrer">${vid}</a>`
}

getLastItem = thePath => {
  let parts = thePath.split('/')
  if(parts[parts.length - 1] == ''){
    return 'index';
  }else{
    return parts[parts.length - 1].split('.')[0];
  }
};

//BUILDERS
populateLinks = columns => {
  columns.forEach(function(column){
    let code = '<div class="column">';
    column.column.forEach(function(btn){
      if(btn.type == 'videolink'){
        code += displayFunctions[btn.type](btn.ref, btn.id, '', btn.link, 'target="_blank"', 'rel="noopener noreferrer"');
      }else{
        if(btn.videocontrols == undefined){
          code += displayFunctions[btn.type](btn.ref, btn.id, "openSlideshow");
        }else{
          code += displayFunctions[btn.type](btn.ref, btn.id, "openSlideshow", '', true);
        }
      }
    })
    code += '</div>';
    document.querySelector('.main-clicks .row').insertAdjacentHTML('beforeend', code);
  })

  //add load listeners for images
  const imgs = document.querySelectorAll('.main-clicks .row .toLoad');
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("load", checkLoading);
  }

  //add click functionality to all show slideshow buttons
  const slideshowBtns = document.querySelectorAll('.main-clicks .row .column .openSlideshow');
   for (let i = 0; i < slideshowBtns.length; i++) {
       slideshowBtns[i].addEventListener("click", open);
   }

}

populateSlider = slides => {
  const navs = document.querySelectorAll('#modal a');
  if(slides.length == 1){
    navs.forEach(function(nav){
      nav.classList.add('hide');
    })
  }else{
    navs.forEach(function(nav){
      nav.classList.remove('hide');
    })
  }
  const oldSlides = document.querySelectorAll('#modal .modalContent .mySlides');
   for (let i = 0; i < oldSlides.length; i++) {
       oldSlides[i].remove();
   }
  const reversed = slides.reverse();
  reversed.forEach(function(slide){
    let code = '<div class="mySlides">';
    if(slide.type == 'videolink'){
      code += displayFunctions[slide.type](slide.ref, '', '', slide.link);
    }else{
      if(slide.videocontrols == undefined){
        code += displayFunctions[slide.type](slide.ref);
      }else{
        code += displayFunctions[slide.type](slide.ref, '', '', '', true);
      }
    }
    if(slide.cap != undefined){
      code += `<div class="caption-container">${slide.cap}</div>`;
    }
    code += '</div>';
    document.querySelector('#modal .modalContent').insertAdjacentHTML('afterbegin', code);
  })
  document.querySelector('#modal .modalContent .mySlides:first-of-type').classList.add('active-slide');
  //add load listeners for images
  const imgs = document.querySelectorAll('#modal .modalContent .mySlides .toLoad');
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("load", checkLoading);
  }
}

//Actions
open = evt => {
  CONTENT.forEach(function(columns){
    columns.column.forEach(function(btns){
        if(btns.id == evt.target.id){
          populateSlider(btns.slides);
          let bgcolor = (btns.background == undefined) ? '' : btns.background;
          let color = (btns.color == undefined) ? '' : btns.color;
          document.getElementById("modal").style.backgroundColor = bgcolor;
          let caps = document.querySelectorAll('#modal .caption-container');
          for (let i = 0; i < caps.length; i++) {
              caps[i].style.color = color;
          }
          document.getElementById("name").style.color = color;
          document.getElementById("modal").style.display = "block";
          document.getElementById("name").style.position = "fixed";

          let url = window.location.origin+window.location.pathname;
          window.history.pushState({ additionalInformation: btns.id }, document.title, url+'#'+btns.id);
          return;
        }
    });
  });
}

closeModal = () => {
  document.getElementById("name").style.position = "absolute";
  document.getElementById("modal").style.display = "none";
  document.getElementById("name").style.color = "#1c1c1c";
  window.history.pushState({ additionalInformation: "no slideshow" }, document.title, window.location.origin+window.location.pathname);

}

checkLoading = evnt => {
   var image = evnt.target;
   var isLoaded = image.complete && image.naturalHeight !== 0;
   if(isLoaded){
     image.previousSibling.remove();
     image.classList.remove('hide');
   }
 };

 checkForHash = json => {
   let hash = location.hash
   if(hash != '') hash = hash.split('#')[1]
   if(hash == '') return;
   let createEvt = {};
   createEvt['target'] = {};
   createEvt['target']['id'] = hash;
   open(createEvt);
 }

//EVENT LISTNERS
document.querySelector('#modal .close').addEventListener("click", closeModal);


//RUN IMMEDIETLY
(function () {

    init(); //on page load - show first slide, hidethe rest

    function init() {
      LOADTHIS = 'database/'+getLastItem(window.location.pathname)+'.json';
      fetch(LOADTHIS)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonResponse) {
        CONTENT = jsonResponse.portfolio;
        populateLinks(CONTENT);
        checkForHash();
      });
    }

    //prev/next functionality
    links = document.querySelectorAll('.modalContent a');

    for (i = 0; i < links.length; i++) {
        links[i].onclick = function () {


            current = this.parentNode;

            var slides = current.getElementsByClassName("mySlides");
            curr_slide = current.getElementsByClassName('active-slide')[0];
            curr_slide.classList.remove('active-slide');

            if (this.className == 'next') {
                if (curr_slide.nextElementSibling.classList.contains('mySlides')) {
                    curr_slide.nextElementSibling.classList.add('active-slide');
                } else {
                    slides[0].classList.add('active-slide');
                }

            }

            if (this.className == 'prev') {

                if (curr_slide.previousElementSibling) {
                    curr_slide.previousElementSibling.classList.add('active-slide');
                } else {
                    slides[slides.length - 1].classList.add('active-slide');
                }
            }
        }
    }
})();
