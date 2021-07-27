import { makeAutoObservable } from 'mobx'

class Counter {
    count = 1
    timer = 60
    constructor() {
        makeAutoObservable(this)
    }
    increment() {
        this.count = this.count + 1
    }
    decrement() {
        this.count = this.count - 1
    }

    get total() {
        return `Count + total = `+ (this.count + this.timer)
    }
}
export default new Counter()
