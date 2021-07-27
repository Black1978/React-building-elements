
import { observer } from 'mobx-react-lite'
import classes from './Count.module.css'
import Counter from './store/index'


const Count = observer(() => {
    return (
        <div className={classes.app}>
            <div style={{ fontSize: '5em' }} className={classes.item}>
                {Counter.total}
            </div>
            <div style={{ display: 'flex' }} className={classes.item}>
                <button className={`${classes.buttons} ${classes.item}`} onClick={() => Counter.increment()}>Инкремент</button>
                <button className={`${classes.buttons} ${classes.item}`} onClick={() => Counter.decrement()}>Декримент</button>
            </div>
        </div>
    )
}
)
export default Count
