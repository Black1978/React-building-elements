import { useDispatch, useSelector } from 'react-redux'
import classes from './App.module.css'
import { fetchCustomers } from './asyncActions/customers'
import {addCustomerAction, deleteCustomerAction} from './store/customersReducer'

function App() {
    const dispatch = useDispatch()
    const dataCash = useSelector((state) => state.cash.cash)
    const dataCustomers = useSelector((state) => state.customers.customers)

    const addCash = (data) => {
        dispatch({
            type: 'ADD_CASH',
            payload: data,
        })
    }
    const recieveCash = (data) => {
        dispatch({
            type: 'GET_CASH',
            payload: data,
        })
    }
    const addCustomer = (name) => {
        const customer = {
            name: name,
            id: new Date(),
        }
        dispatch(addCustomerAction(customer))
    }
    const deleteCustomer = (item) => {
        dispatch(deleteCustomerAction(item))
    }
    const addCustomersFromDatabase = () => {
        dispatch(fetchCustomers())
    }






    return (
        <div className={classes.app}>
            <div style={{ fontSize: '5em' }} className={classes.item}>
                {dataCash}
            </div>
            <div style={{ display: 'flex' }} className={classes.item}>
                <button
                    className={`${classes.buttons} ${classes.item}`}
                    onClick={() => {
                        return addCash(Number(prompt()))
                    }}
                >
                    Пополнить счёт
                </button>
                <button
                    className={`${classes.buttons} ${classes.item}`}
                    onClick={() => {
                        return recieveCash(Number(prompt()))
                    }}
                >
                    Снять со счёта
                </button>
                <button
                    className={`${classes.buttons} ${classes.item}`}
                    onClick={() => {
                        return addCustomer(prompt())
                    }}
                >
                    Добавить клиента
                </button>
                <button
                    className={`${classes.buttons} ${classes.item}`}
                    onClick={() => addCustomersFromDatabase()}
                >
                    Получить клиентов из базы
                </button>
            </div>
            <div style={{ fontSize: '5em' }} className={classes.item}>
                {dataCustomers.length > 0 ? (
                    dataCustomers.map((el) => {
                        return <div className={classes.customer} onClick={() => deleteCustomer(el)}> {el.name} </div>
                    })
                ) : (
                    <div>Клиенты отсутствуют!</div>
                )}
            </div>
        </div>
    )
}

export default App
