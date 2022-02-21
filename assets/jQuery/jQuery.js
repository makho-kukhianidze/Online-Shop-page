$(document).ready(function () {
    $("#btn-statistic").click(function () {
      var div = $(".box-1");
      var divTwo = $(".box-2");
      var divThree = $(".box-3");
      var divFour = $(".box-4");
      var divFive = $(".box-5");
      div.animate({ height: '210px' }, 1000);
      divTwo.animate({ height: '190px' }, 1000);
      divThree.animate({ height: '140px' }, 1000);
      divFour.animate({ height: '110px' }, 1000);
      divFive.animate({ height: '90px' }, 1000);
    });
  });
  $(document).ready(function () {
    $("#btn-statistic-reset").click(function () {
      var div = $(".box-1");
      var divTwo = $(".box-2");
      var divThree = $(".box-3");
      var divFour = $(".box-4");
      var divFive = $(".box-5");
      div.animate({ height: '50px' }, "faster");
      divTwo.animate({ height: '50px' }, "faster");
      divThree.animate({ height: '50px' }, "faster");
      divFour.animate({ height: '50px' }, "faster");
      divFive.animate({ height: '50px' }, "faster");
    });
  });
$(document).ready(function () {
    $("#btn-sta-year").click(function () {
      var divSix = $(".box-6");
      var divSeven = $(".box-7");
      var divEight = $(".box-8");
      divSix.animate({ width: '200%' }, "faster");
      divSeven.animate({ width: '180%' }, "faster");
      divEight.animate({ width: '150%' }, "faster");
    });
  });
  $(document).ready(function () {
    $("#btn-sta-year-res").click(function () {
      var divSix = $(".box-6");
      var divSeven = $(".box-7");
      var divEight = $(".box-8");
      divSix.animate({ width: '40%' }, "faster");
      divSeven.animate({ width: '40%' }, "faster");
      divEight.animate({ width: '40%' }, "faster");
    });
  });
$(document).ready(function(){
    $("#shList").click(function(){
      $("#div2").fadeToggle();
      $("#div4").fadeToggle();
      $("#div5").fadeToggle();
      $("#div6").fadeToggle();
      $("#div8").fadeToggle();
      $("#div9").fadeToggle();
    });
  });
  $(document).ready(function(){
    $("#shListNot").click(function(){
      $("#div1").fadeToggle();
      $("#div3").fadeToggle();
      $("#div7").fadeToggle();
      $("#div10").fadeToggle();
    });
  });