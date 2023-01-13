const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const socialMedia = document.querySelector(".social-media-container");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.
    addEventListener("click", ()=>{
        hamburger.classList.remove("active");
        navBar.classList.remove("active");
    }))

    var typed = new Typed(".auto-type", {
        strings: ["Hi, I am Sagar Das...", "and I do a number of cool things,", "Explore my Portfolio to know more."],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    })

   myFunction = () => {
    mailContainer = document.querySelector('.mail-container');
    animatedText= document.querySelector('.animated-text-header');
    
    if(mailContainer.style.opacity==0){
        mailContainer.style.opacity = 1;
        animatedText.style.opacity = 0;
    }
    else{
        mailContainer.style.opacity = 0;
        animatedText.style.opacity = 1;
    }
    
   }

   myFunction1=()=>{
    mailContainer.style.opacity = 0;
    animatedText.style.opacity = 1;
   }