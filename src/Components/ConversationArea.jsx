import { chatdata } from "../Data/chatdata";

function ConversationArea(props) {
  const { id } = props;
  // id is getting passed as string
  var chat = chatdata.find((item) => item.userId === parseInt(id));

  return (
    <div className="h-full p-4 bg-purple-50">
      <ul className="flex flex-col gap-1">
        {!chat
          ? null
          : chat.userMessages.map((item, index) => (
              <li
                key={index}
                className={`flex items-center ${
                  item.message === "send" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[280px] inline-block px-2 py-1 ${
                    item.messageType === "send"
                      ? "bg-purple-400 ml-auto text-end rounded-s-md"
                      : "bg-blue-400 mr-auto rounded-e-md"
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
