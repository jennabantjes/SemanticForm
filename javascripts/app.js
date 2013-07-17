;(function($){
  "use strict";

  Modernizr.load({
    test: Modernizr.input.required,
    nope: 'javascripts/libs/jquery.validate.js'
  });

// Show/Hide Password
// Add dummy text field for password and add toggle link to form
    $('input[type=password]').each(function(){
      var el = $(this), elPH = el.attr("placeholder");
      el.addClass("offPage").after('<input class="passText" id="passText" placeholder="' + elPH + '" type="text" />');
    });

    //  keep password field and dummy text field in sync
    $('input[type=password]').keyup(function(){
      var elText = $(this).val();
      $('.passText').val(elText);
    });
    $('.passText').keyup(function(){
      var elText = $(this).val();
      $('input[type=password]').val(elText);
    });

    // Toggle checkbox
    $('#checkbox').click(function(e){
      $('.show-password').toggleClass('unchecked');
      $('input[type=password], .passText').toggleClass("offPage");
      e.preventDefault(); // <-- prevent any default actions
    });

  // Find Card Type
  function checkSecurityCode(){
          var code = $('.security').val().length;

          if(code === 3)
          {
            $('.security-code').removeClass('invalid').addClass('valid');
          }
          else
          {
            $('.security-code').removeClass('valid').addClass('invalid');
          }
  };

  $('#cardnumber').blur(function(){

      var value = $('#cardnumber').val();

      // Amex
      if (/^3[47][0-9]{13}$/.test(value))
      {
        $('#amex-image').fadeTo(100, 1);
        $('#visa-image, #mastercard-image, #discover-image').fadeTo(200, 0.5);
        $('.security-image').removeClass('regular').addClass('amex');
        $('.validation').removeClass('invalid').addClass('valid');

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
        $('#visa-image').fadeTo(100, 1);
        $('#amex-image, #mastercard-image, #discover-image').fadeTo(200, 0.5);
        $('.security-image').removeClass('amex').addClass('regular');
        $('.validation').removeClass('invalid').addClass('valid');

        $('.security').blur(checkSecurityCode);
      }

      // Mastercard
      else if(/^5[1-5][0-9]{14}$/.test(value))
      {
        $('#mastercard-image').fadeTo(100, 1);
        $('#visa-image, #amex-image, #discover-image').fadeTo(200, 0.5);
        $('.security-image').removeClass('amex').addClass('regular');
        $('.validation').removeClass('invalid').addClass('valid');

        $('.security').blur(checkSecurityCode);
      }

      // Discover
      else if(/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(value))
      {
        $('#discover-image').fadeTo(100, 1);
        $('#visa-image, #mastercard-image, #amex-image').fadeTo(200, 0.5);
        $('.security-image').removeClass('amex').addClass('regular');
        $('.validation').removeClass('invalid').addClass('valid');

        $('.security').blur(checkSecurityCode);
      }

      else
      {
        $('.validation').removeClass('valid').addClass('invalid');
      }
  });

// Fade image on click
    $('#visa-image').click(function(){
      $(this).fadeTo(100, 1);
      $('#mastercard-image, #amex-image, #discover-image').fadeTo(300, 0.5);
    });

    $('#mastercard-image').click(function(){
      $(this).fadeTo(100, 1);
      $('#visa-image, #amex-image, #discover-image').fadeTo(300, 0.5);
    });

    $('#amex-image').click(function(){
      $(this).fadeTo(100, 1);
      $('#mastercard-image, #visa-image, #discover-image').fadeTo(300, 0.5);
    });

    $('#discover-image').click(function(){
      $(this).fadeTo(100, 1);
      $('#mastercard-image, #amex-image, #visa-image').fadeTo(300, 0.5);
    });

})(jQuery);
