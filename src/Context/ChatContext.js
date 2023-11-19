import { createContext, useContext, useState } from "react";
import { data } from "../Data/data";

// create context
var ChatContext = createContext();

// use context
export var useChatValue = () => {
  return useContext(ChatContext);
};

// context provider
export default function ChatContextProvider(props) {
  const [conversationArray, setConversationArray] = useState([]);
  const [chatData, setChatData] = useState(data);

  return (
    <ChatContext.Provider
      value={{
        conversationArray,
        setConversationArray,
        chatData,
        setChatData,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
}
