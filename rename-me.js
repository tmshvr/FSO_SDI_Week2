//alert("JavaScript works!");

// Thomas Shaver
// 08/03/2012
// Project 2
// ............... Description ...............

var guestList = [ "Mike, Nevada, Johnny", "Bobbi, Sage, Madi", "Haley", "Patrick, Colleen",
        "Amanda, Logan, Karli, Elizabeth", "Kelly, Tim", "Matt, Jesse", "Rose, Verna, Joe, Josh"
    ],
    allGuests = [ ],
    totalGuests = 0,
    numberOfDecorations = 0,
    ready = false,
    whoArrived = "";

function ThrowParty() {
    totalGuests = 21;
    Announce( "We're throwing a surprise party for Mom." );
    numberOfDecorations = Decorate( 17 );
    Announce( "We got " + numberOfDecorations + " decorations up, discluding what the kids destroyed." );
    allGuests = GuestsArrive( guestList.length - 1, guestList );
    console.log( allGuests );
}

function Announce( what ) { // Function w/ arg and no return.
    console.log( "Announcement: " + what );
}

function Decorate( decorations ) { // Function with number arg and return number.
    var totalDecorations = 0;
    while( decorations > 0 ) {
        decorations -= 5;
        totalDecorations += 4;
        if( decorations % 2 === 0 ) {
            Announce( "Put up more decorations." );
        }
        else if( decorations % 3 == 1 ) {
            Announce( "Kids destroyed something." );
            totalDecorations--;
        };
    };
    return totalDecorations;
}

function GuestsArrive( numOf, names ) { // Function with number and array arg, and return array.
    var tempGuestList = [ ];
    for( var i = 0; i <= numOf; i++ ) {
        var theGuests = names[ i ].split( ", " );
        for( var j = 0; j < theGuests.length; j++ ) {
            tempGuestList[ tempGuestList.length ] = theGuests[ j ];
        };
        Announce( names[ i ] + " arrived. Waiting for " + ( totalGuests - tempGuestList.length ) + " more people." );
    };
    return tempGuestList;
}

ThrowParty();