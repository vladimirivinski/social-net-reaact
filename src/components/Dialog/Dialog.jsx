import React from 'react';
import s from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';

const Dialog = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialog_item}>
        <DialogItem name='Nick' id='1' />
        <DialogItem name='Mike' id='2' />
        <DialogItem name='Alex' id='3' />
        <DialogItem name='Vladimir' id='4' />
        <DialogItem name='Jhoe' id='5' />
        <DialogItem name='Angela' id='6' />
      </div>
      <div className={s.messages}>
        <Messages message=' Hi Mike!' />
        <Messages message=' Wats UP!' />
        <Messages message=' WTF is going on?!' />
        <Messages message=' Nothing special)' />
      </div>
    </div>
  );
};

export default Dialog;
