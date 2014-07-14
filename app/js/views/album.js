Sfotipy.Views.Album = Backbone.View.extend({
	/*
		Indica que tipo de tag html será la nueva vista.
		En este caso, como cada vista será un elemento de una lista no ordenada,
			pues el tagname será "li".
	 */
	tagName: 'article',
	// Indica la clase que tendrá el elemento html de la vista.
	className: 'song',


});