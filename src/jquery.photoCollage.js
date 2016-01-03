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


      var offset = 20;
  		var i = 1;
  		var rot = [-7,7,-15,15,7,-7];
  		var rot_index = 0;


      $(this).addClass("collage");
      var offset_top = $(window).height()/8;
      var offset_left = $(window).width()/120;
      var temp = $(window).width()
      var max_size = $(".collage a").css("max-width");
      var len = $(".collage a").length;
      var cols = 3;
      var rows = len/cols;

  		for (var row = 0; row < rows; row++) {
  			for(var col = 0; col < cols; col++ ){
  				if (rot_index == rot.length) { rot_index =0;}
  				$(".collage a:nth-child("+(i++)+")").css({
  		        "transform":"rotate("+rot[rot_index]+"deg)",
  		        "-ms-transform":"rotate("+rot[rot_index]+"deg)",
  		        "-moz-transform":"rotate("+rot[rot_index]+"deg)",
  		        "-webkit-transform":"rotate("+rot[rot_index]+"deg)",
  		        "-o-transform":"rotate("+rot[rot_index]+"deg)",
  		        "margin-left": offset*(col)+"%",
  						"margin-top": offset_top+(row*115)+"px"
  				});
  		  	rot_index++;
  			}

  	  }

      var len = $(".collage a").length;
      var i;
      var max = 220;
      var screen_width = $(window).width();
      var collage_width = $(".collage").width();
      for (i = 0; i < len; i++) {
        if ( collage_width/3 < max) {
          $(".collage a").css('max-width', (collage_width/3+20)+"px");
          $(".collage a img").css('max-width', collage_width/3+"px");
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
      var first = true;

      $(window).resize(function(){
        var len = $(".collage a").length;
        var i;
        var max = 220;
        var screen_width = $(window).width();
        var collage_width = $(".collage").width();

        for (i = 0; i < len; i++) {
          if ( collage_width/3 < max) {
            $(".collage a").css('max-width', (collage_width/3+20)+"px");
            $(".collage a img").css('max-width', collage_width/3+"px");
          }
          if (screen_width == collage_width && first) {
            first = false;
            $(".collage a").css('max-width', (max+20)+"px");
            $(".collage a img").css('max-width', max+"px");


          } else {
            first = true;
          }
        }
        var col_size = offset*(3)+$(".collage a").width();
        var paddingLeft = screen_width - col_size;
        if (screen_width > 768 ) {
          paddingLeft = paddingLeft - 330;
        }
        $(".collage").css('padding-left', paddingLeft/4+"px")
      });

      $(window).load(function(){
        var len = $(".collage a").length;
        var i;
        var max = 220;
        var screen_width = $(window).width();
        var collage_width = $(".collage").width();
        for (i = 0; i < len; i++) {
          if ( collage_width/3 < max) {
            $(".collage a").css('max-width', (collage_width/3+20)+"px");
            $(".collage a img").css('max-width', collage_width/3+"px");
          }
        }
        var col_size = offset*(3)+$(".collage a").width();
        var paddingLeft = screen_width - col_size;
        if (screen_width > 768 ) {
          paddingLeft = paddingLeft - 330;
        }
        $(".collage").css('padding-left', paddingLeft/4+"px")
      });
    };
})(jQuery, document, window);
