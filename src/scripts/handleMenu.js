/* Check if the code is running on a mobile or a PC, because mobile browsers don't support view transitions */
if (navigator.userAgent.match(/Android/i) 
|| navigator.userAgent.match(/webOS/i) 
|| navigator.userAgent.match(/iPhone/i) 
|| navigator.userAgent.match(/iPad/i) 
|| navigator.userAgent.match(/iPod/i) 
|| navigator.userAgent.match(/BlackBerry/i) 
|| navigator.userAgent.match(/Windows Phone/i)) {
  menu();
} else {
  document.addEventListener('astro:page-load', menu);
}

function menu(){
  const btnMobile = document.querySelector('.menuMobile');
  const navigation = document.querySelector('.navigation');

  btnMobile.addEventListener('click', () => {
    btnMobile.classList.toggle("active");

    if(navigation.ariaHidden === 'true'){
      navigation.ariaHidden = 'false';
      document.body.style.overflow = 'hidden';
    }else{
      navigation.ariaHidden = 'true';
      document.body.style.overflow = 'auto';
    }
  });

  const desktopMediaQuery = window.matchMedia('(min-width: 1000px)');

  // Update the body overflow property when the window size is greater or less than 1000px
  desktopMediaQuery.addEventListener('change', (evt) => {
    if (evt.matches && (navigation.ariaHidden === 'false')) {
      document.body.style.overflow = 'auto';
    }

    if (!evt.matches && (navigation.ariaHidden === 'false')) {
      document.body.style.overflow = 'hidden';
    }
  });
}