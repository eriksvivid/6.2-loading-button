var $ = require('jquery');
var Backbone = require('backbone');
var handlebars = require('handlebars');
var _ = require('underscore');

var Pokemon = require('./models/collections');
var pokemons = new Pokemon.PokemonCollection();

$('.search').on('click', function(){
  $('.btn').html('Loading..');
  this.disabled = true;
  pokemons.fetch().done(function(event){
    $('.btn').html('Submit');
    document.getElementsByClassName('.btn').disabled = false;
    event.results.map(function(pokemon){
      // console.log(pokemon.name);
      $('.container').append('<li>' + pokemon.name + '</li>');
    });
  });
});
