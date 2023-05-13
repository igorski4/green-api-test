import React from "react";
import s from "./ChatListItem.module.scss";
import clsx from "clsx";

export const ChatListItem = ({ tel, onClick, className }) => {
  return (
    <div className={clsx(s.item, { [s.active_item]: className })} onClick={onClick}>
      <p>{tel}</p>
    </div>
  );
};
