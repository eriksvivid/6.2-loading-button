var $ = require('jquery');

var models = require('./models/collections.js');
var pokemons = new models.PokemonCollection();

var pokemonView = {
  clear: function(){
    $('.container').html('');
  },
  render: function(pokemon){
    $('.container').append('<div>' + pokemon.get("name") + ': ' + pokemon.get("types") + '</div>');
  }
}

pokemons.fetch().done(function(){
  pokemons.each(function(pokemonStat){
    pokemonView.render(pokemonStat);
});
