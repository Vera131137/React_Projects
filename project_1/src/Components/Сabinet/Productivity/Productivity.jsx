import React from 'react';
import classes from './Productivity.module.css';
import Graphic from './icon.svg';

const Productivity = () => {
    return <div className={classes.productivity}>
       <div className={classes.container}>
            <span className={classes.title}>Продуктивность</span>
            <span className={classes.text1}>На март</span>
            <div className={classes.icon}>
                <img src={Graphic} alt="Logo" />
            </div>
       </div>
       <div className={classes.container}>
           <span className={classes.text2}>Ваша 0,69</span>
           <span className={classes.text3}>Кластер 0,6</span>
           <span className={classes.text4}>Коэфф. личной эффективности</span>
           <span className={classes.title}>1,25</span>
       </div>
</div>
}

export default Productivity;

