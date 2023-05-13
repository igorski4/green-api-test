import React from "react";
import s from "./Message.module.scss";
import clsx from "clsx";

export const Message = ({ text, receive, send }) => {
  return (
    <div className={clsx(s.message, { [s.receive]: receive }, { [s.send]: send })}>
      <p className={clsx(s.text, { [s.text_receive]: receive }, { [s.text_send]: send })}>{text}</p>
    </div>
  );
};
