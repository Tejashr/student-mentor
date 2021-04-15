import './App.css';
import Sidebar from './sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mentor from './mentor';
import Student from "./student";
import Viewstudents from './viewstudents';
import Viewmentor from './viewmentor';

function App() {

  // let [mentor, setMentor] = useState([]);

  // useEffect(async () => {
  //   let users = await axios.get("http://localhost:8080/batch");
  //   setUserlist(users.data);
  // }, [])

  return (
    <>
      <Router>
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div class="container-fluid">
            <Switch>
              <Route path="/student" component={Student} exact />
              <Route path="/mentor" component={Mentor} exact />
              <Route path="/viewstudents/:id" component={Viewstudents} exact />
              <Route path="/viewmentor" component={Viewmentor} exact />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
