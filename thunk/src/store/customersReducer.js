const ADD_CUSTOMER = 'ADD_CUSTOMER'
const DELETE_CUSTOMER = 'DELETE_CUSTOMER'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'


const defaultState = {
    customers: []
}

export const customersReduser = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.customer] }
        case DELETE_CUSTOMER:
            return {...state, customers: state.customers.filter(item => item.id !== action.id)}    
        default:
            return state
    }
}

export const addCustomerAction = (customer) => {
    return {type: ADD_CUSTOMER, customer}
}
export const deleteCustomerAction = (item) => ({
    type: DELETE_CUSTOMER,
    id: item.id
})
export const addManyCustomersActionCreator = (payload) => ({
    type: ADD_MANY_CUSTOMERS,
    payload
})