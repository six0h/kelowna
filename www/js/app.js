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
	friend_list = [],
	user_id = '',
	access_token = '';

/*///////////////////////////////////////////////
/*
/* Contest Stuff
/*
/*///////////////////////////////////////////////



// COUNTDOWN

$("#contest-clock").countdown({
	until: new Date('2012, 12, 17'),
	timezone: -8,
	format: 'DHM',
	labels: ['','','','','','',''],
	labels1: ['','','','','','',''],
	timeSeparator: ''
});

// START TYPING A FRIENDS NAME

$(".friends").focus(function() {
	var field = $(this);
	if(field.val() == 'Start typing a friends name...') {
		field.val('');
	}
}).blur(function() {
	var field = $(this);
	if(field.val() == '') {
		field.val('Start typing a friends name...');
	}
});

$("#first_friend").autocomplete({
	source: friend_list,
	select: function(event, ui) {
		$(event.target).val(ui.item.label);
		$('#first_friend_id').val(ui.item.value);
		return false;
	}
});

$("#second_friend").autocomplete({
	source: friend_list,
	select: function(event, ui) {
		$(event.target).val(ui.item.label);
		$('#second_friend_id').val(ui.item.value);
		return false;
	}
});

$("#third_friend").autocomplete({
	source: friend_list,
	select: function(event, ui) {
		$(event.target).val(ui.item.label);
		$('#third_friend_id').val(ui.item.value);
		return false;
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

$('.fb-login').click(function() {
	FB.login(function(response) {
		// response handled by auth.statuschange
	}, {scope:'email,publish_actions'});
});

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
					FB.api('/me',function(res) {
						if(!res || res.error) {
							alert("Could not grab your facebook information, we're going to refresh the page now so you can try again.");
							window.top.location.reload();
						}
						user_info = res;
						$('#name').val(user_info.name)
						$('#thedark').fadeOut();
						$('#mask').fadeOut();
						$('#contest div').fadeIn();
					});

					FB.api('/me/friends', function(res) {
				
						for(var i = 0; i < res.data.length; i++) {
							friend_list[i] = {
								'value': res.data[i]['id'],
								'label': res.data[i]['name']
							}
						}
				
					});
				} else {
					$('#mask').fadeIn();
					$('#thedark').fadeIn();
					$('#thedark #auth').fadeIn();
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

