import './App.css';
import HeaderContainer from './HeaderContainer';
//import {Button} from "@material-ui/core";

function App() {
  return (
    <div>
      <HeaderContainer/>
    </div>
  );
}


export default App;

/*
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
      </header>
    </div>


Coding questions:
	1. Install some libraries! https://material-ui.com/getting-started/installation/
	2. Check out the documentation for AppBar: https://material-ui.com/components/app-bar/
	3. Import AppBar and Toolbar from @material-ui/core at the top of a new file called Header.tsx
	4. Put an AppBar in your code. (I recommend copying the code from the documentation)
	5. Add additional imports based on the items used between tags (such as: <Typography>)
	6. Import and use your Header file in App.js.
Explain to me what you think will happen when you run the code. Then run your code.
*/