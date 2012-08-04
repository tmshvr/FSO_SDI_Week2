//alert("JavaScript works!");

// Thomas Shaver
// 08/03/2012
// Project 2
// ............... Description ...............

var allGuests = true, decorated = true, ready = false;

// If the guests are all here and we're done decorating,
if( allGuests && decorated ) {
// Then we're ready for Mom and Jim to come back:
	ready = !ready;
	console.log( "The guests are here, and the decorations are done; someone should call Jim and tell him we're ready." );
}