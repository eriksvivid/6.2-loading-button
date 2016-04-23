var Backbone = require('backbone');


var Pokemon = Backbone.Model.extend({

});

var PokemonCollection = Backbone.Collection.extend({
  model: Pokemon,
  url: 'http://pokeapi.co/api/v2/pokemon/',
  parse: function(data){
    return data.results;
  }
});

// var pokemonCollect = new PokemonCollection()


module.exports = {
  'Pokemon': Pokemon,
  'PokemonCollection': PokemonCollection
};
