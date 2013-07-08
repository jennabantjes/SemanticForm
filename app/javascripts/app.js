
  function getCreditCardType(accountNumber)
  {

    //start without knowing the credit card type
    var result = "unknown";

    //first check for MasterCard
    if (/^5[1-5]/.test(accountNumber))
    {
      result = "mastercard";
    }

    //then check for Visa
    else if (/^4/.test(accountNumber))
    {
      result = "visa";
    }

    //then check for AmEx
    else if (/^3[47]/.test(accountNumber))
    {
      result = "amex";
    }

    //then check for Discover
    else if (/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/.test(accountNumber))
    {
      result="discover";
    }

    return result;
  }

  var type = getCreditCardType("5555-5555-5555-4444");

  switch (type)
  {
    case "mastercard":
      $('.cardtype').addClass('inactive');
      $('#mastercard').addClass('active');
      break;

    case "visa":
      $('.cardtype').addClass('inactive');
      $('#visa').addClass('active');
      break;

    case "amex":
      $('.cardtype').addClass('inactive');
      $('#amex').addClass('active');
      break;

    case "discover":
      $('.cardtype').addClass('inactive');
      $('#discover').addClass('active');
      break;

    default:
      //don't do anything
  }

function handleEvent(event)
{
  var value   = event.target.value,
      type    = getCreditCardType(value);

  switch (type)
  {
    case "mastercard":
        //show MasterCard icon
        break;

    case "visa":
        //show Visa icon
        break;

    case "amex":
        //show American Express icon
        break;

    default:
        //clear all icons?
        //show error?
  }
}

// or window.onload
document.addEventListener("DOMContentLoaded", function(){
  var textbox = document.getElementById("cardnumber");
  textbox.addEventListener("keyup", handleEvent, false);
  textbox.addEventListener("blur", handleEvent, false);
}, false);