import React from 'react';
import classes from './Recommend.module.css';
import Todo from './todo.svg';

const Recommend = () => {
    return <div className={classes.recommend}>
       <div className={classes.container}>
            <span className={classes.title}>Рекомендации</span>
            <span className={classes.text1}>15 - 19 Марта</span>
            <div className={classes.icon}>
                <img src={Todo} alt="Logo" />
            </div>
       </div>
       <div className={classes.container}>
           <span className={classes.text2}>Всего</span>
           <span className={classes.text3}>Новых</span>
           <span className={classes.text4}>Просрочено</span>
       </div>
	   <div className={classes.container}>
           <span className={classes.text5}>11</span>
           <span className={classes.text6}>8</span>
           <span className={classes.text7}>6</span>
       </div>
</div>
}

export default Recommend;



