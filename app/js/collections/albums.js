/*
	Crea una colección básica de Backbone, extendiendo de la clase "Collections" de Backbone.
		También le indicamos el modelo (osea el tipo de datos que tendrá la colección) mediante la propiedad "model".
 */
	
Sfotipy.Collections.Albums = Backbone.Collection.extend({
	model: Sfotipy.Models.Album
});