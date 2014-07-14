//Esta vista "List", hace referencia a la vista donde se muestra la lista de de reproducción actual.
Sfotipy.Views.List = Backbone.View.extend({
	el: $(".playlist > .listSongs"),

	initialize: function(){
		this.listenTo(this.collection, "add", this.addOne, this);
		this.listenTo(this.collection,"reset", this.render, this);
	},
	render: function(){
		this.$el.empty();
		this.addAll();
	},
	addOne: function(song){
		var songView = new Sfotipy.Views.Song({model: song});
		this.$el.append(songView.render().el);
	},
	addAll: function(){
		this.collection.forEach(this.addOne, this);
	}
});