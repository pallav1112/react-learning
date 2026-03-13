import './App.css';
import TestProfile from './childrenPropChallenge';
import PackingList from './conditionalRendering';
import Gallery from './chapter-2/usingStateVariable';
import Profile from './profile';
import List from './renderingList';
import ToDoList from './todoList';
import Form from './chapter-2/fixInputs';
import FeedbackForm from './chapter-2/fixCrash';
import RequestTracker from './chapter-2/fixRequestCounter';
import Scoreboard from './chapter-2/fixIncorrectStateUpdates';
import ShoppingCart from './chapter-2/fixArrayCount';

function App() {
  return (
    <>
      <ShoppingCart />
    </>
  );
}

export default App;
