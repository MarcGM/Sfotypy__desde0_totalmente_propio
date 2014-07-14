Sfotipy.Views.Albums = Backbone.View.extend({
	el: $('#albums'),

	template: Handlebars.compile($("#album-template").html()),

	initialize: function(){
		/*
			Cada vez que se añada("add") un nuevo elemento a la
				colección("this.collection"), se va a ejecutar el método
				"addOne"("this.addOne") en el namespace "this".
		 */
		this.listenTo(this.collection,"add",this.addOne, this);
	},
	/*
		Al cargar la página por primera vez, se va a ejecutar el método "render".
		Este método, lo que va a hacer es recorrer toda la colección, y por cada elemento,
		va a ejecutar el método "this.addOne".
	 */
	render: function(){
		this.collection.forEach(this.addOne,this);
	},
	//Este método, lo que hace es añadir un álbum a la colección.
	addOne: function(album){
		//Crea la vista a partir del módelo.
		var albumView = new Sfotipy.Views.Album({model: album});
		//Añade la vista renderizada del nuevo album creado y lo añade al elemento "el".
		this.$el.append(albumView.render().el);
	}
});