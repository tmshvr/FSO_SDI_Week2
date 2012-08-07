//alert("JavaScript works!");

// Thomas Shaver
// 08/03/2012
// Project 2
// ............... Description ...............

var allArrived = false,
    decorated = false,
    ready = false,
    guests = [
        "Mike, Nevada, and Johnny", "Bobbi, Sage, and Madi", "Haley", "Patrick and Colleen",
        "Amanda, Logan, Karli, and Elizabeth", "Kelly and Tim", "Matt and Jesse", "Rose, Verna, Joe, and Josh"
    ],
    arrived = [ ],
    allGuests = [ ],
    arrival = 0,
    decorations = 40,
    decorationsUp = 0,

    announceGuest = function( guest ) {
        console.log( guest + "just arrived." );
    },

    readyToParty = function( haveAllGuests, haveAllDecorations ) {
        if( haveAllGuests && haveAllDecorations ) {
            console.log( "We're ready to party." );
        }
        else if( !haveAllGuests ) {
            console.log( "Waiting for more guests." );
        }
        else {
            console.log( "Still putting up decorations." );
        };
        readyToParty = true;
    },

    putUpDecorations = function( numberOfDecorations ) {
        while( numberOfDecorations != 0 ) {
            numberOfDecorations--;
            if(( numberOfDecorations % 3 ) === 0 ) {
                console.log( "Put up some more balloons. " + numberOfDecorations );
            }
            else if(( numberOfDecorations % 3 ) === 1 ) {
                console.log( "Hung more birthday party decorations. " + numberOfDecorations );
            }
            else {
                console.log( "Kids broke something. " + ( --numberOfDecorations ));
            };
        };
        decorated = true;
    },

    addToGuestList = function( numberOf, names ) {
        var guestList = allGuests;
        for( var i = 0; i <= numberOf; i++ ) {
            guestList[ guestList.length + i ] = names[ i ];
        };
        return guestList;
    },

    checkList = function( name, list ) {
        var nameList = list.split( ", " );
        for( var i = 0; i <= nameList.length; i++ ) {
            if( name === nameList[ i ]) {
                return name + " was expected.";
            }
            else {
                return name + " was not expected.";
            };
        };
    },

    var throwParty = function() {
        var stringGuestList = "";
        readyToParty( allArrived, decorated );
        putUpDecorations( 10 );
        for( var i = 0; i <= guests.length; i++ ) {
            var whoArrived = guests[ i ].split( ", " );
            for( var j = 0; j <= whoArrived.length; j++ ) {
                console.log( checkList( whoArrived[ j ]));
            };
            announceGuest( guests[ i ]);
            arrived = addToGuestList( guests[ i ], arrived );
        };
        
    }