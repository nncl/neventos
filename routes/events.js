module.exports = function (app) {
 var validate = require('./../middlewares/valida');
 var events = app.controllers.events;

 // TODO Add it and remove others from routes cause it's used in all of them: app.use(validate)
 
 app.get('/menu', validate, events.menu);
 app.get('/cadUsuario', validate, events.cadastroUsuario);
 app.get('/cadEvento', validate, events.cadastroEvento);
 app.get('/listaEventos', validate, events.listaEventos);
};
