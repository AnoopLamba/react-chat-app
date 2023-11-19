import { useState } from "react";

function MessageInput(props) {
  const { handleMessageSend } = props;
  const [messageInput, setMessageInput] = useState("");

  // function to handle form submits
  const handleOnSumbit = (e, messageInput) => {
    e.preventDefault();
    if (messageInput.trim() !== "") {
      handleMessageSend(messageInput.trim());
      setMessageInput("");
    }
  };

  return (
    <form
      onSubmit={(e) => handleOnSumbit(e, messageInput)}
      className="w-full p-4 flex items-center gap-3"
    >
      <input
        id="messageInput"
        className="h-[40px] caret-purple-600 px-3 flex-grow bg-slate-200"
        type="text"
        placeholder="Type your message here..."
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <button
        className="bg-purple-400 h-[40px] px-4 flex-shrink-0 rounded text-lg"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

export default MessageInput;
