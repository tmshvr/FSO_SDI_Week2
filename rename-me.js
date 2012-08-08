//alert("JavaScript works!");

// Thomas Shaver
// 08/03/2012
// Project 2
// Story-telling code.

var guestList = [ "Mike, Nevada, Johnny", "Bobbi, Sage, Madi", "Haley", "Patrick, Colleen",
        "Amanda, Logan, Karli, Elizabeth", "Kelly, Tim", "Matt, Jesse", "Rose, Verna, Joe, Josh"
                ],
    allGuests = [ ],
    totalGuests = 0,
    numberOfDecorations = 0,
    ready = false,

    makeAnnouncement = function( what ) { // Function with arg and no return.
        console.log( "Announcement: " + what );
    },

    decorate = function( decorations ) { // Function with number arg, while loop, and return number.
        var totalDecorations = 0;
        while( decorations > 0 ) {
            decorations -= 5;
            totalDecorations += 4;
            if( decorations % 2 === 0 ) {
                makeAnnouncement( "Put up more decorations." );
            }
            else if( decorations % 3 === 1 ) {
                makeAnnouncement( "Kids destroyed something." );
                totalDecorations -= 1;
            }
        }
        return totalDecorations;
    },

    concatenateGuestAnnouncement = function( guests, announcement ) { // Function with two string args and one string output.
        var i = 0, arrived = "";
        if( guests.length < 2 ) {
            announcement = guests + announcement;
        }
        else {
            for( i; i < guests.length - 1; i += 1 ) {
                if( i > 0 ) {
                    arrived += " ";
                }
                arrived += guests[ i ] + ",";
            }
            arrived += ( " and " + guests[ guests.length - 1 ] );
            announcement = arrived + announcement;
        }
        return announcement;
    },

    guestsArrive = function( numOf, names ) { // Function with number and array arg, and return array.
        var tempGuestList = [ ], theGuests, i, j;
        for( i = 0; i < numOf; i++ ) {
            theGuests = names[ i ].split( ", " );
            for( j = 0; j < theGuests.length; j++ ) {
                tempGuestList[ tempGuestList.length ] = theGuests[ j ];
            }
            makeAnnouncement(concatenateGuestAnnouncement( names[ i ].split( ", " ), ( " arrived. Waiting for " + ( totalGuests - tempGuestList.length ) + " more people." )));
        }
        return tempGuestList;
    },

    checkReady = function( haveAllGuests, haveAllDecorations ) { // Function with two args, boolean comparison, and a boolean return.
        var checked = false;
        if( haveAllGuests === true && haveAllDecorations === true ) {
            makeAnnouncement( "The guests are all here, and the decorations are up." );
            checked = true;
        }
        else if( !haveAllGuests ) {
            makeAnnouncement( "We're still waiting for guests." );
        }
        else {
            makeAnnouncement( "We're still putting up decorations." );
        }
        return checked;
    },

    throwParty = function () {
        totalGuests = 21;
        makeAnnouncement( "We're throwing a surprise party for Mom." );
        allGuests = guestsArrive( guestList.length, guestList );

        ready = checkReady(( allGuests.length === totalGuests ), ( numberOfDecorations === 15 ));
        if( ready ) {
            makeAnnouncement( "Time to call Jim and tell him to bring Mom back, nobody leave!" );
        }
        else {
            makeAnnouncement( "Not ready quite yet." );
        }

        numberOfDecorations = decorate( 17 );
        makeAnnouncement( "We got " + numberOfDecorations + " decorations up, discluding what the kids destroyed." );

        ready = checkReady(( allGuests.length === totalGuests ), ( numberOfDecorations === 15 ));
        if( ready ) {
            makeAnnouncement( "Time to call Jim and tell him to bring Mom back, nobody leave!" );
        }
        else {
            makeAnnouncement( "Not ready quite yet. " + allGuests.length + ";" + numberOfDecorations + "."  );
        }
    };

throwParty();