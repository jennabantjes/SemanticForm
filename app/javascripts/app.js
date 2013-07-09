;(function($){

  $('#cardnumber').blur(function(){

      var value = $('#cardnumber').val();

      if (/^3[47][0-9]{13}$/.test(value))
      {
        $('#amex').fadeIn(100, 0.8);
        $('#visa, #mastercard, #discover').fadeTo(300, 0.5);
      }

      else if(/^4[0-9]{12}(?:[0-9]{3})?$/.test(value))
      {
        $('#visa').fadeIn(100, 1);
        $('#amex, #mastercard, #discover').fadeTo(300, 0.5);
      }

      else if(/^5[1-5][0-9]{14}$/.test(value))
      {
        $('#mastercard').fadeIn(100, 1);
        $('#visa, #amex, #discover').fadeTo(300, 0.5);
      }

      else if(/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(value))
      {
        $('#discover').fadeIn(100, 1);
        $('#visa, #mastercard, #amex').fadeTo(300, 0.5);
      }

      else
      {
        $('#cardnumber').val('Sorry, but that number is invalid');
      }
  });

})(jQuery);


;(function($){
  "use strict";

  $('#unmask').click(function(){
    if($('#unmask').is(':checked'))
    {
      $('.form').find('input:password').each(function(){
        $("<input type='text' />").attr({name: this.name, value: this.value}).insertBefore(this);
      }).remove();
    }

    else
    {
      $('.form').find('input:text').each(function(){
        $("<input type='password' />").attr({name: this.name, value: this.value}).insertBefore(this);
      }).remove();
    }
  });
})(jQuery);
