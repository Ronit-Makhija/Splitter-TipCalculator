var array = [];
var a = 0;


$(".custom").click(function(){
  array.pop($(".button-n").html());
  $(".button-n").removeClass("button-click");
  a = 1;
})

$(".button-n").click(function(){
  array.pop($(".button-n").html());
  $(".custom").val('');
  $(".button-n").removeClass("button-click");
  $(this).addClass("button-click");
  let x = $(this).html();
  let y = x.slice(0,x.length - 1);
  array.push(y);
  console.log(array);
})



$(".buttonr").click(function(){
  $(".input1").val('');
  $(".button-n").removeClass("button-click");
  $(".tip-ammount").html("$0.0");
  $(".total-bill").html("$0.0");
  $(".p1").html("");
  $(".p2").html("");
  $(".input2").removeClass("error");
  $(".bill1").removeClass("error");
})

$(".cal").click(function(){
  if($(".input2").val() === "0" || $(".input2").val() === "" || $(".bill1").val() === "0" || $(".bill1").val() === "0"){

    if(($(".bill1").val() === "0" || $(".bill1").val() === "") && ($(".input2").val() !== "0" && $(".input2").val() !== "")){
      $(".p1").html("Can't be Zero!");
      $(".bill1").addClass("error");
    }

    else if (($(".input2").val() === "0" || $(".input2").val() === "") &&  ($(".bill1").val() !== "0" && $(".bill1").val() !== "")){
      $(".p2").html("Can't be Zero!");
      $(".input2").addClass("error");
    }
    else{
      $(".p1").html("Can't be Zero!");
      $(".bill1").addClass("error");
      $(".p2").html("Can't be Zero!");
      $(".input2").addClass("error");
    }
  }

  else{
    $(".input2").removeClass("error");
    $(".bill1").removeClass("error");
    $(".p1").html("");
    $(".p2").html("");
    var bill = $(".bill1").val();


    if(a === 1){
      var tip = bill * ($(".custom").val()) / 100;
      a = 0;
    }
    else{
      var tip = (bill * array[0]) / 100;
    }


    var numOfPerson = $(".input2").val();
    var tipPerPerson = tip / numOfPerson;
    $(".tip-ammount").html("$" + Math.round(tipPerPerson));

    var totalPerPerson = bill / numOfPerson;
    $(".total-bill").html("$" + Math.round(totalPerPerson));
  }
})
