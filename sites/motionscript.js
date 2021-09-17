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

function open15() {
    document.getElementById("mo15").style.display = "block";
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
    document.getElementById("mo15").style.display = "none";
    document.getElementById("name").style.color = "#1c1c1c";
}

(function () {

    init(); //on page load - show first slide, hide the rest

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