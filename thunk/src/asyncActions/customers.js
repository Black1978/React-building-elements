import { addManyCustomersActionCreator } from '../store/customersReducer'

export const fetchCustomers = () => {
    return function (fn) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((responce) => fn(addManyCustomersActionCreator(responce)))
    }
}
