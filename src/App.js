//Css
import "./App.css";

//Import practice components
import SearchFilter from "./practiceComponents/SearchFilter";
import Counter from "./practiceComponents/Counter";
import DisplayList from "./practiceComponents/DisplayList";
import Slider from "./practiceComponents/slider/Slider";

const App = () => {
  return (
    <div className="app">
      <SearchFilter />
      <Counter />
      <DisplayList />
      <Slider />
    </div>
  );
};

export default App;
