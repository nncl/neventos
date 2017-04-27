module.exports = function (app) {

 var EventosController = {
 //chamadas a páginas via get
 menu: function (request, response) {
 var usuario = request.session.usuario,
 params = { usuario: usuario };
 response.render('events/menu', params);
 },
 cadastroUsuario: function (request, response) {
 var usuario = request.session.usuario,
 params = { usuario: usuario };
 response.render('events/cadUsuario', params);
 },
 cadastroEvento: function (request, response) {
 var usuario = request.session.usuario,
 params = { usuario: usuario };
 response.render('events/cadEvento', params);
 },
 listaEventos: function (request, response) {
 var usuario = request.session.usuario,
 params = { usuario: usuario };
 response.render('events/listaEventos', params);
 }
 };
 return EventosController;
};
