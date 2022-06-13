import './App.css';
import { BasicCard } from './components/Card';
import { BasicForm } from './components/Form';
import { BasicPageHeader } from './components/PageHeader';

function App() {

  return (
    <div className="App">
      <BasicPageHeader/>
      <BasicCard heading={'Who are you verifying?'}>
        <BasicForm/>
      </BasicCard>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
