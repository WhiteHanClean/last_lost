import React from 'react';
import Header from '../Header/Header';
import s from './FoundItem.module.css';



const FoundItem = () => {
    return (
        <>
        <Header />
        <div className={s.found__cont}>
        <div className={s.found} >
            <button className={s.found__btn}>Register item</button>
            <h4>Attach imge:</h4>
            <input className={s.found__select} type='file' />
            <h4>Select Category:</h4>
              <select className={s.found__select} name="dadada" id="">
                <option value="select">Select</option>
              </select>
            <h4>Date Found:</h4>
            <input className={s.found__select} id="date" type="date" value="DD/MM/YYYY"/>
            <h4>Add Geotag:</h4>
            <input placeholder='вставьте ссылку 2gis' className={s.found__select} type="text" />
            <h4>Description:</h4>
            <textarea className={s.found__select} name="Description" id="" cols="30" rows="10"></textarea>
            <h4>Picup Location:</h4>
            <input placeholder='вставьте ссылку 2gis' className={s.found__select} type="text" />
            <button className={s.found__btn_c}>Submit</button>
        </div>
        </div>
        </>
    );
};

export default FoundItem;