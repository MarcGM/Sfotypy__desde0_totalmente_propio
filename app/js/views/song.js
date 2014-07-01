Sfotipy.Views.Song = Backbone.View.extend({
	/*
		Indica que tipo de tag html será la nueva vista.
		En este caso, como cada vista será un elemento de una lista no ordenada,
			pues el tagname será "li".
	 */
	tagname: 'li',
	// Indica la clase que tendrá el elemento html de la vista.
	classname: 'item',
	/*
		Son los diferentes eventos que tendrá la vista.
		En este caso, serán 3:
		-"add": Se llamará al hacer click al elemento de añadir y llamará al
			método "add" de esta vista.
		-"love": Se llamará al hacer click al elemento en forma de corazón y
			llamará al método "love" de esta vista.
		-"share": Se llamará al hacer click al elemento con forma de compartir y
			llamará al método "share" de esta vista.

		Síntaxis:
			'evento selector': 'metodo_a_llamar'
	 */
	events: {
		'click .action.icon-add': 'add',
		'click .action.icon-love': 'love',
		'click .action.icon-share': 'share'
	},
	template: Handlebars.compile($("playlist_songs-template").html()),

	/*
		La función "initialize" se ejecuta al crear una instancia de la clase "SongView".
			Es como el constructor de la clase "SongView".
		Lo que hace es escuchar al modelo perteneciente a "SongView"(this.model), escuchar el
			evento "change" y ejecutar la función "render"(this.render) en el scope "this". Esto
			del scope es muy importante porque si no se ejecutaría en el scope del window, en este caso.
	 */
	initialize: function(){
		this.listenTo(this.model, "change", this.render, this)
	},
	render: function(){
		var song = this.model.toJSON();
		var html = this.template(song);
		this.$el.html(html);
		return this;
	}
});