import React from "react";
import s from "./TextField.module.scss";

export const TextField = ({ textLabel, value, handler, type }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.label}>{textLabel}</p>
      <input value={value} onChange={(e) => handler(e.target.value)} className={s.input} type={type} />
    </div>
  );
};
