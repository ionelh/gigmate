var gigMateApp = angular.module('gigMateApp', []);

gigMateApp.controller('GigMateCtrl', function($scope, $timeout) {
	// TODO Inestigate more why when calling a function in the controller from an ng-repeat it gets called more times than it should. dirty checking, angular $digest
	
	setLists = [
		{
			title: "Test Setlist",
			songs: [
				{
					title: "Test Song",
					bpm: 120,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going 1", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band 1", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "PROGGY PART 1", description: "Look, this thing can go prog. 6 bars of 9/16", subdivisionsPerBar: 9, subdivision: 16, bars: 6
						},
						{
							name: "VERSE 1", description: "Ok, you've gone crazy eough. Just chill and let the vocalist do his thing.", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "PROGGY PART 2", description: "Going proggy again, this time in 11/8. 4 bars.", subdivisionsPerBar: 11, subdivision: 8, bars: 4
						},
						{
							name: "BRIDGE", description: "Follow the bassline and build up for the final Chorus.", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "CHORUS 2", description: "Just groove it and do an epic ending", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						}
					]
				},
				{
					title: "My Song",
					bpm: 120,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going 1", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band 1", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "INTRO", description: "No drums, do a cool triplet fill at the end", subdivisionsPerBar: 4, subdivision: 4, bars: 2
						},
						{
							name: "PROGGY PART 1", description: "Look, this thing can go prog. 6 bars of 9/16", subdivisionsPerBar: 9, subdivision: 16, bars: 6
						},
						{
							name: "VERSE 1", description: "Ok, you've gone crazy eough. Just chill and let the vocalist do his thing.", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "PROGGY PART 2", description: "Going proggy again, this time in 11/8. 4 bars.", subdivisionsPerBar: 11, subdivision: 8, bars: 4
						},
						{
							name: "CHORUS 1", description: "Here's the chorus. Keep it steady and groovy!", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "VERSE 2", description: "Back to verse, the vocalist does his thing again.", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "BRIDGE", description: "Follow the bassline and build up for the final Chorus.", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "CHORUS 2", description: "Just groove it and do an epic ending", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						}
					]
				},
				{
					title: "My Song 2",
					bpm: 90,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "CHORUS", description: "This noe starts wth the chorus", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "VERSE", description: "The Verse", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "CHORUS", description: "This noe starts wth the chorus", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						}
					]
				}
			]
		},
		{
			title: "SSC - General",
			songs: [
				{
					title: "Uncount what counts",
					bpm: 128,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "INTRO TOBE", description: "Drums only", subdivisionsPerBar: 4, subdivision: 4, bars: 2
						},
						{
							name: "VERSE", description: "The Verse", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "CHORUS", description: "The Chorus", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "DRUMS ONLY", description: "Drums only", subdivisionsPerBar: 4, subdivision: 4, bars: 2
						},
						{
							name: "VERSE", description: "The verse", subdivisionsPerBar: 4, subdivision: 4, bars: 14
						},
						{
							name: "SNARE ONLY", description: "Snare only", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "VERSE", description: "The Verse", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "BRIDGE - GUITAR ONLY", description: "Bridge", subdivisionsPerBar: 7, subdivision: 8, bars: 4
						},
						{
							name: "BRIDGE - + DRUMS", description: "Bridge", subdivisionsPerBar: 7, subdivision: 8, bars: 12
						},
						{
							name: "BRIDGE - + VOCALS", description: "Bridge", subdivisionsPerBar: 7, subdivision: 8, bars: 16
						},
						{
							name: "PRE CHORUS", description: "Pre Chorus", subdivisionsPerBar: 4, subdivision: 4, bars: 12
						},
						{
							name: "CHORUS", description: "The Chorus", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						}
					]
				},
				{
					title: "Foxy Lady",
					bpm: 125,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "INTRO GUITAR", description: "No drums", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "INTRO WITH DRUMS", description: "Intro with drums", subdivisionsPerBar: 4, subdivision: 4, bars: 10
						},
						{
							name: "VERSE", description: "The Verse", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "CHORUS", description: "The Chorus", subdivisionsPerBar: 4, subdivision: 4, bars: 10
						},
						{
							name: "BOSA", description: "Bosa Bridge", subdivisionsPerBar: 4, subdivision: 4, bars: 6
						},
						{
							name: "VERSE", description: "The Verse", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "CHORUS", description: "The Chorus", subdivisionsPerBar: 4, subdivision: 4, bars: 18
						},
						{
							name: "BRIDGE", description: "The Bridge", subdivisionsPerBar: 4, subdivision: 4, bars: 12
						},
						{
							name: "CHORUS", description: "The Chorus", subdivisionsPerBar: 4, subdivision: 4, bars: 10
						},
						{
							name: "OUTRO GUITAR", description: "No drums", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						}
					]
				}
			]
		},
		{
			title: "Theory of Mind - General",
			songs: [
				{
					title: "Inner friend",
					bpm: 122,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "INTRO GUITAR", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "VERSE", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "CHORUS", description: "HH and Tambourine", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "VERSE - NO DRUMS", description: "Start on the last bar, crazy ride / rim pattern", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "VERSE", description: "Crazy ride / rim pattern", subdivisionsPerBar: 4, subdivision: 4, bars: 12
						},
						{
							name: "CHORUS", description: "HH and Tambourine", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "BRIDGE - RAMA", description: "HH and Tambourine", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "BRIDGE - SNARE", description: "HH and Tambourine", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "CHORUS", description: "HH and Tambourine", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						}
					]
				},
				{
					title: "Skin",
					bpm: 87,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						/*{
							name: "INTRO - NO DRUMS", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},*/
						{
							name: "PRE VERSE", description: "HH, Rim, 16ths", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "VERSE", description: "HH, Snare, 16ths", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "CHORUS", description: "HH, Snare, 8ths, Syncopated", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "PRE VERSE", description: "HH, Rim, 16ths", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "VERSE", description: "HH, Snare, 16ths", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "CHORUS", description: "HH, Snare, 8ths, Syncopated", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "PRE VERSE", description: "HH, Rim, 16ths", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "VERSE", description: "HH, Snare, 16ths", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						}
					]
				},
				{
					title: "Maggie",
					bpm: 110,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "GUITAR INTRO", description: "No drums", subdivisionsPerBar: 4, subdivision: 4, bars: 2
						},
						{
							name: "CHORUS", description: "HH, Rim", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "VERSE", description: "HH, Rim", subdivisionsPerBar: 13, subdivision: 4, bars: 2
						},
						{
							name: "STOP", description: "HH, Rim", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "CHORUS", description: "HH, Rim", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "VERSE", description: "HH, Rim", subdivisionsPerBar: 13, subdivision: 4, bars: 2
						},
						{
							name: "BRIDGE", description: "HH, Rim", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "BRIDGE INSTRUMENTAL", description: "HH, Rim", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "BRIDGE", description: "HH, Rim", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						}
					]
				}
			]
		},
		{
			title: "ToM - Street Delivery Iasi 2015",
			songs: [
				{
					title: "Lonely Ghost",
					bpm: 91,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "GUITAR INTRO", description: "No drums", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "VERSE", description: "HH", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "CHORUS", description: "Ride", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "VERSE", description: "HH", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "CHORUS", description: "Ride", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "CHORUS 2", description: "Ride", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "PAUSE", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "VERSE", description: "HH", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "CHORUS", description: "Ride", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "CHORUS 2", description: "Ride, finish on last snare", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						}
					]
				},
				{
					title: "Under the sea",
					bpm: 73,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "INTRO GUITAR", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "VERSE", description: "HH, small snare", subdivisionsPerBar: 4, subdivision: 4, bars: 12
						},
						{
							name: "BREAK", description: "STOP", subdivisionsPerBar: 4, subdivision: 8, bars: 1
						},
						{
							name: "CHORUS", description: "Main snare, ride", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "BRIDGE - IMPRO", description: "Quiest impro", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "VERSE", description: "HH, small snare", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "BREAK", description: "STOP", subdivisionsPerBar: 4, subdivision: 8, bars: 1
						},
						{
							name: "CHORUS", description: "Main snare, ride", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "BREAK - NO DRUMS", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "OUTRO", description: "Ride, ghost notes on the hats", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						}
					]
				},
				{
					title: "Andromeda",
					bpm: 113,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "INTRO GUITAR", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "CHORUS", description: "Ride, 16ths in between on the snare", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "VERSE", description: "HH, Snare on every beat", subdivisionsPerBar: 4, subdivision: 4, bars: 11
						},
						{
							name: "BRIDGE", description: "HH, 16ths pattern on HH", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "CHORUS", description: "Ride, 16ths in between on the snare", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "VERSE", description: "HH, Snare on every beat, pause on the last 2 measures", subdivisionsPerBar: 4, subdivision: 4, bars: 11
						},
						{
							name: "BRIDGE", description: "HH, 16ths pattern on HH", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "BRIDGE", description: "HH, 16ths pattern on HH", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						}
					]
				},
				{
					title: "Anna",
					bpm: 76,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "INTRO", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 2
						},
						{
							name: "VERSE 1", description: "Rama", subdivisionsPerBar: 4, subdivision: 4, bars: 6
						},
						{
							name: "GUITAR SOLO", description: "Open HH - 2 tobe mari", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "VERSE 2", description: "Rama", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "CHORUS", description: "Snare, Ride - 2 tobe mari", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "BRIDGE", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 2
						},
						{
							name: "GUITAR SOLO", description: "Open HH - 2 tobe mari", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "CHORUS", description: "Snare, Ride - 2 tobe mari", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "GUITAR SOLO", description: "Open HH - 2 tobe mari", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						}
					]
				},
				{
					title: "Brown eyes",
					bpm: 74,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "INTRO GUITAR", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "VERSE 1", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 17
						},
						{
							name: "BRIDGE", description: "HH Only", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "VERSE 2", description: "HH, 8ths, Rim", subdivisionsPerBar: 4, subdivision: 4, bars: 17
						},
						{
							name: "CHORUS", description: "Snare, open HH - pana la jumate accent pe patrime, de la jumate drept", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						}
					]
				},
				{
					title: "Melting Clouds",
					bpm: 120,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "INTRO GUITAR", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "CHORUS", description: "HH, 4th notes", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "CHORUS - INSTRUMENTAL", description: "HH, 4th notes, also play open HH with left hand", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "VERSE", description: "Ride, Rim, 8ths", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "CHORUS", description: "HH, 4th notes", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "CHORUS - INSTRUMENTAL", description: "HH, 4th notes", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "VERSE", description: "RIDE, Rim, 8ths", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "CHORUS", description: "HH, 4th notes", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "CHORUS - INSTRUMENTAL", description: "HH, 4th notes", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						}
					]
				},
				{
					title: "Emily",
					bpm: 118,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "INTRO DRUM FILL", description: "Fill on the last 2 beats", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "CHORUS", description: "16ths tambourine - Vocals start at half - gentle smashes on 16th", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "VERSE", description: "8ths HH - Tambourine gently in the bg - STOP on beat 2 last measure", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "CHORUS", description: "16ths tambourine - gentle smashes on 16th", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "VERSE", description: "8ths HH - Tambourine gently in the bg - drum fill at the end", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "CHORUS", description: "16ths tambourine - gentle smashes on 16th", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "BRIDGE - NO DRUMS", description: "Half tempo - 8ths ride - de la jumate drept pe ride si HH in contra", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "BRIDGE", description: "16ths tambourine - gentle smashes on 16th - end on FT", subdivisionsPerBar: 4, subdivision: 4, bars: 32
						}
					]
				},
				{
					title: "Solitude",
					bpm: 98,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "GUITAR RIFF", description: "No drums", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "VERSE", description: "HH, snare", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "CHORUS", description: "Open HH", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "GUITAR RIFF", description: "No drums", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "CHORUS", description: "Open HH", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "VERSE - THE IT", description: "HH, open HH on every beat", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "GUITAR RIFF", description: "No drums", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "BRIDGE", description: "Just HH and snare", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "CHORUS", description: "Open HH", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "VERSE - THE IT", description: "HH, open HH on every beat", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "OUTRO", description: "Just open HH", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						}
					]
				},
				{
					title: "Daydream - tamburina",
					bpm: 126,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "INTRO GUITAR", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "VERSE", description: "Closed HH", subdivisionsPerBar: 4, subdivision: 4, bars: 20
						},
						{
							name: "REFREN", description: "Cazan - HH on 2 and 4", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "VERSE", description: "Closed HH", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "REFREN", description: "Cazan - HH on 2 and 4", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "BRIDGE", description: "Shuffle, Ride", subdivisionsPerBar: 4, subdivision: 4, bars: 24
						},
						{
							name: "GUITAR ONLY", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "REFREN 1", description: "Cazan - HH on 2 and 4", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "REFREN 1", description: "Cazan - HH on every beat, mai aglomerat pe toms", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						}
					]
				},
				{
					title: "I felt the sun",
					bpm: 119,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "INTRO GUITAR", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 4
						},
						{
							name: "VERSE", description: "2nd snare, HH", subdivisionsPerBar: 4, subdivision: 4, bars: 15
						},
						{
							name: "PRE CHORUS", description: "16ths, no snare", subdivisionsPerBar: 4, subdivision: 4, bars: 2
						},
						{
							name: "CHORUS", description: "16ths on open HH", subdivisionsPerBar: 4, subdivision: 4, bars: 15
						},
						{
							name: "PRE VERSE", description: "NO DRUMS", subdivisionsPerBar: 4, subdivision: 4, bars: 2
						},
						{
							name: "VERSE", description: "2nd snare, HH", subdivisionsPerBar: 4, subdivision: 4, bars: 31
						},
						{
							name: "PRE CHORUS", description: "16ths, no snare", subdivisionsPerBar: 4, subdivision: 4, bars: 2
						},
						{
							name: "CHORUS", description: "16ths on open HH", subdivisionsPerBar: 4, subdivision: 4, bars: 31
						}
					]
				},
				{
					title: "Summer waves",
					bpm: 120,
					parts: [
						{
							name: "GET TEMPO", description: "4 beats to get the tempo going", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "COUNT IN THE BAND", description: "4 beats to count in the band", subdivisionsPerBar: 4, subdivision: 4, bars: 1
						},
						{
							name: "INTRO WITH DRUMS", description: "NO VOCALS", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "VERSE", description: "HH", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "VERSE VARIATION", description: "Variation on HH + tambourine - pause @ the end", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "CHORUS", description: "Ride, some 16ths on the HH", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "PRE VERSE", description: "HH", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "VERSE", description: "HH", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "VERSE VARIATION", description: "Variation on HH + tambourine - pause @ the end", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "BRIDGE - OPEN HH", description: "HH", subdivisionsPerBar: 4, subdivision: 4, bars: 8
						},
						{
							name: "CHORUS", description: "Ride, some 16ths on the HH", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						},
						{
							name: "CHORUS INSTRUMENTAL", description: "Ride, ghost notes on the HH", subdivisionsPerBar: 4, subdivision: 4, bars: 16
						}
					]
				}
			]
		}
	];
	
	// TODO - when pressing Space or start multiple times, unexpected behaviour occurs
	// TODO - when pressing next song on the last song (while the song is playing) of the setlist it goes to the same some song, from the beginning.
	// It should go to the next setlist, or do nothing? Or maybe it's ok this way. The same thing happens when pressing next setlist, while the last song of the last setlist is playing.
	// TODO - when entering presentation mode in chrome on mac, can I NOT, it would be nice to exit presentation mode with escape.	
	
	$scope.currentSong = 0;
	$scope.currentSetlist = 0;
	$scope.currentSongPart = 0;
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
		
	/*********** GENERAL COMMENTS *********/
	// Instead of having the massive object on the scope and manipulating that from the markup, I think it's better that the object (setLists) is a local var
	// and have functions like getCurrentSetList on the scope that return references of what's needed by the markup.
	// Or is that like having the object itself on the scope?
	/*********** END OF GENERAL COMMENTS *********/
	
	// returns a reference to the current setlist
	$scope.getCurrentSetList = function () {
		return setLists[$scope.currentSetlist];
	}
	
	// returns a reference to the current song
	$scope.getCurrentSong = function () {
		return $scope.getCurrentSetList().songs[$scope.currentSong];
	}
	
	// pre processes the song. Adds properties like the part duration for each song. It's easier to do this once, I need the duration for each part
	// so that I know when to update the song parts descriptions
	function preProcessSong(song) {
		for (var setList = 0; setList < setLists.length; setList++) {
			for (var song = 0; song < setLists[setList].songs.length; song++) {
				
			}
		}
		// add duration for each part
		//for(var i = 0; i < song.parts.length; i++) {
			//song.parts[i].duration = getCurrentSongPartDuration(song, song.parts[i]);
		//}
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
	
	// depending on the number of beats (4th notes) in the song, calculates the song's and returns a string mm:ss
	$scope.getSongDurationMinsSecs = function (song) {
		return convertMinsToMinsSecs($scope.getSongDuration(song));
		/*var mins;
		var secs;
		secs = parseInt(getSongTotalBeats(song) / song.bpm * 60, 10);
		mins = Math.floor(secs / 60);
		secs = secs % 60;
		mins < 10 ?  mins = "0" + mins : mins;
		secs < 10 ?  secs = "0" + secs : secs;
		return mins + ":" + secs;*/
	}
	
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
});