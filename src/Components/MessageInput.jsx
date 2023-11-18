function MessageInput() {
  return (
    <div className="w-full p-4 flex items-center gap-3">
      <input
        className="h-[40px] caret-purple-600 px-3 flex-grow bg-slate-200"
        type="text"
        placeholder="Type your message here..."
      />
      <button className="bg-purple-400 h-[40px] px-4 flex-shrink-0 rounded text-lg">
        Send
      </button>
    </div>
  );
}

export default MessageInput;
