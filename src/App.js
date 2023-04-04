import "./App.css";
import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="App">
      <h1>WebShots</h1>
      <p>
        An Web app for getting pictures of websites using &ensp;
        <a href="https://www.exponentialhost.com/marketplace/website-screenshot-api">
          Exponential API
        </a>
      </p>
      <p>
        Get Your API Key{" "}
        <a href="https://www.exponentialhost.com/my-apps">Here.</a>
      </p>
      <p>
        Source Code -{" "}
        <a href="https://github.com/FrankYChills/WebShotss">Github</a>
      </p>
      <InputForm />
    </div>
  );
}

export default App;
