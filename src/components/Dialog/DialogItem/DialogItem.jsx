import React from 'react';
import s from './../Dialog.module.css';
import { NavLink } from 'react-router-dom';

// Add links for users
const DialogItem = (props) => {
  return (
    <div>
      <NavLink to={'/dialog/' + props.id} className={s.dialog_item + ' ' + s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
