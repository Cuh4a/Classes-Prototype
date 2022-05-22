
// class Animal {  //Главный класс от него можем унаследоваться 
//     static type = 'ANIMAL';
//     constructor(options) {// Главный конструктор
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//     voice() {
//         console.log('Im Animal');
//     }
// }

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// });


// // ===================================================================
// class Cat extends Animal {//Унаследование от класса Animal
//     static type = 'CAT'

//     constructor(options) {
//         super(options)// Вызываем главный конструктор класса Animal
//         this.color = options.color;
//     }

//     voice() {
//         super.voice()// вызвать voice() у родительского класса Animal
//         console.log('Im Cat');
//     }

//     get ageInfo() { //геттер
//         return this.age * 7
//     }

//     set ageInfo(newAge) {//сеттер(можно менять значения в самих объектах)
//         this.age = newAge;
//     }

// };

// const cat = new Cat({
//     name: 'Cat',
//     age: 5,
//     hasTail: true,
//     color: "green"
// })


// console.log(cat.ageInfo);
// console.log(cat.ageInfo);

// ==============Практический пример================

class Componnent {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    hide() {
        this.$el.style.display = 'none';
    }

    show() {
        this.$el.style.display = 'block';
    }
}

class Box extends Componnent {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.color;
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2',
    size: 100,
    color: 'blue'
})

console.log(box1.show());
// console.log(box1.hiden());

class Circle extends Box {
    constructor(options) {
        super(options);
        this.$el.style.borderRadius = '50%';
    }
}
const c = new Circle({
    selector: '#circle',
    size: 90,
    color: 'green'
})