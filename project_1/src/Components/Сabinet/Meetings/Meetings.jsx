import React from 'react';
import classes from './Meetings.module.css';
import Calendar from './calendar.svg';

const Meetings = () => {
    return <div className={classes.meetings}>
       <div className={classes.container}>
           <div className={classes.title}>
               <span>Встречи</span>
           </div>
		   <div className={classes.icon}>
                <img src={Calendar} alt="Logo" />
            </div>
       </div>
       <div className={classes.container}>
           <div className={classes.text}>
                <span>Сегодня</span>
           </div> 
           <div className={classes.title}>
                <span>3</span>
           </div>
       </div>
       <div className={classes.container}>
           <div className={classes.text1}>
                <span>Завтра</span>
           </div> 
           <div className={classes.text2}>
                <span>0</span>
           </div>
       </div>
   </div>
}
export default Meetings;