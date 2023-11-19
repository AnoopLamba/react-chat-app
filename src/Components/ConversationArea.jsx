import { useChatValue } from "../Context/ChatContext";

function ConversationArea(props) {
  var { chatData } = useChatValue();
  const { id } = props;
  var chat = chatData.find((item) => item.userId === parseInt(id));

  return (
    <div className="h-full p-3 bg-purple-50">
      <ul className="flex flex-col gap-1">
        {chat.userMessages.map((item, index) => (
          <li
            key={index}
            className={`flex items-center ${
              item.message === "send" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[280px] inline-block px-4 py-1 ${
                item.messageType === "send"
                  ? "bg-purple-400 ml-auto text-end rounded-s-full"
                  : "bg-blue-400 mr-auto rounded-e-full"
              }`}
            >
              {item.message}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConversationArea;
