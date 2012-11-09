/*///////////////*/
/*
/* AUTHOR:	Cody Halovich (cody at telenova dot ca)
/* CLIENT:	Chillspace Print. Web. IT. for Think! Social Media
/* PROJECT:	Love Ottawa
/*
/* DO NOT EDIT THIS DOCUMENT OR ANY FILES RELATED TO THE PARENT PROJECT WITHOUT PERMISSION OF THE AUTHOR.
/*
/*///////////////*/
var 	imgLoaded = 0,
	mydate = new Date().getTime(),
	spriteBox = document.getElementById('spriteBox'),
	sB = spriteBox.style,
	img;

$(function() { // ENCAPSULATE EVERYTHING IN JQUERY, EVEN FUNCTIONS

/*///////////////////////////////////////////////
/*///////////////////////////////////////////////
// GLOBALS FIRST
/*///////////////////////////////////////////////
/*///////////////////////////////////////////////


// DEFINE GLOBALS
	var	pages = $('#page-wrapper>div'),
		page_tab = 'https://aus2.ionflo.com/nsw/www/home.php',
		channel = '//aus2.ionflo.com/nsw/www/channel.html',
		app_id = '120359788120905',
		user_info = '',
		user_id = '',
		access_token = '',
		animated = 0,
		played = 0;

	var i = 1250;

	function preloader() {

		var i = 0;

		imageObj = new Image();

		images = [
			'img/photos/img1.png?date='+mydate,
			'img/photos/img2.png?date='+mydate,
			'img/photos/img3.png?date='+mydate,
			'img/photos/img4.png?date='+mydate,
			'img/panels/discover.png?date='+mydate,
			'img/panels/events.png?date='+mydate,
			'img/panels/lovesydney.png?date='+mydate,
			'img/button.png?date='+mydate,
			'img/button-half.png?date='+mydate,
			'img/button-small.png?date='+mydate,
			'img/button-submit.png?date='+mydate,
			'img/finalpage-copy.png?date='+mydate,
			'img/form-bg.png?date='+mydate,
			'img/results/copy-panel.png?date='+mydate,
			'img/enter/copy-panel.png?date='+mydate
		];

		imageObj.onload = function() {
		}
		for(i=0;i<images.length;i++) {
			imageObj.src=images[i];
		}

	}
	preloader();

	img = new Image();
	img.src = "img/blue.png?date="+mydate;
	img.onload = function(status) {
		$('#loading').hide();
		$('.button-link').show();
		$('#spriteBox').css({
			'background-image':"url("+img.src+")",
			"background-position":"-2px -2224px",
			'z-index':998,
		});
		imgLoaded = 1;
	}

	var redBox = new Image();
	redBox.src = 'img/red.png';

/*///////////////////////////////////////////////
/*
/* LIKE GATE 
/*
/*///////////////////////////////////////////////

	$('#title').delay(i).animate({'top':'180px'}, 'easeOutQuad').animate({'top':'130px'});
	i = i+100;

	$('#love-logo').delay(i).animate({'left':'50px'}, 'easeOutQuad').animate({'left':'30px'});
	i = i + 100;

	$('#sydney-logo').delay(i).animate({'right':'50px'}, 'easeOutQuad').animate({'right':'30px'});


/*///////////////////////////////////////////////
/*
/* WELCOME 
/*
/*///////////////////////////////////////////////

	function showEnter() {
		$('#enter').show().animate({'top':'30px'}, 'easeOutQuad').animate({'top':'0px'});
	}

	$('.auth').live('click', function() {
		FB.login(function(response) {
			// auth change is monitored by facebook init, no need for a callback here
		}, {scope: 'email,publish_stream'});
	});

	$('.openParcel').live('click', function() {
		$.ajax({
			type: 'POST',
			dataType: 'json',
			url: 'ajax/roll.php',
			data: user_info,
			error: function(res) {
				for(err in res.errors) alert(err);
			},
			// IF THE ROLL WAS SUCCESSFUL (NO SERVER ERRORS)
			success: function(res) {
				if(res.status == 200) {
					// didn't win or lose, but how does that happen?
				} else if(res.status == 999) { // IF THE USER WINS
					var fbmessage = "I just won a Sydney Prize! You should check out the Pass the Parcel contest for your chance to Love every second of Sydney in Summer!";
					var fblink = "https://apps.facebook.com/sydneyparcel/";
					var fbcaption = "Love every second of Sydney in Summer!"
					FB.api('/me/feed', 'post', { message: fbmessage, caption: fbcaption, link: fblink }, function(res) {
						if(!res || res.error) {
							// dont do anything with error
						}
					});
					$('#enter').show().animate({'top':'+=20px'}).animate({'top':'-300px'}, function() {
						$(this).hide();
					});
					setTimeout(function() {
						fireAnim("win");
					}, 2000);
					$('#result h1').html('Congratulations!')
					$('#result p').html("You've just opened the winning parcel. Now that's got to be a reason to Love Every Second of Sydney in Summer!<br/><br/>We just need a little information so we can send your prize to you.")
									.css('font-size','1.1em');;
					$('#result .button-small, #result #result-btn').hide();
					$('#result .button-link').attr('id','winEnter').html('Enter your info <span class="arrow">&gt;</span>');
					$('#result .button-link').css('left','-=10px').show();
					$('#first_name').val(user_info.first_name);
					$('#last_name').val(user_info.last_name);
					$('#email').val(user_info.email);
					$('#location').val(user_info.location.name);
					$('#fbid').val(user_info.id);
					setTimeout(function() {
						$('#result').show().animate({
							'top': '0px'
						}).find('p');
					}, 3000);
				} else if(res.status == 201) { // IF THE USER LOSES
					if(res.num_plays == 1) { // FIRST TIME
						var fbmessagelose = "I just unwrapped a layer of the Love Every Second of Sydney Pass the Parcel app. Unwrap a layer to win!";
						var fblinklose = "https://apps.facebook.com/sydneyparcel/";
						var fbcaption2lose = "Love every second of Sydney in Summer!"
						FB.api('/me/feed', 'post', { message: fbmessage, caption: fbcaption, link: fblink }, function(res) {
							if(!res || res.error) {
								// dont do anything with error
							}
						});
						$('#enter').animate({'top':'+=20px'}).animate({'top':'-300px'}, function() {
							$(this).hide();
						});
						$('.button-link').hide();
						$('#result .copy-box h1').html('Not this time!');
						$('#result .copy-box p').html("Sorry that wasn't the lucky layer. But, if you want to have another go, just Pass the Parcel to a friend for the chance to open it again.");
					} else { // SETUP NEW COPY IF USER LOSES SECOND TIME
						$('#enter').animate({'top':'+=20px'}).animate({'top':'-300px'}, function() {
							$(this).hide();
						});
						$('#result h1').html("Still not the one. Better Luck Tomorrow.").css('font-size','1.2em');
						$('#result .copy-box p').html("We've got more parcels with more great Sydney experiences every day. So, remember to come back tomorrow and have another go.<br/><br/>In the meantime, click find out more and discover what Sydney has to offer.").css('font-size','0.9em');
						$('#result .button-small, #result #result-btn').hide();
						$('.button-link').html('Continue <span class="arrow">&gt;</span>').attr('id','finalBtn').css({'top':'495px','left':'290x','display':'block'});
					}
					setTimeout(function() { // FIRE ANIMATION
						fireAnim("lose");
					}, 500);
					setTimeout(function() { // FIRE THE DIALOG BOX FOR LOSER
						$('#result').show().animate({
								'top': '0px',
						}).find('p');
					}, 1000);
				} else if(res.status == 203) {
					finalPage();
				} else {
					for(err in res.errors) {
						alert(err);
					}
				}
			}
		});	
	});

	// SHOW THE WINNER FORM
	$('#winEnter').live('click', function() {

		$('#result').animate({
			'top':'-=10px'
		}, function() {
			$(this).hide();
		});

		$('#winner-form').show().animate({
			'top':'-=10px'
		});

	});

	// FUNCTION WRAPPER FOR FACEBOOK CODE
	function appRequest(callback) {
		FB.ui({
			method: 'apprequests',
			message: 'Unwrap the parcel and love every second of Sydney in Summer!',
			title: 'Pass the Parcel'
		}, callback)
	}

	// FACEBOOK SHARE W/ CALLBACK
	$('#result-btn').click(function() {
		appRequest(function(res) {
			if(res != undefined) {
				$.ajax({
					type: 'POST',
					dataType: 'json',
					url: 'ajax/recordshare.php',
					data: user_info,
					success: function(response) {
						if(response.status == 200) {
							$('#result').animate({
								'top': '10px',
							}, function() {
								$(this).hide();
							});
						}
						$('#spriteBox').hide();
						$('#photos img').hide();
						$('#thered').show();
						bringTheRed(registration());
					},
					error: function(response) {
						for(err in response.errors) {
							alert(err);
						}
					}
				})
			}
		});
	});

	function bringTheRed(callback) {
			$('#thered').show();
			$('.button-link').show();
			$('#spriteBox').css({
				'background-image':"url("+redBox.src+")",
				"background-position":"-2px -2224px",
				'z-index':998,
			});
			$('#spriteBox').show();
			callback;
	}

	// SHOW SHARING BOX
	function showShare() {
			$('#result').show().animate({
				'top': '0px'
			});
	}

	// REGISTER USER CHECK PLAYED STATUS
	function registration() {

		$.ajax({
			type: "POST",
			dataType: 'json',
			url: 'ajax/register.php',
			data: user_info,
			success: function(response) {
				user_info.access_token = response.access_token;
				user_info.expiry = response.expiry;
				user_info.salt = response.salt;
				var loadInt = setInterval(function() {
					if(imgLoaded == 1) {
						if(response.status == 200) {
							$('#auth-btn')
								.html('Open the Parcel <span class="arrow">&gt;</span>')
								.show();
							$('#enter .copy-box h1').html(user_info.first_name + ', open the parcel for your chance to Love Every Second of Sydney In Summer');
							$('#fbid').val(user_info.id);
							showEnter();
						} else if (response.status == 201) {
							fireAnim("lose");
							setTimeout(function() {
								showShare();
							}, 1000);
						} else if (response.status == 202) {
							$('#enter .copy-box h1').html(user_info.first_name + ', open the parcel one more time for your chance to Love Every Second of Sydney in Summer');
							$('.button-link').hide();
							bringTheRed();
							$('#auth-btn').html('Open the Parcel <span class="arrow">&gt;</span>').show();
							played = 1;
							showEnter();
						} else if (response.status == 203) {
							finalPage();
						}
						clearInterval(loadInt);
					}
				}, 300);

			},
			error: function(response) {
				alert(response.responseText);
			}
		});

	}

	// VALIDATOR OPTIONS
	var validOptions = {
               
	        rules: {
                    first_name: "required",
                    last_name: "required",
                    email: {
                            required: true,
                            email: true
                    },
                    location: "required",
                    postal: "required",
					agree: "required",
		phone: "required"
                },

            messages: {
                    first_name: "Please provide your first name.",
                    last_name: "Please provide your last name.",
                    email: {
                            required: "Please provide your email address.",
                            email: "Please provide a valid email address."
	                },
	                location: "Please tell us what city you're in.",
	                postal: "Please provide your postal code.",
					agree: "Please agree to the terms and conditions.",
				phone: "Please provide your phone number"
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
						$('#winner-form').animate({'top':'+=20px'}, function() {
							$(this).hide();
						});
						finalPage('win');
					} else if (res.status == 500) {
						alert("There was a server error. Please try again.");
					} else {
						for(err in res.errors) alert(err);
					}
				},

				error: function(res) {
					for(err in res.errors) alert(err);
				}
			});
		}

	};

	$('#winner-form form').validate(validOptions);

	$('#finalBtn').live('click', function() {
		$('#result').hide();
		finalPage();
	});

	$('.button-small').live('click', function() {
		finalPage();
	});

	function finalPage(state) {
		$('#result,, #spriteBox, #photos img').css('display','none');
		$('#finalpage').show();

		if(state != 'win') {
			$('#finalPage h1')
				.css({'margin-top':'15px','margin-bottom':'20px'})
				.html('Discover the vibrancy of Sydney');
			$('#finalPage h2').css('display','none');
			$('#finalPage p').css({'font-size':'1em','padding': '0 20px'}).html('See Sydney shine in summer with its spectacular line up of events, relaxed outdoor and beach lifestyle and dazzling display of nature and parks. Visit <a href="http://www.sydney.com/" target="_blank">sydney.com</a> to start planning your next trip.')
			$('#finalPage').show();
		} else {
			$('#finalPage h1')
				.css({'margin-top':'10px','margin-bottom':'5px'})
				.html('Congratulations.');
			$('#finalPage h2').css({'display':'block','font-size':'1.1em'}).html("We'll contact you shortly with your prize details.");
			$('#finalPage p')
				.css({'font-size':'1em','padding': '0 20px'})
				.html('See Sydney shine in summer with its spectacular line up of events, relaxed outdoor and beach lifestyle and dazzling display of nature and parks. Visit <a href="http://www.sydney.com/" target="_blank">sydney.com</a> to start planning your next trip.')
			$('#finalPage').show();
		}
	}

	function fireAnim(state) {
		var totalHeight = 2224;
		var animInt = setInterval(function() {
			if(img.height > 0 && totalHeight > 2) {
				sB.backgroundPosition = '-2px -'+totalHeight+'px';
				totalHeight = totalHeight - 202;
			}
		}, 50);

		if(state == "lose") {
			loserAnim();
		} else {
			winnerAnim();
		}
	};

	function loserAnim() {
		$('#img1,#img2').css({'top':'200px','left':'-500px'}).show();
		$('#img3,#img4').css({'top':'200px','left':'1280px'}).show();

		$('#img1').animate({'left':'43px','top':'335px'}, 1300, 'easeInOutQuad');
		$('#img2').animate({'left':'207px','top':'226px'}, 1300, 'easeInOutQuad');
		$('#img3').animate({'left':'400px','top':'235px'}, 1300, 'easeInOutQuad');
		$('#img4').animate({'left':'550px','top':'330px'}, 1300, 'easeInOutQuad');
	}

	function winnerAnim() {
		$('#img1,#img2,#img3,#img4').css({'top':'400px','left':'270px'}).show();

		$('#img1').animate({'left':'43px','top':'335px'}, 1300, 'easeInOutQuad');
		$('#img2').animate({'left':'207px','top':'226px'}, 1300, 'easeInOutQuad');
		$('#img3').animate({'left':'400px','top':'235px'}, 1300, 'easeInOutQuad');
		$('#img4').animate({'left':'550px','top':'330px'}, 1300, 'easeInOutQuad');
	}

	$('.rules').click(function() {

		$('#rules').fadeIn();

	});

	$('.close').click(function() {

		$('#rules'.fadeOut();
	
	});

/*///////////////////////////////////////////////
/*
/* Initialize Facebook 
/*
/*///////////////////////////////////////////////


	fbInit();

	function fbInit() {
		
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
				access_token = response.authResponse.accessToken;
				user_id = response.authResponse.userID;
				$('#auth-btn')
					.removeClass('auth')
					.addClass('openParcel')
					.hide();

				FB.api('/me', function(response) {
					user_info = response;
					user_info.access_token = access_token;
					registration();
				});
			} else {
				showEnter();
				animated = 1;
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

