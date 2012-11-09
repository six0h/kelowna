

$(function() {
	$('.exportLink').click(function() {
		var link = $(this).attr('href');
		var MyTimestamp = new Date().getTime();
		var dateStart = $('#dateStart').val();
		var dateEnd = $('#dateEnd').val();
		if(dateStart != '' && dateEnd != '') {
			var dateString = '&dateStart='+dateStart+'&dateEnd='+dateEnd;
		} else {
			var dateString = '';
		}
		$.get(link,'timestamp='+MyTimestamp+dateString,function(){
			document.location.href=link+'?timestamp='+MyTimestamp+dateString;
		});
		return false;
	});

	$('#nav li').click(function() {
		top.window.location = '/index.php?p='+$(this).attr('id');
	});

	$('.pic').fancybox(); // Fancybox All Gallery Images

	/**********************************************/
	/*
		Login and Register Modal's
	*/
	/*////////////////////////////////////////////*/
	$('#login-box a.modal_link').click(function() {
		var ele = $(this).attr('href');
		if(ele == '#login_modal') {
			$('#register_modal').hide();
		} else {
			$('#login_modal').hide();
		}

		$(ele).show();

		return false;
	});

	$('.close a').click(function() {
		$(this).parent().parent('div').hide();
	});

	$('.modal input').focus(function() {
		$(this).val('').css('color','#000');
	});

	$('.modal input').blur(function() {
		if($(this).val() == '') {
			var ele = $(this).attr('id');
			switch(ele)
			{
				case 'user_email':
					$(this).val('E-Mail Address').css('color','#c0c0c0');
				break;

				case 'user_password':
					$(this).val('Password').css('color','#c0c0c0');
				break;

				case 'register_email':
					$(this).val('E-Mail Address').css('color','#c0c0c0');
				break;

				case 'register_password':
					$(this).val('Password').css('color','#c0c0c0');
				break;
			}
		}
	});

	$('#login_form').ajaxForm({
		dataType: 'json',
		type: 'POST',
		success: function(res) {
			console.log(res);
			if(res.status == 'success') {
				window.location.reload(true);
			} else if (res.status == 'fail') {
				var ele = $('.error');
				for(error in res.errors) {
					ele.appendTo(error);
				}
			}
		}
	});
	/**** END LOGIN AND REGISTER MODALS ****/

	$('span.edit').editable('ajax/editcaption.php', {
		indicator: 'Saving...',
		loadtype: 'POST',
		callback: function(v,s) {
			console.log(v);
			console.log(this);
			console.log(s);
		}
	});

	$('.upload_form').ajaxForm({
		url: 'ajax/uploadprize.php',
		dataType: 'json',
		success: function(res, stat, xhr, form) {
			window.location.reload(true);
		}
	});
});
	
function safe(s) {
	return s.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;');
}
