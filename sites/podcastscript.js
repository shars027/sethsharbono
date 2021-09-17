function open1() {
    document.getElementById("mo1").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}

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

function open16() {
    document.getElementById("mo16").style.display = "block";
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

function open24() {
    document.getElementById("mo24").style.display = "block";
    document.getElementById("name").style.position = "fixed";
}





function closeModal() {
    document.getElementById("name").style.position = "absolute";
    document.getElementById("mo1").style.display = "none";
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
    document.getElementById("mo13").style.display = "none";
    document.getElementById("mo16").style.display = "none";
    document.getElementById("mo18").style.display = "none";
    document.getElementById("mo19b").style.display = "none";
    document.getElementById("mo24").style.display = "none";
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