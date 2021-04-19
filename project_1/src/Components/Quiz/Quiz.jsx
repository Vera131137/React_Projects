import React from 'react';
import classes from './Quiz.module.css';

const Quiz = () => {
    return <div className={classes.quiz}>
        <div className={classes.container}>
           <div className={classes.title}>
               <span>Опросы</span>
           </div>
       </div>
       <div className={classes.container}>
           <div className={classes.text}>
               <span>Функционал в разработке</span>
           </div> 
       </div>
   </div>
    }

export default Quiz;