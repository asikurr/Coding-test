import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ImagePreview from './components/ImagePreview/ImagePreview';
import Home from './components/LandingPage/Home/Home';
import TShart from './components/TShart/TShart';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound';
import TopNav from './components/LandingPage/TopNav/TopNav';


function App() {
  return (
    <Router>
      <Switch>
       
        <Route exact path="/dragText">
          <TopNav/>
          <TShart />
        </Route>
        <Route exact path="/imgPreview">
          <TopNav />
          <ImagePreview />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
