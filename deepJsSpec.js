describe('JavaScript teórico y su comportamiento', function() {

// En este ejercicio vamos a trabajar distinto, las funciones en deepJs.js ya están armadas,
// lo que que hay que hacer es poner el resultado correcto del test.
// Traten de primero pensarlo y armarse una respuesta que puedan justificar.
// Van a tener que considerar scopes, hoisting y todo lo que aprendieron de la teoria.

  describe('Scopes de función y bloque', function() {

    it('¿Qué tipo retorna la función scopes?', function() {
      expect(typeof scopes()).toEqual('undefined'); //'undefined' FUE LA RESPUESTA//
    });

    it('¿Qué valor retorna la función bloque?', function() {
      expect(bloque()).toEqual('Guille'); //'Guille' FUE LA RESPUESTA//
    });

  });

  describe('Precedencia y Asociatividad', function() {

    it('Triple igualdad',function() {
      expect(igualdad()).toEqual(3);//3 FUE LA RESPUESTA//
    });

    it('Doble comparación ordenada',function() {
      expect(boolean(true)).toEqual(true); //true FUE LA RESPUESTA//
    });

    it('Doble comparación desordenada',function() {
      expect(boolean(false)).toEqual(true);//true FUE LA RESPUESTA//
    })
  })
});
/*
En este spec trabajamos sobre los test, en colocar el resultado correcto de cada test, tus respuesta han sido ✨correctas✨, pero no justificaste tus respuestas 😿 Asi que trata de darle una revisada y pensar en una justificación. Después de eso, todo está genial!🚀
*/