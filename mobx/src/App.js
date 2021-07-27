import Count from './Count'
import ToDo from './ToDo'
import classes from './App.module.css'
const App = () => {
    return (
        <div className={classes.wrapper}>
            <Count />
            <ToDo />
        </div>
    )
}
export default App
