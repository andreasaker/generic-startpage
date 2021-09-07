import "./App.css";
import StartPage from "./pages/startPage";
import { data } from "./fakeData";

const App = () => {
  return (
    <div>
      <StartPage data={data} />
    </div>
  );
};

export default App;
