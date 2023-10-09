(function($) {
  "use strict";

  
  let btn = document.querySelectorAll('.Wallet_btns span , .pay_select a')
  btn.forEach(btns => {
      btns.addEventListener('click', () => {
          removeBts()
          btns.classList.add('active')
      })
  })

  function removeBts() {
      btn.forEach(btns => {
          btns.classList.remove('active')
      })
  }

  $('.transfer').click(function () {
    $('.Allocate_wallet_wrp ').toggleClass('change')
  })


  $('select').niceSelect();
 
})(jQuery);
