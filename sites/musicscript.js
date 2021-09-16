function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('#project_body', true);
    setVisible('#loading', false);
  });
  
  function open2() {
    document.getElementById("mo2").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open3() {
    document.getElementById("mo3").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open4() {
    document.getElementById("mo4").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open5() {
    document.getElementById("mo5").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open6() {
    document.getElementById("mo6").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open7() {
    document.getElementById("mo7").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open8() {
    document.getElementById("mo8").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open9() {
    document.getElementById("mo9").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open10() {
    document.getElementById("mo10").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open11() {
    document.getElementById("mo11").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open12() {
    document.getElementById("mo12").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open13() {
    document.getElementById("mo13").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open14() {
    document.getElementById("mo14").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open15() {
    document.getElementById("mo15").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open16() {
    document.getElementById("mo16").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open17() {
    document.getElementById("mo17").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open18() {
    document.getElementById("mo18").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open19() {
    document.getElementById("mo19b").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open20() {
    document.getElementById("mo20").style.display = "block";
    document.getElementById("name").style.position = "fixed";
    document.getElementById("name").style.color = "white";

}

function open21() {
    document.getElementById("mo21").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}


function open23() {
    document.getElementById("mo23").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open25() {
    document.getElementById("mo25").style.display = "block";
    document.getElementById("name").style.position = "fixed";
    document.getElementById("name").style.color = "white";
}

function open26() {
    document.getElementById("mo26").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open27() {
    document.getElementById("mo27").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open28() {
    document.getElementById("mo28").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open29() {
    document.getElementById("mo29").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open30() {
    document.getElementById("mo30").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open31() {
    document.getElementById("mo31").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open33() {
    document.getElementById("mo33").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open34() {
    document.getElementById("mo34").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open35() {
    document.getElementById("mo35").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open36() {
    document.getElementById("mo36").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open37() {
    document.getElementById("mo37").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open38() {
    document.getElementById("mo38").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open39() {
    document.getElementById("mo39").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open40() {
    document.getElementById("mo40").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open41() {
    document.getElementById("mo41").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open44() {
    document.getElementById("mo44").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open46() {
    document.getElementById("mo46").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open48() {
    document.getElementById("mo48").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open51() {
    document.getElementById("mo51").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open54() {
    document.getElementById("mo54").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open55() {
    document.getElementById("mo55").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

function open56() {
    document.getElementById("mo56").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}



function closeModal() {
    document.getElementById("name").style.position = "absolute";
    document.getElementById("mo2").style.display = "none";
    document.getElementById("mo3").style.display = "none";
    document.getElementById("mo4").style.display = "none";
    document.getElementById("mo5").style.display = "none";
    document.getElementById("mo6").style.display = "none";
    document.getElementById("mo7").style.display = "none";
    document.getElementById("mo8").style.display = "none";
    document.getElementById("mo9").style.display = "none";
    document.getElementById("mo10").style.display = "none";
    document.getElementById("mo11").style.display = "none";
    document.getElementById("mo12").style.display = "none";
    document.getElementById("mo13").style.display = "none";
    document.getElementById("mo14").style.display = "none";
    document.getElementById("mo15").style.display = "none";
    document.getElementById("mo16").style.display = "none";
    document.getElementById("mo17").style.display = "none";
    document.getElementById("mo18").style.display = "none";
    document.getElementById("mo19b").style.display = "none";
    document.getElementById("mo20").style.display = "none";
    document.getElementById("mo21").style.display = "none";
    document.getElementById("mo23").style.display = "none";
    document.getElementById("mo25").style.display = "none";
    document.getElementById("mo26").style.display = "none";
    document.getElementById("mo27").style.display = "none";
    document.getElementById("mo28").style.display = "none";
    document.getElementById("mo29").style.display = "none";
    document.getElementById("mo30").style.display = "none";
    document.getElementById("mo31").style.display = "none";
    document.getElementById("mo33").style.display = "none";
    document.getElementById("mo34").style.display = "none";
    document.getElementById("mo35").style.display = "none";
    document.getElementById("mo36").style.display = "none";
    document.getElementById("mo37").style.display = "none";
    document.getElementById("mo38").style.display = "none";
    document.getElementById("mo39").style.display = "none";
    document.getElementById("mo40").style.display = "none";
    document.getElementById("mo41").style.display = "none";
    document.getElementById("mo44").style.display = "none";
    document.getElementById("mo46").style.display = "none";
    document.getElementById("mo48").style.display = "none";
    document.getElementById("mo51").style.display = "none";
    document.getElementById("mo54").style.display = "none";
    document.getElementById("mo55").style.display = "none";
    document.getElementById("mo56").style.display = "none";
    document.getElementById("name").style.color = "#1c1c1c";
}

(function () {

    init(); //on page load - show first slide, hidethe rest

    function init() {

        parents = document.getElementsByClassName('modalContent');

        for (j = 0; j < parents.length; j++) {
            var slides = parents[j].getElementsByClassName("mySlides");
            slides[0].classList.add('active-slide');
        }
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