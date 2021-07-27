import classes from './ToDo.module.css'
import { observer } from 'mobx-react-lite'
import React from 'react'
import todo from './store/todo'

const ToDo = observer(() => {
    return (
        <div className={classes.wrapper}>
            <button onClick={() => todo.fetchToDo()}>Get Todos!</button>
            {todo.todos.map(el => (
                <div className={classes.todo} key={el.id}>
                    <input type="checkbox" checked={el.completed} onClick={() => todo.completedTodo(el.id)}/>
                    {el.title}
                    <button style={{marginLeft:"5px"}} onClick={() => todo.removeTodo(el.id)}>X</button>
                </div>
            ))}
        </div>
    )
})

export default ToDo