humburger_icon.addEventListener("click", ()=> {
    nav_menu.classList.add("display");
});

closeIcon.addEventListener("click", ()=> {
    nav_menu.classList.remove("display");
});


document.addEventListener("click", (event) => {
    // Check if the clicked element is not inside the menu
    if (!nav_menu.contains(event.target) && !nav_bar.contains(event.target)) {
      nav_menu.classList.remove("display");
    }
  });


  var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 



// let nav_bar = document.getElementById("humburger-icon");
//  function togglemenu() {
//     if (!nav_menu.contains(event.target) && !nav_bar.contains(event.target)) {
//         nav_menu.classList.remove("display");
//       }
//  }