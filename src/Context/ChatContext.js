import { createContext, useContext, useState } from "react";

// create context
var ChatContext = createContext();

// use context
export var useChatValue = () => {
  return useContext(ChatContext);
};

// context provider
export default function ChatContextProvider(props) {
  const [conversationArray, setConversationArray] = useState([]);

  return (
    <ChatContext.Provider
      value={{
        conversationArray,
        setConversationArray,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
}
