let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
    console.log(i);     // logs: "0", "1", "2", "foo"
                        // ou seja, vai imprimir o índice, e não o valor da array
}

for (let i of arr) {
    console.log(i);     // logs: "3", "5", "7"
                        // ou seja, vai imprimir o valor da array
}



