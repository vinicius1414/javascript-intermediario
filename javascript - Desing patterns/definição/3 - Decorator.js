/*

    - DECORATOR: Uma função decorator recebe uma outra função como parâmetro e estende 
      o seu comportamento sem modificá-la explicitamente. EXEMPLO:

*/


function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}


/*

Class Job {
    @readonly
    title() { return 'CEO' }
}

*/