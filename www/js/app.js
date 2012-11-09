/*///////////////*/
/*
/* AUTHOR:	Cody Halovich (cody at telenova dot ca)
/* CLIENT:	Chillspace Print. Web. IT. for Think! Social Media
/* PROJECT:	Pass the  Facebook Application
/*
/* DO NOT EDIT THIS DOCUMENT OR ANY FILES RELATED TO THE PARENT PROJECT WITHOUT PERMISSION OF THE AUTHOR.
/*
/*///////////////*/

$(function() { // ENCAPSULATE EVERYTHING IN JQUERY, EVEN FUNCTIONS

/*///////////////////////////////////////////////
/*///////////////////////////////////////////////
// GLOBALS FIRST
/*///////////////////////////////////////////////
/*///////////////////////////////////////////////


// DEFINE GLOBALS
var	pages = $('#page-wrapper>div'),
	page_tab = 'https://home.codyhalovich.com/kelowna/www/home.php',
	channel = '//home.codyhalovich.com/kelowna/www/channel.html',
	app_id = '173820112759454',
	user_info = '',
	user_id = '',
	access_token = '';

/*///////////////////////////////////////////////
/*
/* Contest Countdown
/*
/*///////////////////////////////////////////////

$("#contest-clock").countDown({
	targetDate: {
		'day': 		18,
		'month': 	12,
		'year': 	2012,
		'hour': 	0,
		'min': 		0,
		'sec': 		0  
	}
});

/*///////////////////////////////////////////////
/*
/* Pre-Load Images 
/*
/*///////////////////////////////////////////////


function preloader() {

	var i = 0;

	imageObj = new Image();

	images = [];

	for(i=0;i<images.length;i++) {
		imageObj.src=images[i];
	}

}

preloader();


/*///////////////////////////////////////////////
/*
/* Initialize Facebook 
/*
/*///////////////////////////////////////////////

fbinit();

	function fbinit() {	

		window.fbAsyncInit = function() {
		     
			var animated = 0;
		     FB.init({
		      appId	 : app_id,	
		      channelUrl : channel, // Channel File
		      status     : true, // check login status
		      cookie     : true, // enable cookies to allow the server to access the session
		      xfbml      : true,  // parse XFBML
		      oauth	 : true
		    });

		    // MAKE CANVAS AUTOGROW
			FB.Canvas.setAutoGrow();

		    FB.Event.subscribe('auth.statusChange', function(response) {
		    	if(response.status == 'connected') {
			
				} else {
					
				}
		    });

		};

		// Load the SDK Asynchronously
		(function(d){
			var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement('script'); js.id = id; js.async = true;
			js.src = "//connect.facebook.net/en_US/all.js";
			ref.parentNode.insertBefore(js, ref);
		}(document));

	}

});

