/*

    - FACTORY: Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o 'new', 
      são consideradas funções Factory(fábrica). EXEMPLO:

*/


function FakeUser () {
    return {
        name: 'Guilherme',
        lastName: 'Cabrini'
    }
}

const user = FakeUser();
