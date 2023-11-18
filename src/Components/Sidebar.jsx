import { Outlet } from "react-router-dom";
import ConversationList from "./ConversationList";
import { useEffect, useState } from "react";
import ConversationCard from "./ConversationCard";
import { chatdata } from "../Data/chatdata";

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultArr, setSearchResultArr] = useState([]);

  // to handle conversations search
  useEffect(() => {
    console.log("useEffect of sidebar");

    if (searchTerm !== "") {
      let modifiedArray = chatdata.filter((chat) =>
        chat.userName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResultArr(modifiedArray);
    } else {
      setSearchResultArr([]);
    }
  }, [searchTerm]);

  return (
    <>
      <div className="Sidebar w-[350px] h-screen p-4 flex flex-col items-center justify-start flex-shrink-0 gap-4 border-r border-slate-200 shadow-2xl">
        {/* search and search result */}
        <div className="w-full flex flex-col items-center justify-end relative">
          <input
            className="w-full bg-slate-200 px-2 py-1 caret-purple-600"
            onChange={(e) => setSearchTerm(e.target.value.trim())}
            type="text"
            placeholder="Search Contacts..."
          />

          {searchResultArr.length === 0 ? null : (
            <div className="absolute max-h-[350px] overflow-auto top-[34px] w-full p-2 bg-purple-200 flex flex-col gap-2 items-center justify-start overflow-y-auto shadow-2xl border-2 border-purple-300">
              {searchResultArr.map((chat, index) => (
                <ConversationCard key={index} chat={chat} />
              ))}
            </div>
          )}
        </div>

        <span className="w-full text-start text-lg font-bold tracking-wider">
          CONVERSATIONS
        </span>

        {/* conversation list */}
        <ConversationList />
      </div>
      <Outlet />
    </>
  );
}

export default Sidebar;
