function myLog(x, br) {
	if (!br) br='<br/>';
	document.getElementById("divConsole").innerHTML=
		document.getElementById("divConsole").innerHTML+br+x;
}
window.xlink=function() { myLog("[test!]", '-'); }
function checkConnection() {
	var networkState = navigator.network.connection.type;
	var states = {};
	states[Connection.UNKNOWN]  = 'Connexion inconnue';
	states[Connection.ETHERNET] = 'Connexion Ethernet';
	states[Connection.WIFI]     = 'Connexion WiFi';
	states[Connection.CELL_2G]  = 'Connexion cellulaire 2G';
	states[Connection.CELL_3G]  = 'Connexion cellulaire 3G';
	states[Connection.CELL_4G]  = 'Connexion cellulaire 4G';
	states[Connection.NONE]     = 'Pas de connexion réseau';
	myLog('Type de connexion : ' + states[networkState], "<hr />");
}
function geoLocation() {
    var watchID = null;
    function clearWatch() {
        if (watchID != null && watchID!=0) {
            navigator.geolocation.clearWatch(watchID);
            watchID = 0;
        }
    }
	function onSuccess(position) {
		myLog(
			'Latitude : '                + position.coords.latitude          + '<br/>' +
			'Longitude : '               + position.coords.longitude         + '<br/>' +
			'Altitude : '                + position.coords.altitude          + '<br/>' +
			'Précision : '               + position.coords.accuracy          + '<br/>' +
			'Précision de l altitude : ' + position.coords.altitudeAccuracy  + '<br/>' +
			'Direction : '               + position.coords.heading           + '<br/>' +
			'Vitesse : '                 + position.coords.speed             + '<br/>' +
			'Date : '                    + new Date(position.timestamp)      + '<br/>', '<hr/>');
		clearWatch();
	};

    function onError(error) {
		myLog('geoLocation error code : '    + error.code    + '\n' +
			'message : ' + error.message + '\n', '<hr/>');
    }


	myLog('geoLocation ('+watchID+') ... test ... ', '<br/>');
	clearWatch();
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
    watchID = navigator.geolocation.watchPosition(onSuccess, onError,  { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });

    // clear the watch that was started earlier
    // 

	
}
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
		myLog(id, "-");
        console.log('Received Event: ' + id);
    }
};
