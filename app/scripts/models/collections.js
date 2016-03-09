var Backbone = require('backbone');


var Pokemon = Backbone.Model.extend({
  urlRoot: 'http://pokeapi.co/api/v2/'
});

var PokemonCollection = Backbone.Collection.extend({
  model: Pokemon,
  url: 'http://pokeapi.co/api/v2/',
  parse: function(data){
    return data.results;
  }
});

module.exports = {
  'Pokemon': Pokemon,
  'PokemonCollection': PokemonCollection
}
