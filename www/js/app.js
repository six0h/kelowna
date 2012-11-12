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

// AUTOCOMPLETE
$("#first_friend").autocomplete({
	source: friend_list,
	select: function(event, ui) {
		var inputField = $(event.target),
			picDiv = $('#pic-1');
		inputField.val(ui.item.label);
		picDiv.css('background','url("http://www.facebook.com/'+ul.item.value+'/picture") no-repeat');
		$('#first_friend_id').val(ui.item.value);
		return false;
	}
});

// AUTOCOMPLETE 2
$("#second_friend").autocomplete({
	source: friend_list,
	select: function(event, ui) {
		var inputField = $(event.target),
			picDiv = $('#pic-2');
		inputField.val(ui.item.label);
		picDiv.css('background','url("http://www.facebook.com/'+ul.item.value+'/picture") no-repeat');
		$('#second_friend_id').val(ui.item.value);
		return false;
	}
});

// AUTOCOMPLETE 3
$("#third_friend").autocomplete({
	source: friend_list,
	select: function(event, ui) {
		var inputField = $(event.target),
			picDiv = $('#pic-3');
		inputField.val(ui.item.label);
		picDiv.css('background','url("http://www.facebook.com/'+ul.item.value+'/picture") no-repeat');
		$('#third_friend_id').val(ui.item.value);
		return false;
	}
});

// MULTI-FRIEND APPREQUEST
FB.ui({
	method: 'apprequests'

},function(res) {
	$('.friends').fadeOut();
});

// VALIDATOR OPTIONS
var validOptions = {
           
	rules: {
            name: "required",
            terms: "required",
            description: "required",
            first_friend: "required",
            second_friend: "required",
            third_friend: "required"
    },

    messages: {
            name: "Please provide your first name.",
            terms: "Please provide your last name.",
            description: "Please provide the reasons you and these three friends should be united",
            first_friend: "Please pick the first friend you would like to take on the trip with you",
            second_friend: "Please pick the second friend you would like to take on the trip with you",
            third_friend: "Please pick the third friend you would like to take on the trip with you"
    },

	errorPlacement: function(error, element) {
		error.appendTo( element.parent('li') );
	},
	wrapper: 'span',
	onkeyup: false, // DO NOT VALIDATE ON KEYUP, WAIT UNTIL BLUR

	// IF VALIDATE IS SUCCESSFUL, SUBMIT THE FORM WITH JQUERY FORM
	submitHandler: function(form) {
		// HIJACK DOS FORM AND SUBMIT THROUGH AJAX
		$(form).ajaxSubmit({
			dataType: 'json',
			success: function(res) {
				if(res.status == 200) {
					callPage('thanks');
				} else if (res.status == 500) {
					console.log(error);
					alert("There was a server error. Please try again.");
				} else if (res.status == 502) {
					var output = "You have already uploaded this file. Please submit again to confirm that you would like to overwrite it.";
					alert(output);
					$('.confirm').val('true');
				}
			},

			error: function(res) {
				alert('error');
			}
		});
	}

};
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

