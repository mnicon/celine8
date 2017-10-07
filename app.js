
$(document).ready (function(){

	// filter function 
	$("#celine").click (function(){
		$(".box").filter(".nicon").hide(2000);
		$(".celine").show (2000);
	});

	$("#nicon").click(function(){
		$(".box").filter(".celine").hide(2000);
		$(".nicon").show(2000);
	});

	$("#all").click(function(){
		$(".box").show(2000);
	});

	// datepicker start 
	  $( "#datepicker_section" ).datepicker();
    

// datepicker end

});

// wow animation er
 new WOW().init();