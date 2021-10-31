// Spread ...
var partes =  ['ombros', 'joelhos']
var musica = ['cabeca', ...partes, 'e', 'pés']
// Resultado: musica['cabeca', 'ombros', 'joelhos', 'e', 'pés']


function fn (x, y, z) { }
var args = [0, 1, 2];
fn(...args);
// Resultado: fn = 0, 1, 2