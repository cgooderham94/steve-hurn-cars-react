import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

import Home from './containers/Home/Home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <Switch>
        <Route component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
