import React from 'react';
import s from './Dialog.module.css';
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

const Messages = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  let users = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Max' },
    { id: 3, name: 'Nick' },
    { id: 4, name: 'Mike' },
  ];

  const messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'WTF' },
    { id: 3, message: 'Why' },
    { id: 4, message: 'No' },
    { id: 5, message: 'Bye' },
  ];

  // Mapping to the arrays
  let dialogElements = users.map((d) => <DialogItem name={d.name} id={d.id} />);

  let message = messages.map((m) => <Messages message={m.message} id={m.id} />);

  return (
    <div className={s.dialogs}>
      {/* add results of mapping */}
      <div className={s.dialog_item}>{dialogElements}</div>
      <div className={s.messages}>{message}</div>
    </div>
  );
};

export default Dialogs;
