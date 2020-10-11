
let isMobile = {
  Android: function() {return navigator.userAgent.match(/Android/i);},
  BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
  iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
  Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
  Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
  any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

let body = document.querySelector('body');

if (isMobile.any()) {
  body.classList.add('touch');

  $('[data-drop]').click(function(){
  $(this).toggleClass('active'); 
  // $(this).next().toggleClass('show');
  $(this).next().slideToggle(200);
});
  
} else {
  body.classList.add('mouse');
}




