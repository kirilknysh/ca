(function ($, window) {
	var auth = {},
		infoContainer = $("#logInInfo");
		loginButtons = $('button[data-exteranl-type]');

	loginButtons.on('click', function loginClick(e) {
		var type = $(e.target).data('exteranl-type');
		if (auth[type]) {
			infoContainer.length && infoContainer.html("Authorizing...");
			auth[type]();
		}
	});

	function onLoginSuccess(id, name) {
		var infoStr = "id: " + id + "  name: " + name;

		infoContainer.length && infoContainer.html(infoStr);
	};

	auth.fbLogin = function () {
		$.ajaxSetup({ cache: true });
		$.getScript('//connect.facebook.net/en_US/all/debug.js', function () {
			FB.init({
				appId: '659022654109831'
			});

			FB.login(function fbLogged(response) {
				if (response.authResponse) {
					FB.api('/me', function fbGetMeInfo(meResponse) {
						onLoginSuccess(response.authResponse.userID, meResponse.name);
					});
				}
			});
		});
	};
	auth.twLogin = function () {
		//$.ajax({
		//	type: "POST",
		//	url: 'https://api.twitter.com/oauth/request_token'
		//}).done(function () {
		//	debugger;
		//});


		//$.when($.getScript('js/auth/twitter/sha1.js'), $.getScript('js/auth/twitter/codebird.js')).done(function twFilesLoaded() {
		//	var cb = new Codebird();
		//	cb.setConsumerKey("ZZ4twtX1E7lLd2I1UKjOdA", "CryOUCyEy0PZODVoPF3UEBolVTru708SbPFvDlf03s");
		//	cb.__call(
		//		"oauth_requestToken",
		//		{ oauth_callback: "oob" },
		//		function (reply) {
    	//			// stores it
    	//			cb.setToken(reply.oauth_token, reply.oauth_token_secret);

    	//			// gets the authorize screen URL
    	//			cb.__call(
		//				"oauth_authorize",
		//				{},
		//				function (auth_url) {
		//					window.codebird_auth = window.open(auth_url);
		//				}
		//			);
		//		}
		//	);
		//});
	};
	auth.vkLogin = function () { };

	window.auth = window.auth || {};
	window.auth.external = auth;
}(jQuery, window));