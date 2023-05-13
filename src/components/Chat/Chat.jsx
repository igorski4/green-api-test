import React, { useState } from "react";
import s from "./Chat.module.scss";
import { fetcherPost } from "../../api/fetchers";
import { Message } from "./Message/Message";
import { v4 as uuidv4 } from "uuid";

export const Chat = ({ tempContact, idInstance, apiTokenInstance, messages, setMessages }) => {
  const [input, setInput] = useState("");

  const url = {
    idInstance,
    apiTokenInstance,
  };

  const data = {
    chatId: `${tempContact}@c.us`,
    message: input,
  };

  return (
    <div className={s.wrapper}>
      <div className={s.chat}>
        <div className={s.chatarea}>
          {messages
            .filter((el) => el.tempContact === tempContact)
            .map((el) => (
              <Message key={uuidv4()} text={el.message} receive={el.state === "receive"} send={el.state === "send"} />
            ))}
        </div>
        <div className={s.input_wrapper}>
          <textarea
            className={s.textarea}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            className={s.button}
            onClick={() => {
              fetcherPost({ url, data });
              setMessages([...messages, { id: uuidv4(), message: input, state: "send", tempContact }]);
              setInput("");
            }}
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};
