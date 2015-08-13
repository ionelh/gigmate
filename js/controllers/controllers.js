(function () {

	function GigMateCtrl($scope, $timeout, $http, $rootScope, SetlistsService) {
		// TODO Improve dirty checking, angular $digest
		// TODO - when pressing Space or start multiple times, unexpected behaviour occurs
		// TODO - when pressing next song on the last song (while the song is playing) of the setlist it goes to the same some song, from the beginning.
		// It should go to the next setlist, or do nothing? Or maybe it's ok this way. The same thing happens when pressing next setlist, while the last song of the last setlist is playing.
		// TODO - when entering presentation mode in chrome on mac, can I NOT, it would be nice to exit presentation mode with escape.
		// TODO - instead of animating DOM elements from a controller, create a directive that does that
		// TODO - instead of making HTTP cals from a controller, create a custom service that does that
		// TODO - the view calls function or vars from the scope which are async (setLists for example, which is loaded via ajax).
			// Until the setlists are retrieved from the server, setLists is undefined and I get errors in the view ('Can't interpolate' in the console).
			// When setLists gets populated, everything's fine, but I should treat this better. See this video:
			// https://www.youtube.com/watch?v=9IBljKq4XrQ - the entire video is call, but at min 34 or so, this is explained (resolve)
			// NOTE
			// Instead of having the massive object on the scope and manipulating that from the markup, the object (setLists) is a local var
			// and have functions like getCurrentSetList on the scope that return references of what's needed by the markup.
			// Or is that like having the object itself on the scope?

		$scope.loading = true;
		$scope.currentSong = 0;
		$scope.currentSetlist = 0;
		$scope.currentSongPart = 0;

		console.log('%c $rootScope.restBaseUrl: ' + $rootScope.restBaseUrl, 'background: rgb(0,0,256)');

		var songPartBackgrounds = [
			"rgba(150, 100, 50, .5)",
			"rgba(50, 150, 100, .5)",
			"rgba(100, 50, 150, .5)",
			"rgba(175, 175, 50, .5)",
			"rgba(50, 175, 175, .5)",
			"rgba(175, 50, 175, .5)"
		],
			currentSongPartColor = 0,
			beatWidth = 20,
			setLists,
			songPartTimeoutPromise;

		$scope.init = function() {
			$scope.loadSetLists();
		}

		$scope.loadSetLists = function() {
			// SetlistsService.getAllSetLists() returns a promise
			SetlistsService.getAllSetLists()
			.then(function(res) {
				// success code ...
				$scope.loading = false;
				setLists = res;
				console.log('%c res: ' + res, 'background: rgb(0,0,256)');
			}, function(err) {
				// error code ...
				$scope.loading = false;
			});
		}

		// returns a reference to the current setlist
		$scope.getCurrentSetList = function () {
			return setLists[$scope.currentSetlist];
		}

		// returns a reference to the current song
		$scope.getCurrentSong = function () {
			return $scope.getCurrentSetList().songs[$scope.currentSong];
		}

		// returns the description for the current (playing) song part
		$scope.getCurrentPartDescription = function () {
			return setLists[$scope.currentSetlist].songs[$scope.currentSong].parts[$scope.currentSongPart].description;
		}

		// returns the description for the next song part
		$scope.getNextPartDescription = function () {
			if($scope.currentSongPart >= setLists[$scope.currentSetlist].songs[$scope.currentSong].parts.length - 1) {
				return "";
			}
			return setLists[$scope.currentSetlist].songs[$scope.currentSong].parts[$scope.currentSongPart + 1].description;
		}

		// returns the name for the current (playing) song part
		$scope.getCurrentPartName = function () {
			return setLists[$scope.currentSetlist].songs[$scope.currentSong].parts[$scope.currentSongPart].name;
		}

		// returns the name for the next song part
		$scope.getNextPartName = function () {
			if($scope.currentSongPart >= setLists[$scope.currentSetlist].songs[$scope.currentSong].parts.length - 1) {
				return "";
			}
			return setLists[$scope.currentSetlist].songs[$scope.currentSong].parts[$scope.currentSongPart + 1].name;
		}

		// Just returns the beatWidth so it can't be changed from outside
		$scope.getBeatWidth = function () {
			return beatWidth;
		}

		// gets the number of beats (4th notes) in a given song part
		$scope.getBeatsInSongPart = function (songPart) {
			return (songPart.bars * songPart.subdivisionsPerBar) * (4 / songPart.subdivision);
		}

		// depending on the subdivision of the part, returns the appropriate bg image
		$scope.getBgImageForSongPart = function (songPart) {
			//console.log("getBgImageForSongPart()");
			if(songPart.subdivision === 4) {
				return "img/4thnote.png";
			} else if(songPart.subdivision === 8) {
				return "img/8thnote.png";
			} else if(songPart.subdivision === 16) {
				return "img/16thnote.png";
			}
		}

		// given a number, will return an array with that length
		// It's a hack because you can't use numbers in an ng-repeat, just arrays and objects, and that's what this is for
		$scope.getArray = function (number) {
			// TODO - why is this an object? Shouldn't it be an array
			var myArr = {};
			for (var i = 0; i < number; i++) {
				myArr[i] = i;
			}
			return myArr;
		}

		// goes through all the parts of the current song and computes the total width
		$scope.getCurrentSongWidth = function () {
			var retVal = 0;
			for (var i = 0; i < setLists[$scope.currentSetlist].songs[$scope.currentSong].parts.length; i++) {
				retVal += $scope.getBeatsInSongPart(setLists[$scope.currentSetlist].songs[$scope.currentSong].parts[i]) * beatWidth;
			}
			return retVal;
		}

		$scope.getColorForSongPart = function (songPartIndex) {
			return songPartBackgrounds[songPartIndex % songPartBackgrounds.length];
		}

		// itterates through all the parts in the song and computes the total number of beats (4th notes)
		function getSongTotalBeats (song) {
			var totalBeats = 0;
			for(var i = 0; i < song.parts.length; i++) {
				totalBeats += $scope.getBeatsInSongPart(song.parts[i]);
			}

			return totalBeats;
		}

		// returns the duration of a song part (in minutes)
		$scope.getCurrentSongPartDuration = function () {
			//return getBeatsInSongPart(songPartReference) / song.bpm;
			return $scope.getBeatsInSongPart($scope.getCurrentSong().parts[$scope.currentSongPart]) / $scope.getCurrentSong().bpm * 1000 * 60;
		}

		// updates the song part on the scope to the current song part
		$scope.updateCurrentSongPart = function () {
			console.log("updateCurrentSongPart() $scope.currentSongPart: " + $scope.currentSongPart);
			console.log("updateCurrentSongPart() setLists[$scope.currentSetlist].songs[$scope.currentSong].parts.length: " + setLists[$scope.currentSetlist].songs[$scope.currentSong].parts.length);
			// TODO - clear this timeout, AKA, make it so that this doesn't gets called if the song stopped playing
			if($scope.currentSongPart >= setLists[$scope.currentSetlist].songs[$scope.currentSong].parts.length - 1) {
				$scope.nextSong();
				return;
			}
			$scope.currentSongPart++;
			songPartTimeoutPromise = $timeout($scope.updateCurrentSongPart, $scope.getCurrentSongPartDuration());
		}

		// depending on the number of beats (4th notes) in the song, calculates the song's duration
		$scope.getSongDuration = function (song) {
			return getSongTotalBeats(song) / song.bpm;
		}

		// depending on the number of beats (4th notes) in the song, calculates the song's duration and returns a string mm:ss
		$scope.getSongDurationMinsSecs = function (song) {
			return convertMinsToMinsSecs($scope.getSongDuration(song));
		}

		// get the mm:ss duration for a given setlist
		$scope.getSetlistDurationMinsSecs = function (setList) {
			var totalMins = 0;
			for (var i = 0; i < setList.songs.length; i++) {
				totalMins += $scope.getSongDuration(setList.songs[i]);
				console.log($scope.getSongDuration(setList.songs[i]));
			}
			console.log("totalMins1: " + totalMins);
			return convertMinsToMinsSecs(totalMins);
		}

		function convertMinsToMinsSecs(totalMins) {
			console.log("totalMins: " + totalMins);
			var secs = parseInt(totalMins * 60, 10);
			var mins = Math.floor(secs / 60);
			console.log("secs: " + secs);
			console.log("mins: " + mins);
			//console.log(mins + " | " + secs);
			secs = secs % 60;
			mins < 10 ?  mins = "0" + mins : mins;
			secs < 10 ?  secs = "0" + secs : secs;
			return mins + ":" + secs;
		}

		$scope.nextSong = function () {
			stopSong();
			$scope.currentSongPart = 0;
			if($scope.currentSong < setLists[$scope.currentSetlist].songs.length - 1) {
				$scope.currentSong++;
			}
		}

		$scope.prevSong = function () {
			stopSong();
			$scope.currentSongPart = 0;
			if($scope.currentSong > 0) {
				$scope.currentSong--;
			}
		}

		$scope.nextSetlist = function () {
			stopSong();
			$scope.currentSongPart = 0;
			$scope.currentSong = 0;
			if($scope.currentSetlist < setLists.length - 1) {
				$scope.currentSetlist++;
			}
		}

		$scope.prevSetlist = function () {
			stopSong();
			$scope.currentSongPart = 0;
			$scope.currentSong = 0;
			if($scope.currentSetlist > 0) {
				$scope.currentSetlist--;
			}
		}

		function stopSong() {
			$timeout.cancel(songPartTimeoutPromise);
			jQuery("#partsWrapper").stop();
			jQuery("#partsWrapper").css("margin-left", "0px");
			//if($scope.currentSong > 0 || $scope.currentSong < setLists[$scope.currentSetlist].songs.length - 1) {
				//$scope.currentSongPart = 0;
			//}
		}

		$scope.startSong = function () {
			jQuery("#partsWrapper").animate({marginLeft: "-" + (getSongTotalBeats(setLists[$scope.currentSetlist].songs[$scope.currentSong]) * beatWidth) + "px"}, $scope.getSongDuration(setLists[$scope.currentSetlist].songs[$scope.currentSong]) * 1000 * 60, "linear", $scope.completeHandler);
			// TODO - see why I'm getting an error at the end of the song if I uncomment this.
			songPartTimeoutPromise = $timeout($scope.updateCurrentSongPart, $scope.getCurrentSongPartDuration());
		}

		function completeHandler () {
			console.log("GATA!");
		}

		jQuery(document).on("keydown", function(e) {
			e.preventDefault();
			console.log("KEY PRESSED: " + e.which);
			switch(e.which) {
				case 37:
					$scope.prevSong();
					$scope.$apply();
					break;
				case 39:
					$scope.nextSong();
					$scope.$apply();
					break;
				case 38:
					$scope.nextSetlist();
					$scope.$apply();
					break;
				case 40:
					$scope.prevSetlist();
					$scope.$apply();
					break;
				case 32:
					$scope.startSong();
					break;
				default: return;
			}
		});

		$scope.init();
	}

	angular
	.module('gigMateApp')
	.controller('GigMateCtrl', ['$scope', '$timeout', '$http', '$rootScope', 'SetlistsService', GigMateCtrl]);
})();
