<?php

require_once('../config.php');

?>

<div id="contest">
	<div id="contest-description">
		<h2>United Airlines now offers a non-stop three hour flight from Kelowna to LA, starting on <span class="blue-script">December 19th</span>.</h2>
		<p>You and three friends could be on the inaugural flight, to enjoy a <span class="blue-descript">3 day getaway</span> just before Christmas. Enter to win!</p>
	</div>
	<div id="how-to-enter">
		<h2 class="big-orange">Here's How</h2>
		<p><strong>Choose three friends who can fly from Kelowna International Airport</strong> (flights for this contest are between YLW & LAX only):</p>
	</div>
	<form method="POST" name="entry-form" id="entry-form">
		<div id="friend-form">
			<input type="text" class="friends" name="first_friend" id="first_friend" value="Start typing a friends name..." />
			<input type="text" class="friends" name="second_friend" id="second_friend" value="Start typing a friends name..."/>
			<input type="text" class="friends" name="third_friend" id="third_friend" value="Start typing a friends name..."/>
			<p>or <a href="#">See all</a></p>
		</div>
		<div id="grovel">
			<label for="description"><strong>Why do you and these three friends deserve to be reunited?</strong> (max 100 words)</p>
			<textarea name="description"></textarea>
		</div>
		<div id="info">
			<label for="name">Your name</label>
			<input type="text" name="name" id="name"/><br class="clear" /><br />
			<input type="checkbox" name="terms" id="terms"/>
				<label for="terms">I have read and agree to the <a href="#" id="agree">contest rules</a></label><br class="clear" /><br/>
			<input type="checkbox" name="passport" id="passport"/>
				<label for="passport">I have a valid passport and am allowed to travel to the US.</label>
			<input type="hidden" id="first_friend_id" name="first_friend_id"/>
			<input type="hidden" id="second_friend_id" name="second_friend_id"/>
			<input type="hidden" id="third_friend_id" name="third_friend_id"/>
			<input type="submit" value="Submit" name="submit"/>
		</div>
	</form>
</div>
<div id="mask"></div>
<div id="thedark">
	<div id="auth">
		<h2 class="big-orange">Please Authorize</h2>
		<a href="#" class="fb-login">Login with Facebook</a>
		<p>*We will be accessing your friends list to help you choose 3 friends for the trip. Once you choose them, we will post to their wall to let them know. We will not contact you, or  your friends again unless otherwise permitted during contest entry, or in the event that you win the contest.</p>
	</div>
</div>
<br class="clear" />
