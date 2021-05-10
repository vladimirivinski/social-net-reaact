import React from 'react';
import s from './Dialog.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { messages, users } from './../../data/Dialogs/DialogData';

const Dialogs = () => {
  // Mapping to the arrays
  let dialogElements = users.map((d) => <DialogItem name={d.name} id={d.id} />);

  let message = messages.map((m) => <Message message={m.message} id={m.id} />);

  return (
    <div className={s.dialogs}>
      {/* add results of mapping */}
      <div className={s.dialog_item}>{dialogElements}</div>
      <div className={s.messages}>{message}</div>
    </div>
  );
};

export default Dialogs;
