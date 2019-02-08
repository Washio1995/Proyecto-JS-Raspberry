/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    login:async (req,res)=> {
        const parametros = req.allParams();

        var usuarioLogueado = await Usuario.find(
            {
                correoElectronico: parametros.correoElectronico,
                password: parametros.password,
            }
        );
        const error = usuarioLogueado.length === 0;
        if (!error) {
            return res.ok(usuarioLogueado[0]);
        } else {
            return res.badRequest({mensaje: 'Usuario Invalido'});
        }
    }
  

};

