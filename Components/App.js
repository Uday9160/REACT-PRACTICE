import "./App.css";
import CounterComponent from "./components/CounterComponent";
import FilterComponent from "./components/FilterComponent";
import DisplayListComponent from "./components/DisplayListComponent";
import AccordianComponent from "./components/AccordianComponent";
import ImageSlider from "./components/ImageSlider";
import CheckBoxList from "./components/CheckBoxType";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      {/*<h1>Basic Filter</h1>
      <FilterComponent /> */}
      {/* <h1>Counter</h1>
      <CounterComponent /> */}
      {/* <h1>Display a list in React</h1>
      <DisplayListComponent /> */}
      {/* <h1>Accordion in React</h1>
      <AccordianComponent /> */}
      {/* <h1>Image Slider</h1>
      <ImageSlider /> */}
      {/* <h1>Checklist in React</h1>
      <CheckBoxList /> */}
      <h1>LoginForm</h1>
      <LoginForm />
    </div>
  );
}

export default App;
