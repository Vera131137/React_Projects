import React from 'react';
import classes from './News.module.css';
import List from './list.svg';

const News = () => {
    return <div className={classes.news}>
       <div className={classes.container}>
           <div className={classes.title}>
               <span>Новости</span>
           </div>
		   <div className={classes.icon}>
                <img src={List} alt="Logo" />
            </div>
       </div>
       <div className={classes.container}>
           <div className={classes.text1}>
                <span>Не прочитано</span>
           </div> 
       </div>
       <div className={classes.container}>
           <div className={classes.title}>
                <span>2</span>
           </div> 
       </div>
   </div>
}
export default News;