import { useParams } from "react-router-dom";
import ConversationArea from "./ConversationArea";
import MessageInput from "./MessageInput";
import { useChatValue } from "../Context/ChatContext";

function RightSideView() {
  const { chatData, setChatData } = useChatValue();
  const { id } = useParams();
  var chat = chatData.find((item) => item.userId === parseInt(id));

  // function to handle message send button
  const handleMessageSend = (messageInput) => {
    setChatData((prevChatData) =>
      prevChatData.map((chat) =>
        chat.userId === parseInt(id)
          ? {
              ...chat,
              userShow: true,
              userMessages: [
                ...chat.userMessages,
                {
                  message: messageInput,
                  messageType: "send",
                },
              ],
            }
          : chat
      )
    );
  };

  return (
    <>
      {!chat ? null : (
        <div className="w-full h-screen flex flex-col">
          {/* name and image bar */}
          <div className="bg-slate-200 p-2 flex-shrink-0">
            <div className="flex items-center justify-start gap-4 cursor-pointer">
              {/* circular avatar */}
              <div className=" w-10 h-10 rounded-full">
                <img
                  className=" object-cover w-full h-full rounded-full"
                  src={chat.userAvatar}
                  alt="avatar icon"
                />
              </div>

              {/* name text */}
              <span className="text-black text-lg">{chat.userName}</span>
            </div>
          </div>

          {/* Conversation Area */}
          <ConversationArea id={id} />

          {/* message input */}
          <MessageInput handleMessageSend={handleMessageSend} />
        </div>
      )}
    </>
  );
}

export default RightSideView;
