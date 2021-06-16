import Menu from './Components/Menu';
import {Switch,Route} from 'react-router-dom';
import Home from './Components/Home'
import Guide from './Components/Guide'
import Page404 from './Components/Page404'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Menu/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/guide" component={Guide} />
          <Route path="" component={Page404} />
      </Switch>
    </>
  );
}

export default App;