$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        //scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    if(document.querySelector(".typing")){
    var typed = new Typed(".typing", {
        strings: ["Artist","Designer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    }
    if(document.querySelector(".typing-2")){
    var typed = new Typed(".typing-2", {
        strings: ["Artist","Designer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    }
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });
    const images = document.querySelectorAll(".lightbox img");
    const lightbox = document.getElementById("lightbox-view");
    const lightboxImg = document.getElementById("lightbox-img");
    if(lightbox && lightboxImg){
    images.forEach(img =>{
        img.addEventListener("click",function(){
            lightbox.style.display="flex";
            lightboxImg.src=this.src;
        });
    });
    lightbox.addEventListener("click",function(){
        lightbox.style.display="none";
    });
   }
   const sections = document.querySelectorAll("section");
   const navLinks = document.querySelectorAll(".navbar .menu li a");
   window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
   });
   const toggle = document.getElementById("dark-mode-toggle");
   toggle.addEventListener("click", function(e){
    e.preventDefault();
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        this.innerHTML = '<i class="fas fa-sun"></i>';
    }else{
        this.innerHTML = '<i class="fas fa-moon"></i>';
    }
   });
});