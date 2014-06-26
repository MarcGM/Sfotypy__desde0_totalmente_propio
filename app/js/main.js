/*
	Creamos un namespace (que es un objeto literal, vacio en Javascript).
	Esto lo hacemos para hacerlo mas accesible des de la terminal, por ejemplo.
 */
Sfotipy = {};

//Creamos un modelo (Model) de Backbone, extendiendo del objeto "Model" de Backbone.
Sfotipy.Song = Backbone.Model.extend({});
/*
	Creamos la colección "Songs". Una colección de Backbone es un conjunto
		de modelos tipo "Song".
 */
Sfotipy.Songs = Backbone.Collection.extend({
	/*
		Hemos de decir que clase de modelos contendrá la colección.
			En este caso, la colección contendrá objetos tipo "Song". (
			Hacemos referencia a la clase y NO a las instáncias creadas
			a partir de esa clase.)
	 */
	model: Sfotipy.Song
})
//Creamos una vista (View) de Backbone, extendiendo del objeto "View" de Backbone.
Sfotipy.SongView = Backbone.View.extend({
	/*
		La propiedad "events" va a contener el mapeo de los eventos 
			que tiene nuestra interfaz (solo la vista que estamos renderizando).
	 */
	events: {
		// Síntaxi eventos: "'evento selector': 'funcion_a_ejecutar'"
		'click .action.icon-add': 'add'
	},
	// Nombre de la etiqueta de la vista Backbone:
	tagname: 'li',
	// Clase/s de la vista Backbone:
	className: 'item',
	template: Handlebars.compile($("#playlist_songs-template").html()),

	/*
		La función "render" se ejecutará cada vez que se muestre esta vista
			en pantalla. Es una función predeterminada de Backbone que se
			ejecuta en ese caso.
	 */
	render: function(){
		var html = this.template(this.model.toJSON());

		this.$el.html(html);
	},
	/*
		Esta función, se ejecutará al hacer "click" encima del elemento
		con los selectores ".action" y ".icon-add".
		Recibe como argumento("e"), el evento (en este caso "click").
	 */
	add: function(e){
		alert(this.model.get('name'));
	}
});
//Dejamos el objeto "Sfotipy" en el contexto global de Javascript.
window.Sfotipy = Sfotipy;