import logo from "./logo.svg";
import "./App.css";
import { Amplify, API } from "aws-amplify";

function App() {
  const apiName = "transformersAPI";
  const path = "/gpt2";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = formData.get("name");
    const append = data.split(" ").join("+");
    console.log(append);
    const myInit = {
      body: { data },
      response: true,
    };
    // send data to amplify api and get response
    API.post(apiName, `${path}/${append}`, myInit)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
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
