import React from 'react';
import s from './Dialog.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
  // Mapping to the arrays
  let dialogElements = props.users.map((d) => <DialogItem name={d.name} id={d.id} />);

  let message = props.messages.map((m) => <Message message={m.message} id={m.id} />);

  return (
    <div className={s.dialogs}>
      {/* add results of mapping */}
      <div className={s.dialog_item}>{dialogElements}</div>
      <div className={s.messages}>{message}</div>
    </div>
  );
};

export default Dialogs;
