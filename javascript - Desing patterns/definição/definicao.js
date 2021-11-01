/*
    Desing Patterns ou padrões de projetos são soluções generalistas para 
    problemas recorrentes durante o desenvolvimento de um software. Não se trata 
    de um framework ou um código pronto, mas de uma definição de alto nível 
    de co
    
    A PATTERN LANGUAGE:
    - ANO: 1978
    - CRIADOR: Christopher Alexander, Sara Ishikawa e Murray Silverstein
    - 25 tipos de problemas/desafios de projetos

    FORMATO DE UM PATTERN:
    - Nome
    - Exemplo
    - Contexto
    - Problema
    - Solução

    TIPOS:
    - CRIAÇÃO: Abstraem e/ou adiam o processo de criação de objetos. Eles ajudam a tornar
      um sistema independente de como seus objetos são criados, compostos e representados.
      (Padrões de Criação: Abstract Factory, Builder, Factory Method, Prototype e Singleton)

    - ESTRUTURAIS: Se preocupam com a forma como classes e objetos são compostos para
     formar estruturas maiores.
     (Padrões Estruturais: Adapter, Bridge, Composite, Decorator, Facade, Business Delegate, Flyweight e Proxy)
    
    - COMPORTAMENTAIS: Se concentram nos algoritmos e atribuições de responsabilidades
      entre os objetos. Eles não descrevem apenas padrões de objetos ou de classes,
      mas também os padrões de comunicação entre os objetos.
      (Padrões Comportamentais: Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Observer
      , State, Strategy, Template Method e Visitor)



                    
            ----> EXEMPLOS: <----

    PATTERNS MAIS UTILIZADOS:
    - FACTORY: Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o 'new', 
      são consideradas funções Factory(fábrica). EXEMPLO:

      function FakeUser () {
          return {
              name: 'Guilherme',
              lastName: 'Cabrini'
          }
      }

      const user = FakeUser();

    - SINGLETON: O objetivo desse pattern é criar uma única instância de uma função construtora 
      e retorná-la toda vez em que for necessário utilizá-la. EXEMPLO:

      function MyApp() {
          if (!MyApp.instance) {
              MyApp.instance = this;
          }
          
          return MyApp.instance;
      }

    - DECORATOR: Uma função decorator recebe uma outra função como parâmetro e estende 
      o seu comportamento sem modificá-la explicitamente. EXEMPLO:

      function readonly(target, name, descriptor) {
          descriptor.writable = false;
          return descriptor;
      }

      Class Job {
          @readonly
          title() { return 'CEO' }
      }

    - OBSERVER: É um pattern muito popular em aplicações javascript. A instância (subscriber) mantém uma coleção 
      de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado. EXEMPLO:

      Class Observable {
          constructor() {
              this.observers = [];
          }

          subscribe(f) {
              this.observers.push(f);
          }

          unsubscribe(f) {
              this.observers = this.obersers.filter(subscriber => subscriber !== f);
          }

          notify(data) {
              this.observers.forEach(observer => observer(data));
          }
      }


    - MODULE: É um pattern que possibilita organizarmos melhor o nosso código, 
      sem a necessidade de expor variáveis globais. EXEMPLO:

      Class Person {
          constructor(name) {
              this.name = name;
          }
      }

      export default Person;

      // Utilizar Person
      import Person from './models/person';


*/


