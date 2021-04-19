import React from 'react';
import classes from './Que.module.css';

const Que = () => {
 return <div className={classes.que}>
    <div className={classes.container}>
        <div className={classes.title}>
            <span>Очередь</span>
        </div>
        <div className={classes.ref}>
            <a>Пульт оператора</a>
        </div>
    </div>
    <div className={classes.container}>
        <div className={classes.text}>
            <span>Никого нет</span>
        </div> 
    </div>
</div>
}

export default Que;