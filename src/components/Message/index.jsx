import React, { useEffect, useState } from "react";
import bus from "../../utils/bus";

import { MessageContainer } from "./styles";

const Message = () => {
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    bus.addListener("flash", ({ message, type }) => {
      setVisibility(true);
      setMessage(message);
      setType(type);

      setTimeout(() => {
        setVisibility(false);
      }, 3000);
    });

    console.log(type);
  }, []);

  return (
    visibility && (
      // <div className={`${styles.message} ${styles[type]}`}>
      <MessageContainer variant={type}>{message}</MessageContainer>
      // </div>
    )
  );
};

export default Message;
