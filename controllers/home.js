"use strict";

/**
  * @description
  * Returns frontend routes and its handlers.
  */

let HomeController = {
  index: (req, res) => {
    res.render('home/index');
  },
  login: (request, response) => {
    var nome = request.body.usuario.nome;
    var senha = request.body.usuario.senha;
    if (nome == 'admin' && senha == 'admin') {
      let usuario = request.body.usuario;
        request.session.usuario = usuario;
        response.redirect('/menu');
      }
      else {
        response.redirect('/');
      }
    },
    logout: (request, response) => {
      request.session.destroy();
      response.redirect('/');
    }
};

module.exports = () => {
  return HomeController;
};
