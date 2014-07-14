Sfotipy.Views.Album = Backbone.View.extend({
	/*
		Indica que tipo de tag html será la nueva vista.
		En este caso, cada elemento será un "article.
	 */
	tagName: 'article',
	// Indica la clase que tendrá el elemento html de la vista.
	className: 'song',
	/*
		Son los diferentes eventos que tendrá la vista.
		En este caso, serán 3:
		-"add": Se llamará al hacer click al elemento de añadir y llamará al
			método "add" de esta vista.
		-"love": Se llamará al hacer click al elemento en forma de corazón y
			llamará al método "love" de esta vista.
		-"share": Se llamará al hacer click al elemento con forma de compartir y
			llamará al método "share" de esta vista.

		Síntaxis (si no utilizamos ningún "selector", el método se ejecutará si se hace 'click'(o lo que sea) en todo el elemento):
			'evento selector': 'metodo_a_llamar'
	 */
	events: {
		'click': 'navigate'
	},

	template: Handlebars.compile($('#album-template').html()),

	initialize: function() {
		this.listenTo(this.model,"change",this.render,this);
	},
	render: function(){
		var album = this.model.toJSON();
		var html = this.template(album);
		this.$el.html(html);
		return this;
	},
	navigate: function(){
		Sfotipy.app.navigate("album/" + this.model.get("name"),{trigger: true});
	}
});