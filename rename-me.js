//alert("JavaScript works!");

// Thomas Shaver
// 08/03/2012
// Project 2
// ............... Description ...............

var allGuests = false,
    decorated = false,
    ready = false,
    guests = 20,
    arrived = 0,
    decorations = 40,
    decorationsUp = 0;

// While we're still waiting for guests to arrive,
while( guests < 20 ) {
// Put up decorations
    for( ; decorationsUp <= decorations; decorationsUp += 2 ) {
        console.log(( decorations - decorationsUp ) + " decorations left, and " + ( guests - arrived ) + " on their way." );
    }
    guests++;
}


// If the guests are all here and we're done decorating,
if( allGuests && decorated ) {
// Then we're ready for Mom and Jim to come back:
	ready = !ready;
	console.log( "The guests are here, and the decorations are done; someone should call Jim and tell him we're ready." );
}

