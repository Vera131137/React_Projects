import React from 'react';
import classes from './Search.module.css';
import loupe from './loupe.svg'; 

const Search = () => {
    return <div className={classes.search}>
        <div className={classes.container}>
            <div className={classes.title}>
                <span>Поиск клиентов</span>
            </div>
            <div className={classes.ref}>
                <a className={classes.link}>Расширенный поиск</a>
            </div>
        </div>
        <div className={classes.container} >
            <input type="text" placeholder="Серия и номер документа" className={classes.input_search} />
            <img src={loupe} alt="Logo" className={classes.loupe}/>
        </div>     
    </div>
}

export default Search;

