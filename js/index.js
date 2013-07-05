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
    window.geoLocWatchID = null;
    function clearWatch() {
        if (window.geoLocWatchID != null && window.geoLocWatchID!=0) {
            navigator.geolocation.clearWatch(window.geoLocWatchID);
        }
        window.geoLocWatchID = 0;
    }
	function onSuccess(position) {
		myLog('<hr/> '+
			'Latitude : '                + position.coords.latitude          + 
			'Longitude : '               + position.coords.longitude         + 
			//'Altitude : '                + position.coords.altitude          + '<br/>' +
			'Précision : '               + position.coords.accuracy          + '<br/>' +
			/*'Précision de l altitude : ' + position.coords.altitudeAccuracy  + '<br/>' +
			'Direction : '               + position.coords.heading           + '<br/>' +*/
			'Vitesse : '                 + position.coords.speed             + 
			'Date : '                    + new Date(position.timestamp)      + '<br/>', '');
		//clearWatch();
	};

    function onError(error) {
		myLog('geoLocation error code : '    + error.code    + '\n' +
			'message : ' + error.message + '\n', '<hr/>');
		clearWatch();
    }


	myLog('geoLocation ('+window.geoLocWatchID+') ... test ... ', '<br/>');
	clearWatch();
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
    window.geoLocWatchID = navigator.geolocation.watchPosition(onSuccess, onError,  { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });

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
