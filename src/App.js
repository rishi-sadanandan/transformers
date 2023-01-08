import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = formData.get("name");
    console.log(data);
    // send data to amplify api and get response
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
