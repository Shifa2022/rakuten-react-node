
import './App.css';
import Message from './Message'
import Badge from './Badge';
import BadgeWithClass from './BadgeWithClass';
import Card from './Card';


function App() {
  return (
  <div>
    <p>Simple text!</p>
    <Message/>
    <Badge caption="Inbox" count="10"/>
    <Badge caption="Sent" count="1"/>
    <BadgeWithClass caption="Spam" count="20233"/>
    <Card title="React"/>
    <Card title="NodeJS"/>
  </div>
  );
}

export default App;
