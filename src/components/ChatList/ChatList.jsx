import React from "react";
import s from "./ChatList.module.scss";

export const ChatList = ({ children }) => {
  return <div className={s.chat_list}>{children}</div>;
};
