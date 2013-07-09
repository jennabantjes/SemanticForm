;(function($){

  $('#cardnumber').blur(function(){

      var value = $('#cardnumber').val();

      if (/^3[47]/.test(value))
      {
        alert('amex');
      }

      else if(/^4/.test(value))
      {
        alert('visa');
      }

      else if(/^5[1-5]/.test(value))
      {
        alert('mastercard');
      }

      else if(/^6(?:011|5)/.test(value))
      {
        alert('discover');
      }

      else
      {
        alert('we cant seem to find your card type');
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
