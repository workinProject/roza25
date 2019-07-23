/*Крестик на специальном предложении*/
let cross = document.getElementById('close');

cross.onclick = function() {
    cross.parentElement.remove();
};
/*----------------------------------*/

/*Главный слайдер*/
$('.main-slider').slick({
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    infinite: true,
	dots: true
});
/*----------------*/

/*Слайдер в карточке товара*/
$('.slider-forN').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  responsive: [
    {
      breakpoint: 425,
      settings: {
        arrows: true,
    prevArrow: $(".prevProd"),
    nextArrow: $(".nextProd"),
      }
    }
  ]
});
$('.slider-navN').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-forN',
  focusOnSelect: true,
  vertical: true,
  arrows:false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        vertical:false,
        centerMode: true,
        }
    }
  ]
});
/*------------------------*/


/*Кнопки для прибавления и удаления количества в инпуте в карточке товара*/
$(function() {
  (function quantityProducts() {
    let $quantityArrowMinus = $(".quantity-arrow-minus");
    let $quantityArrowPlus = $(".quantity-arrow-plus");
    let $quantityNum = $(".quantity-num");
 
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
 
    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }
 
    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});
/*---------------------------------------------------------------------------*/
