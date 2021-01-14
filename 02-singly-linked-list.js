const LinkedList = require('./01-linked-list-class')


const main = () => {
    let SLL = new LinkedList()
    const addItems = ["Apollo", "Boomer", "Helo", "Husker", "Starbuck"];

    addItems.forEach((item) => SLL.insertLast(item))
    SLL.insertLast("Tauhida")
    SLL.remove("Squirrel")


    return SLL.find("Squirrel")

    
}

console.log(main())