import { makeAutoObservable } from 'mobx'

class ToDo {
    todos = [
        { id: 1, title: 'Wake up!', completed: false },
        { id: 2, title: 'Go to the work', completed: false },
        { id: 3, title: 'Go to bad', completed: false }
    ]

    constructor() {
        makeAutoObservable(this)
    }
    addTodo(todo) {
        this.todos.push(todo)
    }
    removeTodo(id) {
        this.todos = this.todos.filter((el) => el.id !== id)
    }
    completedTodo(id) {
        this.todos = this.todos.map((el) =>
            id === el.id ? { ...el, completed: !el.completed } : el
        )
    }
    fetchToDo() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then(elements => this.todos = [...this.todos, ...elements])
    }
}

export default new ToDo()
