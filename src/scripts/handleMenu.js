document.addEventListener('astro:page-load', menu);

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