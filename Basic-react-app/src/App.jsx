import './App.css'
import ProductTab from './ProductTab'
import ProductTab1 from './ProductTab1'
import Button from './button'
import MsgTab from './MsgTab'
import Form from './Event'
import Counter from "./Counter"
import LikeButton from './LikeButton'
import Form1 from './Form'
import CommentsForm from './CommentsForm'
import Joker from './Joker'
function App() {
  return (
    <> {/*we can't directly return more than one entity/element so we need to use either "<></>" or "<div></div>" or something else.*/}
      {/* <ProductTab /> */}
      {/* <ProductTab1 /> */}
      <Button />
      <MsgTab />
      <Form/>
      <Counter/>
      <LikeButton/>
      <Form1/>
      <CommentsForm/>
      <Joker/>
      <h2>Rajeev Gupta</h2>
      <button>This is a button</button>
    </>
  );
}

export default App;
