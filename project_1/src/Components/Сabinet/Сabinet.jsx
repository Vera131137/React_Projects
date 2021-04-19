import React from 'react';
import classes from './Cabinet.module.css';
import Robot from './icon.svg';
import Productivity from './Productivity/Productivity';
import Recommend from './Recommend/Recommend';
import News from './News/News';
import Meetings from './Meetings/Meetings';

const Cabinet = () => {
 return <div className={classes.cabinet}>
    <div className={classes.container}>
        <span className={classes.title}>
        Кабинет личной эффективности
        </span>
    </div>
    <div className={classes.container}>
        <div className={classes.icon}>
            <img src={Robot} alt="Logo" />
        </div>    
        <div className={classes.block}>
            <Productivity />
            <Recommend />     
        <div className={classes.block2}>
            <Meetings />
            <News />
        </div> 
        </div>
    </div>
</div>

}

export default Cabinet;

