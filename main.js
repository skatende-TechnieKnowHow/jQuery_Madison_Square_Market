$(document).ready(() => {
  const $cartMenu =  $('#cart');
  const $accountMenu =  $('#account');
  const $helpMenu =  $('#help');

  $('#cart').on('mouseenter', () => {
    $('#cartMenu').show();
    $('#accountMenu').hide();
    $('#helpMenu').hide();

  })
// mouseleave event handler for #cartMenu on  the '.dropdown-menu'
// use a jQuery method to make the drop-down menu disappear.
//   $('.dropdown-menu').on('mouseleave', () => {
//   $('.dropdown-menu').hide();
//   })

  $('#account').on('mouseenter', () => {
     $('#accountMenu').show();
     $('#cartMenu').hide();
     $('#helpMenu').hide();

  })
// mouseleave event handler #account on the '.dropdown-menu'
//  use a jQuery method to make the drop-down menu disappear.

//    $('.dropdown-menu').on('mouseleave', () => {
//       $('.dropdown-menu').hide();
//   })

  $('#help').on('mouseenter', () => {
     $('#helpMenu').show();
     $('#accountMenu').hide();
     $('#cartMenu').hide();

  })
// mouseleave event handler for #help on the '.dropdown-menu'
// use a jQuery method to make the drop-down menu disappear.

//    $('.dropdown-menu').on('mouseleave', () => {
//       $('.dropdown-menu').hide();
//   })
}); // end ready method
