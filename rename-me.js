//alert("JavaScript works!");

// Thomas Shaver
// 08/03/2012
// Project 2
// ............... Description ...............

var allGuests = false,
    decorated = false,
    ready = false,
    guests = [
        "Mike, Nevada, and Johnny", "Bobbi, Sage, and Madi", "Haley", "Patrick and Colleen",
        "Amanda, Logan, Karli, and Elizabeth", "Kelly and Tim", "Matt and Jesse", "Rose, Verna, Joe, and Josh",
    arrived = [ ],
    arrival = 0,
    decorations = 40,
    decorationsUp = 0;

while( decorationsUp < decorations ) {
    decorationsUp += 5;
    console.log(( decorationsUp - decorations ) + " decorations left to put up." );
}

for( ; arrival <= guests; arrival++ ) {
    console.log( guests[ arrival ] + " just showed up.");
    arrived[ arrival ] = guests[ arrival ];
}


allGuests = ( arrived === guests );
decorated = ( decorationsUp === decorations );

// If the guests are all here and we're done decorating,
if( allGuests && decorated ) {
// Then we're ready for Mom and Jim to come back:
	ready = !ready;
	console.log( "The guests are here, and the decorations are done; someone should call Jim and tell him we're ready." );
}

