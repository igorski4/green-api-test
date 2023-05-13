import React, { useLayoutEffect } from "react";
import s from "./Modal.module.scss";
import { TextField } from "../TextFiled/TextField";
import { Button } from "../Button/Button";

export const Modal = ({ handleClose, idInstance, setIdInstance, apiTokenInstance, setApiTokenInstance }) => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, []);

  return (
    <div className={s.shadow}>
      <div className={s.modal}>
        <TextField value={idInstance} handler={setIdInstance} textLabel={"idInstance"} type={"text"} />
        <TextField
          value={apiTokenInstance}
          handler={setApiTokenInstance}
          textLabel={"apiTokenInstance"}
          type={"text"}
        />
        <div className={s.wrapper}>
          <Button onClick={handleClose} text={"Подтвердить ввод"} />
        </div>
      </div>
    </div>
  );
};
