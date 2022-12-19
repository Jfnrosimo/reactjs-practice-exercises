//Css
import "./App.css";

//Import practice components
import SearchFilter from "./practiceComponents/SearchFilter";
import Counter from "./practiceComponents/Counter";

const App = () => {
  return (
    <div className="app">
      <SearchFilter />
      <Counter />
    </div>
  );
};

export default App;
