function ConversationCard(props) {
  const { chat } = props;
  return (
    <div className="ConversationCard w-full flex items-center justify-start gap-2 cursor-pointer hover:bg-purple-200">
      {/* card img */}
      <div className=" w-12 h-12 rounded-full">
        <img
          className=" object-cover w-full h-full rounded-full"
          src={chat.userAvatar}
          alt="avatar icon"
        />
      </div>

      {/* card text area */}
      <div className="flex flex-col gap-1 items-start justify-center">
        <span className="text-black">{chat.userName}</span>
        <span className="text-gray-400">Frontend Developer</span>
      </div>
    </div>
  );
}

export default ConversationCard;
