var array = [];
var a = 0;


$(".custom-tip").click(function(){
  array.pop($(".tip-buttons").html());
  $(".tip-buttons").removeClass("button-click");
  a = 1;
})

$(".tip-buttons").click(function(){
  array.pop($(".tip-buttons").html());
  $(".custom-tip").val('');
  $(".tip-buttons").removeClass("button-click");
  $(this).addClass("button-click");
  let x = $(this).html();
  let y = x.slice(0,x.length - 1);
  array.push(y);
  console.log(array);
})



$(".reset-button").click(function(){
  $(".inputs").val('');
  $(".tip-buttons").removeClass("button-click");
  $(".tip-ammount").html("$0.0");
  $(".total-bill").html("$0.0");
  $(".p1").html("");
  $(".p2").html("");
  $(".nop-input").removeClass("error");
  $(".bill-input").removeClass("error");
})

$(".calculate-button").click(function(){
  if($(".nop-input").val() === "0" || $(".nop-input").val() === "" || $(".bill-input").val() === "0" || $(".bill-input").val() === "0"){

    if(($(".bill-input").val() === "0" || $(".bill-input").val() === "") && ($(".nop-input").val() !== "0" && $(".nop-input").val() !== "")){
      $(".p1").html("Can't be Zero!");
      $(".bill-input").addClass("error");
    }

    else if (($(".nop-input").val() === "0" || $(".nop-input").val() === "") &&  ($(".bill-input").val() !== "0" && $(".bill-input").val() !== "")){
      $(".p2").html("Can't be Zero!");
      $(".nop-input").addClass("error");
    }
    else{
      $(".p1").html("Can't be Zero!");
      $(".bill-input").addClass("error");
      $(".p2").html("Can't be Zero!");
      $(".nop-input").addClass("error");
    }
  }

  else{
    $(".nop-input").removeClass("error");
    $(".bill-input").removeClass("error");
    $(".p1").html("");
    $(".p2").html("");
    var bill = $(".bill-input").val();


    if(a === 1){
      var tip = bill * ($(".custom-tip").val()) / 100;
      a = 0;
    }
    else{
      var tip = (bill * array[0]) / 100;
    }


    var numOfPerson = $(".nop-input").val();
    var tipPerPerson = tip / numOfPerson;
    $(".tip-ammount").html("$" + Math.round(tipPerPerson));

    var totalPerPerson = bill / numOfPerson;
    $(".total-bill").html("$" + Math.round(totalPerPerson));
  }
})
