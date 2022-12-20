//Css
import "./App.css";

//Import practice components
import SearchFilter from "./practiceComponents/SearchFilter";
import Counter from "./practiceComponents/Counter";
import DisplayList from "./practiceComponents/DisplayList";

const App = () => {
  return (
    <div className="app">
      <SearchFilter />
      <Counter />
      <DisplayList />
    </div>
  );
};

export default App;
