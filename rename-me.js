//alert("JavaScript works!");

// Thomas Shaver
// 08/03/2012
// Project 2
// ............... Description ...............

var guestList = [ "Mike, Nevada, Johnny", "Bobbi, Sage, Madi", "Haley", "Patrick, Colleen",
        "Amanda, Logan, Karli, Elizabeth", "Kelly, Tim", "Matt, Jesse", "Rose, Verna, Joe, Josh"
    ],
    numberOfDecorations = 0;

function ThrowParty() {
    Announce( "We're throwing a surprise party for Mom." );
    numberOfDecorations = Decorate( 17 );
    Announce( "We got " + numberOfDecorations + " decorations up, discluding what the kids destroyed." );
}

function Announce( what ) { // Function w/ arg and no return.
    console.log( what );
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

ThrowParty();