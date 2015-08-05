/* ===========================================================
 * photoCollage.js 0.1
 *
 * https://github.com/poseidonsw/photoCollage.js
 * MIT licensed
 *
 * Original static design done by Sazzad Hossain
 * at http://cssdeck.com/labs/collage
 *
 * Copyright (C) 2015 poseidonsw.com
 *
 * ========================================================== */

(function ($, document, window, undefined) {
    'use strict';

    $.fn.photoCollage = function (custom) {

  		var offset = 30;
  		var i = 1;
  		var rot = [-7,7,-15,-15,7,-7];
  		var rot_index = 0;

      $(this).addClass("collage");
      var len = $(".collage a").length;
  		for (var row = 0; row <= len/3; row++) {
  			for(var col = 0; col <= len/2; col++ ){
  				if (rot_index == rot.length) { rot_index =0;}
  				$(".collage a:nth-child("+(i++)+")").css({
  		        "transform":"rotate("+rot[rot_index]+"deg)",
  		        "-ms-transform":"rotate("+rot[rot_index]+"deg)",
  		        "-moz-transform":"rotate("+rot[rot_index]+"deg)",
  		        "-webkit-transform":"rotate("+rot[rot_index]+"deg)",
  		        "-o-transform":"rotate("+rot[rot_index]+"deg)",
  		        "margin-left": offset*(col)+(15*row)+"%",
  						"margin-top": (row*125)+"px"
  				});
  		  	rot_index++;
  			}
  	  }

  		var n;
  		var z;

      $(".collage a").hover(
  			function(){
  				n = $(this).css("transform");
  				z = $(this).css("z-index");
  				$(this).css({
  					"z-index": "999",
  					"transform":"rotate(0deg)",
  					"-ms-transform":"rotate(0deg)",
  					"-moz-transform":"rotate(0deg)",
  					"-webkit-transform":"rotate(0deg)",
  					"-o-transform":"rotate(0deg)",
  					"-webkit-transition": "all 0.1s linear",
  					"-moz-transition": "all 0.1s linear",
  					"-o-transition": "all 0.1s linear",
  					"-ms-transition": "all 0.1s linear",
  					"transition": "all 0.1s linear",
  				});
  			},
        function(){
  				$(this).css({
  					"z-index": z,
  					"transform": n,
  					"-ms-transform": n,
  					"-moz-transform": n,
  					"-webkit-transform": n,
  					"-o-transform": n,
  					"-webkit-transition": "all 0.1s linear",
  					"-moz-transition": "all 0.1s linear",
  					"-o-transition": "all 0.1s linear",
  					"-ms-transition": "all 0.1s linear",
  					"transition": "all 0.1s linear",
  				});
  			}
      );
    };
})(jQuery, document, window);
