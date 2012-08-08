//alert("JavaScript works!");

// Thomas Shaver
// 08/03/2012
// Project 2
// ............... Description ...............

var guestList = [ "Mike, Nevada, Johnny", "Bobbi, Sage, Madi", "Haley", "Patrick, Colleen",
        "Amanda, Logan, Karli, Elizabeth", "Kelly, Tim", "Matt, Jesse", "Rose, Verna, Joe, Josh"
    ],
    allKids = "Sage, Madie, Logan, Karli, Elizabeth",
    allGuests = [ ],
    numberOfDecorations = 0,
    ready = false;

function ThrowParty() {
    totalGuests = 21;
    Announce( "We're throwing a surprise party for Mom." );
    allGuests = GuestsArrive( guestList.length - 1, guestList );
    ready = CheckReady(( allGuests.length === totalGuests ), ( numberOfDecorations === 15 ));
    numberOfDecorations = Decorate( 17 );
    Announce( "We got " + numberOfDecorations + " decorations up, discluding what the kids destroyed." );
    Announce( CheckKidsToAdults( allKids, guestList.toString()));
    if( ready === true ) {
        Announce( "We're ready, time to call Jim and tell him they can come back; nobody leave." );
    };
};

function Announce( what ) { // Function with arg and no return.
    console.log( "Announcement: " + what );
};

function Decorate( decorations ) { // Function with number arg, while loop, and return number.
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
};

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
};

function CheckReady( haveAllGuests, haveAllDecorations ) { // Function with two args, boolean comparison, and a boolean return.
    if( haveAllGuests === true && haveAllDecorations === true ) {
        Announce( "The guests are all here, and the decorations are up." );
        return true;
    }
    else if( haveAllGuests !== true ) {
        Announce( "We're still waiting for guests." );
        return false;
    }
    else {
        Announce( "We're still putting up decorations." );
        return false;
    };
};

ThrowParty();