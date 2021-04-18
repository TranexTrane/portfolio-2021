var myBurger    = document.querySelector('.burger-menu');
var btnBurger = document.querySelector('.btn-burger');
    btnBurger.addEventListener('click', function() {   
        myBurger.classList.add("active");
});

let close = document.querySelector('.close')
      close.addEventListener('click', function() {
        myBurger.classList.remove("active");
  });