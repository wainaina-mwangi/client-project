const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');
// const counts = document.querySelectorAll('.count');


menuBtn.addEventListener('click',()=>{
  navLinks.classList.toggle("open")

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class",isOpen?"ri-close-line":"ri-menu-line")
})





  
    document.addEventListener("DOMContentLoaded", function() {
      // Define your ScrollReveal options
      const scrollRevealOption = {
        distance: '50px',
        duration: 800,
        easing: 'ease-out',
        origin: 'bottom',
        opacity: 0,
        reset: false,
      };

      // Initialize ScrollReveal
      const sr = ScrollReveal();

      // Reveal elements
      sr.reveal(".header_container p", {
        ...scrollRevealOption,
      });

      sr.reveal(".header_container h1", {
        ...scrollRevealOption,
        delay: 500,  // Add delay for h1
      });

      sr.reveal(".about_image img", {
        ...scrollRevealOption,
        origin:"left",
      });
       sr.reveal(".about_content .section_sub-header", {
        ...scrollRevealOption,
        delay: 500, 
      });

      sr.reveal(".about_content .section_description", {
        ...scrollRevealOption,
        delay: 1000,
      });

      sr.reveal(".about_btn", {
        ...scrollRevealOption,
        delay: 2000,  
      });

       sr.reveal(".room_card", {
        ...scrollRevealOption,
        interval: 500,  
      });

      sr.reveal(".service_list li", {
        ...scrollRevealOption,
        interval: 500, 
        origin:"right", 
      });

      sr.reveal(".explore_bg", {
        ...scrollRevealOption,
        interval: 500, 
        origin:"right", 
      });

    });


// after using the querryselector method to access the dom on the number of counts

const counts = document.querySelectorAll('.count')
const speed = 90

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})

  



