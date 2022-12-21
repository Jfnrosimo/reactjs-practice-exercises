//Css
import "./App.css";

//Import practice components
import SearchFilter from "./practiceComponents/SearchFilter";
import Counter from "./practiceComponents/Counter";
import DisplayList from "./practiceComponents/DisplayList";
import Slider from "./practiceComponents/slider/Slider";
import LoginApp from "./practiceComponents/loginForm/LoginApp";

const App = () => {
  return (
    <div className="app">
      <SearchFilter />
      <Counter />
      <DisplayList />
      <Slider />
      <LoginApp />
    </div>
  );
};

export default App;
