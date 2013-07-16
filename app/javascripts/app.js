;(function($){
  "use strict";

  Modernizr.load({
    test: Modernizr.input.required,
    nope: 'javascripts/libs/jquery.validate.js'
  });

  // Find Card Type
  function checkSecurityCode(){
          var code = $('.security').val().length;

          if(code === 3)
          {
            $('.security').removeClass('invalid').addClass('valid');
          }
          else
          {
            $('.security').removeClass('valid').addClass('invalid');
          }
  };

  $('#cardnumber').blur(function(){

      var value = $('#cardnumber').val();

      // Amex
      if (/^3[47][0-9]{13}$/.test(value))
      {
        $('#amex').fadeTo(100, 1);
        $('#visa, #mastercard, #discover').fadeTo(300, 0.5);
        $('.security-image').removeClass('regular').addClass('amex');

        $('.security').blur(function(){
            var code = $('.security').val().length;

            if(code === 4)
            {
              $('.security').removeClass('invalid').addClass('valid');
            }
            else
            {
              $('.security').removeClass('valid').addClass('invalid');
            }
        });
      }

      // Visa
      else if(/^4[0-9]{12}(?:[0-9]{3})?$/.test(value))
      {
        $('#visa').fadeTo(100, 1);
        $('#amex, #mastercard, #discover').fadeTo(300, 0.5);
        $('.security-image').removeClass('amex').addClass('regular');

        $('.security').blur(checkSecurityCode);
      }

      // Mastercard
      else if(/^5[1-5][0-9]{14}$/.test(value))
      {
        $('#mastercard').fadeTo(100, 1);
        $('#visa, #amex, #discover').fadeTo(300, 0.5);
        $('.security-image').removeClass('amex').addClass('regular');

        $('.security').blur(checkSecurityCode);
      }

      // Discover
      else if(/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(value))
      {
        $('#discover').fadeTo(100, 1);
        $('#visa, #mastercard, #amex').fadeTo(300, 0.5);
        $('.security-image').removeClass('amex').addClass('regular');

        $('.security').blur(checkSecurityCode);
      }

      else
      {
        $('#cardnumber').val('Sorry, but that number is invalid');
      }
  });

  // Show/Hide Password
  $('#checkbox').click(function(){
    if($('#checkbox').is(':checked'))
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

  $('#checkbox').click(function(){

  });

})(jQuery);
