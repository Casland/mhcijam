// JavaScript Document

$(document).ready(function() {
	$('body').append("<img src='sicklogo.gif' id='logo' />");

		$('body').append('<div class="a"/>');

	
	var angle = 0;
	setInterval(function(){
		  angle+=3;
 		$(".a").rotate(angle);
		 $("#logo").rotate(-angle);
	},5);
	
	setInterval(function(){
		var hue = 'rgb(' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ')';
         $('#welcome').css("background-color", hue);
	},100);

	animateDiv();
	
});
$(document).on('mousemove', function(e){
	 $('#logo').css({
       left: e.pageX - 60,
       top:   e.pageY - 60
    });

});


function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){

    var newq = makeNewPosition();
    $('.a').animate({ top: newq[0], left: newq[1] }, 1000, function(){
      animateDiv();        
    });

};
