$(document).ready(function(){
	$(window).scroll(parallax);
	fixHeaderJitterOnMobile();
	setupScrollers($(".header .cta"), "#contact");
	init_faq_section();
	$('.submit').click(function(){
		sendMail();
	});
});

function parallax(){
	wScroll = $(window).scrollTop(); // get window scroll position
	ch = $(".header").height(); // put container height into a variable

	if(wScroll > ch || isMobile()){ return false;}

	$("header.header .layer-1").css("transform", "translate(0, " + wScroll / 1.15 + "px)");
	$("header.header .layer-2").css("transform", "translate(0, " + wScroll / 1.25 + "px)");
	$("header.header .layer-3").css("transform", "translate(0, " + wScroll / 1.5 + "px)");
	$("header.header .layer-4").css("transform", "translate(0, " + wScroll / 2 + "px)");
	$("header.header .layer-5").css("transform", "translate(0, " + wScroll / 3 + "px)");

	if(isIE() == false){
		$("header.header .vertical-align .container").css("transform", "translate(0, " + wScroll/4 + "px)");
	}

	opacityVar = (ch-wScroll)/ch;
	if(opacityVar < 0.7){
		opacityVar = opacityVar / 1.5;
	}else if(opacityVar < 0.4){ 
		opacityVar = opacityVar / 2
	}else if(opacityVar < 0.2){
		opacityVar = opacityVar / 2.5;
	}

	$("header.header .vertical-align .container").css("opacity", opacityVar);
}

function l(x){
	console.log(x);
}

function isMobile(){
	if ($("#size_checker").css("display") == "none"){
		return true;
	}else{
		return false;
	}
}

function fixHeaderJitterOnMobile(){
	if(!isMobile()){return false;} // exit if not mobile
	$("header.header").css("height", $("header.header").height());
}

function setupScrollers(o, a){ // o is object and a is anchor
	o.click(function(e){
		e.preventDefault();
		$("body").scrollTo("#contact",{duration:600, offsetTop : "0"});
	});
}

// Declare scrollTo function ->
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.y_contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});


function isIE() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
}

function init_faq_section(){
	$('.question').click(function(){
		q = $(this);
		a = q.next();
		a.addClass('active');
		setTimeout(function(){
			a.addClass('fade');
		}, 30);
		a.append('<span>x</span>');
			$('.answer span').click(function(){
			$('.answer.active').removeClass('fade');
			setTimeout(function(){
				$('.answer.active').removeClass('active');
			}, 500);
			$('.answer span').remove();
		});
	});
}

function sendMail(){
	$name = $('#name').val()
	$phone = $('#phone').val();
	$email = $('#email').val();
	$msg = $('#message').val();
	$error = false;

	if($phone == "" && $email == ""){
		// handle error
		$('.error').removeClass('hidden');
		$error = true;
	}

	if($error == false){
		$('.error').addClass('hidden');
		xURL = 'mailer.php?name=' + $name + '&phone=' + $phone + '&email=' + $email + '&msg=' + $msg;
		$.ajax( xURL )
			.done(function() {
				alert( "הודעתך נשלחה" );
				$('#name').val('');
				$('#phone').val('');
				$('#email').val('');
				$('#message').val('');
			})
			.fail(function() {
				alert( "ארעה שגיאה" );
			});
	}
}