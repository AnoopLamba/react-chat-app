import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import RightSideView from "./Components/RightSideView";

function App() {
  const router = createBrowserRouter([
    {
      path: "/react-chat-app",
      element: <Sidebar />,
      children: [
        {
          path: ":id",
          element: <RightSideView />,
        },
      ],
    },
  ]);

  return (
    <div className="App font-mono flex">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
