//alert("JavaScript works!");

// Thomas Shaver
// 08/03/2012
// Project 2
// ............... Description ...............

var guestList = [ "Mike", "Nevada", "Johnny", "Bobbi", "Sage", "Madi", "Haley", "Patrick", "Colleen",
        "Amanda", "Logan", "Karli", "Elizabeth", "Kelly", "Tim", "Matt", "Jesse", "Rose", "Verna", "Joe", "Josh"
    ],
    allGuests = [ ],
    numberOfDecorations = 0,
    ready = false,
    whoArrived = "";
    

function ThrowParty() {
    Announce( "We're throwing a surprise party for Mom." );
    numberOfDecorations = Decorate( 40 );
    allGuests = GuestsArrive( guestList.length, guestList );
    ready = readyToParty( allGuests.length, guestList.length );
    Announce( areWeReadyYet( ));
}

function Announce( what ) {
    console.log( what );
}

function Decorate( decorations ) {
    var totalDecorations = 0;
    while( decorations != 0 ) {
        decorations --;
        totalDecorations++;
        if( decorations % 3 === 1 ) {
            Announce( "Put up more balloons (" + totalDecorations + ")." );
        }
        else if( decorations % 3 == 2 ) {
            Announce( "Put up more streamers (" + totalDecorations + ")." );
        }
        else {
            Announce( "Kid's destroyed something. (" + totalDecorations + ")." );
            decorations++;
        };
    };
    return totalDecorations;
}

function AreWeReadyYet() {
        console.log( "We're " + (ready? "": "not" ) + " ready to party. " + whoArrived + " is here, but we're waiting for " + ( guestList.length - allGuests.length ) + " more people to arrive." );

}