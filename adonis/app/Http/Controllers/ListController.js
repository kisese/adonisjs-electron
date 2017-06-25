'use strict'

class ListController {
  * show (request, response) {
       // const characters = {
       //   'Daenerys Targaryen' : 'Emilia Clarke',
       //   'Jon Snow'           : 'Kit Harington',
       //   'Arya Stark'         : 'Maisie Williams',
       //   'Melisandre'         : 'Carice van Houten',
       //   'Khal Drogo'         : 'Jason Momoa',
       //   'Tyrion Lannister'   : 'Peter Dinklage',
       //   'Ramsay Bolton'      : 'Iwan Rheon',
       //   'Petyr Baelish'      : 'Aidan Gillen',
       //   'Brienne of Tarth'   : 'Gwendoline Christie',
       //   'Lord Varys'         : 'Conleth Hill'
       // }

       // yield response.sendView('home',  { characters: characters })
       yield response.sendView('home',  { })
    }
}

module.exports = ListController
