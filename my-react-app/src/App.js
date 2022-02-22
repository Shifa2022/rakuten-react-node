
import './App.css';
import Message from './Message'
import Badge from './Badge';
import BadgeWithClass from './BadgeWithClass';
import Card from './Card';
import Dropdown from './components/Dropdown';


function App() {

  const cuisines = ['North Indian', 'South Indian', 'Mexican', 'Japanese']
  const courses = ['React', 'Angular', 'NodeJS', 'Spring']

  return (
  <div>
    <p>Simple text!</p>
    <Message/>
    <Badge caption="Inbox" count="10"/>
    <Badge caption="Sent" count="1"/>
    <BadgeWithClass caption="Spam" count="20233"/>
    <Dropdown caption="Select Cuisines" items={cuisines}/>
    <Dropdown caption="Select Courses" items={courses}/>
    {/* <Card title="React"/>
    <Card title="NodeJS"/> */}
  </div>
  );
}

export default App;
