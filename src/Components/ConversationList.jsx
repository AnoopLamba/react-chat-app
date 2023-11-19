import { useEffect } from "react";
import { useChatValue } from "../Context/ChatContext";
import { chatdata } from "../Data/chatdata";
import ConversationCard from "./ConversationCard";
import { NavLink } from "react-router-dom";

function ConversationList() {
  const { conversationArray, setConversationArray } = useChatValue();

  // useEffect to populate conversation array
  useEffect(() => {
    console.log("useEffect of ConversationList");

    populateConversationArray();
  }, []);

  // function to populate the array to show chats
  const populateConversationArray = () => {
    let modifiedArray = chatdata.filter((chat) => chat.userShow === true);
    setConversationArray(modifiedArray);
  };

  return (
    <div className="ConversationList w-full p-2 bg-slate-200 flex flex-col gap-2 items-center justify-start overflow-y-auto">
      {conversationArray.map((chat, index) => (
        <NavLink to={`/${chat.userId}`} key={index}>
          <ConversationCard chat={chat} />
        </NavLink>
      ))}
    </div>
  );
}

export default ConversationList;
