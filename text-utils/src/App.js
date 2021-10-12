import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
   <>
   <Router>
   <Navbar title="textAnalyser" about="About textUtils" contact="Contact for more info"/>
  <Switch>
          <Route path="/about">
            <About title="About textAnalyzer" decs="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
             software like Aldus PageMaker including versions of Lorem Ipsum" button="btn btn-default" buttonTitle="Subscribe for more details"/>
            <About title="About Our Culture" decs="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
             with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." button="btn btn-default" buttonTitle="more cultural details here"/>
            <About title="Our mission" decs="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" button="btn btn-default" buttonTitle="Download"/>
             <About title="trail" decs="donno Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum" button="btn btn-default" buttonTitle="for more info"/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
          <Form desc="Write the text to analyze"/>
          </Route>
          
        </Switch>
  </Router>
   </>
  
  );
}

export default App;
