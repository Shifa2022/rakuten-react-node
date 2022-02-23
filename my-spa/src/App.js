
import './App.css';
import ViewCourses from './components/ViewCourses';
import AddCourse from './components/AddCourse';

function App() {
  return (
    <div className="container">
      <AddCourse></AddCourse>
      <hr/>
      <ViewCourses></ViewCourses>
    </div>
  );
}

export default App;
