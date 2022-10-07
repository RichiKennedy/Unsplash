import { MyContextProvider } from "./context/DataContext";
import Header from "./components/Header";
import Images from "./components/Images";

import Error from "./subComponents/Error";
import ApiError from "./subComponents/ApiError";

function App() {
  return (
    <MyContextProvider>
      <div className=" w-[100vw]">
        <Error />
        <ApiError />
        <Header />
        <Images />
      </div>
    </MyContextProvider>
  );
}

export default App;
