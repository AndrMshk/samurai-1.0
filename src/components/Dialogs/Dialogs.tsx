import React from 'react';
import style from './Dialogs.module.css';
import { MessageItem } from './Massage/Message';
import { DialogItem } from './DialogItem/Dialog';
import { DialogItemPropsType, MessageItemPropsType, MessageStateType } from '../../Redux/store';
import { AddMessage } from './AddMassage';
import { Redirect } from 'react-router-dom';

type DialogsPropsType = {
  dialogs: MessageStateType
  addMessage: () => void
  onMessageChange: (newText: string) => void
  isAuth: boolean
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

  if (!props.isAuth) return <Redirect to={'/login'}/>

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        Names
        {props.dialogs.dialogsData.map((d: DialogItemPropsType) => (
          <DialogItem
            key={d.id}
            name={d.name}
            id={d.id}
          />),
        )}
      </div>
      <div className={style.messages}>
        Massages
        {props.dialogs.messagesData.map((m: MessageItemPropsType) => (
          <MessageItem
            key={m.id}
            message={m.message}
          />),
        )}
        <AddMessage
          newMessage={props.dialogs.newMessageBody}
          addMessage={props.addMessage}
          onMessageChange={props.onMessageChange}
        />
      </div>

    </div>
  );
};