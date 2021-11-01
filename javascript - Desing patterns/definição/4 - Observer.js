/*

    - OBSERVER: É um pattern muito popular em aplicações javascript. A instância (subscriber) mantém uma coleção 
      de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado. EXEMPLO:

*/


/*

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

*/