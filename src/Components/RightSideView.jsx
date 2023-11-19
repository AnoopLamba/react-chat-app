import { useParams } from "react-router-dom";
import ConversationArea from "./ConversationArea";
import MessageInput from "./MessageInput";

function RightSideView() {
  const { id } = useParams();

  return (
    <div className="w-full h-screen flex flex-col">
      {/* name and image bar */}
      <div className="bg-slate-200 p-2 flex-shrink-0">
        <div className="flex items-center justify-start gap-4 cursor-pointer">
          {/* circular avatar */}
          <div className=" w-10 h-10 rounded-full">
            <img
              className=" object-cover w-full h-full rounded-full"
              src="/img/useravatar.jpg"
              alt="avatar icon"
            />
          </div>

          {/* name text */}
          <span className="text-black text-lg">Anoop Lamba</span>
        </div>
      </div>

      {/* Conversation Area */}
      <ConversationArea id={id} />

      {/* message input */}
      <MessageInput />
    </div>
  );
}

export default RightSideView;
