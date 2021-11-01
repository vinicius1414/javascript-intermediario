/*

    - SINGLETON: O objetivo desse pattern é criar uma única instância de uma função construtora 
      e retorná-la toda vez em que for necessário utilizá-la. EXEMPLO:

*/


function MyApp() {
    if (!MyApp.instance) {
        MyApp.instance = this;
    }
    
    return MyApp.instance;
}