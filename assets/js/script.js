  // js for responsive navigation menu
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      nav.classList.toggle("active");
  });

  // js for video slider navigation
  const btns = document.querySelectorAll(".nav-btn");
  const slides = document.querySelectorAll(".video-slide");
  const contents = document.querySelectorAll(".content");

  var sliderNav = function(manual){
    btns.forEach((btns)=>{
        btns.classList.remove("active");
    });
    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });
    contents.forEach((content)=>{
        content.classList.remove("active");
    });
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
  }

  btns.forEach((btns , i) =>{
    btns.addEventListener("click",() =>{
        sliderNav(i);
    });
  });