import React from "react";
import s from "./Button.module.scss";

export const Button = ({ onClick, text }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {text}
    </button>
  );
};
