import { MyContextProvider } from "./context/DataContext";
import Header from "./components/Header";
import Images from "./components/Images";

function App() {
  return (
    <MyContextProvider>
      <div className=" w-[100vw]">
        <Header />
        <Images />
      </div>
    </MyContextProvider>
  );
}

export default App;
