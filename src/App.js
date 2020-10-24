import './App.css';
import { Home } from './components';
import { Sidebar } from './components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Education } from './components';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <div className="Sidebar"><Sidebar /></div>
          <div className="Content">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/education">
                <Education />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
