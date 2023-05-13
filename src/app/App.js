import React, { useEffect, useState } from "react";
import { Container } from "../components/Container/Container";
import { ChatList } from "../components/ChatList/ChatList";
import { Chat } from "../components/Chat/Chat";
import "./global/global.scss";
import { Modal } from "../components/Modal/Modal";
import { ChatListItem } from "../components/ChatList/ChatListItem/ChatListItem";
import { TextField } from "../components/TextFiled/TextField";
import { Button } from "../components/Button/Button";
import { fetcherGet } from "../api/fetchers";
import { v4 as uuidv4 } from "uuid";

export const App = () => {
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  const [input, setInput] = useState("");
  const [tempContact, setTempContact] = useState("");

  const [contacts, setContacts] = useState([]);

  const [isModal, setIsModal] = useState(true);

  const handleClose = () => {
    setIsModal(!isModal);
  };

  const url = {
    idInstance,
    apiTokenInstance,
  };

  const [messages, setMessages] = useState([]);
  const [receiveMessage, setReceiveMessage] = useState({});

  const get = async () => {
    try {
      const res = await fetcherGet({ url });
      if (res) {
        setReceiveMessage({
          id: uuidv4(),
          message: res.body.messageData.textMessageData.textMessage,
          state: "receive",
          tempContact: res.body.senderData.sender.slice(0, -5),
        });
      }
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => get(), 5001);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setMessages([...messages, receiveMessage]);
  }, [receiveMessage]);

  return (
    <Container>
      {!!isModal && (
        <Modal
          handleClose={handleClose}
          idInstance={idInstance}
          setIdInstance={setIdInstance}
          apiTokenInstance={apiTokenInstance}
          setApiTokenInstance={setApiTokenInstance}
        />
      )}
      {!isModal && (
        <>
          <ChatList>
            <TextField type={"tel"} value={input} handler={setInput} />
            <Button
              text="Добавить контакт"
              onClick={() => {
                setContacts([...contacts, input]);
                setInput("");
              }}
            />
            {contacts.map((el, i) => (
              <ChatListItem
                key={i}
                className={contacts[i] === tempContact}
                tel={el}
                onClick={() => {
                  setTempContact(contacts[i]);
                }}
              />
            ))}
          </ChatList>
          <Chat
            tempContact={tempContact}
            idInstance={idInstance}
            apiTokenInstance={apiTokenInstance}
            messages={messages}
            setMessages={setMessages}
          ></Chat>
        </>
      )}
    </Container>
  );
};
