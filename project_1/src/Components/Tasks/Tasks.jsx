import React from 'react';
import classes from './Tasks.module.css';

const Tasks = () => {
    return <div className={classes.tasks}>
       <div className={classes.container}>
           <div className={classes.title}>
               <span>Задачи</span>
           </div>
           <div className={classes.ref}>
               <a>Перейти к задачам</a>
           </div>
       </div>
       <div className={classes.container}>
           <div className={classes.text}>
                <span>В работе</span>
           </div> 
           <div className={classes.text}>
                <span>1</span>
           </div>
       </div>
       <div className={classes.container}>
           <div className={classes.text}>
                <span>Приостановленные</span>
           </div> 
           <div className={classes.text}>
                <span>99</span>
           </div>
       </div>
   </div>
}
export default Tasks;