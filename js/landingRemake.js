//탭버튼 on&off
let button = document.querySelectorAll(".QAWrap > li > button");
let text = document.querySelectorAll(".QAWrap > li > div");

button.forEach((e, i) => {
    e.addEventListener('click', function(){
        
        button.forEach(el => el.classList.remove('act'));

        e.classList.add("act");

        text.forEach(el => {
            el.classList.remove('active');
        })

        text[i].classList.add("active");

        if ( e.classList.contains("act")){
            e.addEventListener('click', function(){
                text[i].classList.toggle("active");

                e.classList.toggle("act");
            })
        }
    })
})

//클릭했을때 부드럽게 넘어가는 효과
document.querySelectorAll(".sns li a").forEach(elem => {
    elem.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(elem.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
    });
})

//gsap
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({repeat: 10000, repeatDelay: 12})

tl.from('.mainText', {y: 50, duration: 1, opacity: 0});
tl.from('.strengthEx', {y: 50, duration: 1, opacity: 0, delay: 0.1});
tl.from('.contWrap', {y: 50, duration: 1, opacity: 0, delay: 0.3});

//gsap 효과 발생위치 조절


//헤더 색깔 바꾸기
let header = document.getElementById("header");

window.addEventListener('scroll', function(){
    let scroll = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;

    if ( scroll >= document.getElementById('section2').offsetTop ){
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }

    if ( scroll >= document.getElementById('section3').offsetTop ){
        header.classList.add("scroll_down");
    } else {
        header.classList.remove("scroll_down");
    }

    if ( scroll >= document.getElementById('section4').offsetTop ){
        header.classList.add("scroll_last");
    } else {
        header.classList.remove("scroll_last");
    }
})
