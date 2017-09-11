




//小图片左右切换效果
+function(){
	const MOVEWIDTH=136;
	var $LICOUNT=$('div.inner>a').length;
	var moveCount=0;
	var btnRight=$('div.thisImg>button.btnRight');
	var btnLeft=$('div.thisImg>button.btnLeft');


	btnLeft.on('click',liMove);
	btnRight.on('click',liMove);

	function liMove(){
		if($(this).hasClass("disabled")==false){
			if($(this).attr('class')=="btnRight"){moveCount++}
			else{moveCount--}
			$(this).siblings('.aside').find('.inner').css('left',`${-MOVEWIDTH*moveCount}px`);
			checkA();
		}
	}

	function checkA(){
		"use strict";
		if(moveCount==0){
			btnLeft.addClass('disabled');
		}
		else if($LICOUNT-moveCount==4){
			btnRight.addClass('disabled');
		}
		else{
			btnLeft.attr('class','btnLeft');
			btnRight.attr('class','btnRight');
		}
	}

}();

//点击小图片，对应切换大图片效果
+function(){
	"use strict";
	$('div.inner>a').on('mouseover',function(){
		$(this).find('img').css('opacity','0.5');
	});
	$('div.inner>a').on('mouseout',function(){
		$(this).find('img').css('opacity','1');
	});

	$('div.thisImg').on('mouseover',function(){
		$(this).children('button').css('display','block');
	});
	$('div.thisImg').on('mouseout',function(){
		$(this).children('button').css('display','');
	});

	var bgas=$('div.bgImgBox>a');
	var smas=$('div.inner>a');

	$('div.inner').on('click','a',function(e){
		e.preventDefault();
		var i=$(this).index();
		smas.eq(i).addClass('active');
		smas.eq(i).siblings('a').removeClass('active');
		bgas.eq(i).addClass('active');
		bgas.eq(i).siblings('a').removeClass('active');
	});

}();

