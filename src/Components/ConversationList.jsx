import { useEffect } from "react";
import { useChatValue } from "../Context/ChatContext";
import ConversationCard from "./ConversationCard";
import { NavLink } from "react-router-dom";

function ConversationList() {
  const { chatData, conversationArray, setConversationArray } = useChatValue();

  // useEffect to populate conversation array
  useEffect(() => {
    console.log("useEffect of ConversationList");

    let modifiedArray = chatData.filter((chat) => chat.userShow === true);
    setConversationArray(modifiedArray);
  }, [chatData]);

  const handleOnCardClick = () => {
    document.getElementById("messageInput").focus();
  };

  return (
    <div className="ConversationList w-full p-2 bg-slate-200 flex flex-col gap-2 items-center justify-start overflow-y-auto">
      {conversationArray.map((chat, index) => (
        <NavLink onClick={handleOnCardClick} to={`/${chat.userId}`} key={index}>
          <ConversationCard chat={chat} />
        </NavLink>
      ))}
    </div>
  );
}

export default ConversationList;
