import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import Signin from './components/Signin';
import Password from './components/Password';
import Username from './components/Username';
import SigninBtn from './components/SigninBtn';
import TableData from './components/TableData';
import TableHead from './components/TableHead';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  constructor() {
    super();
    this.todoItems = ["đi chơi", "code đồ án", "Đổ xăng"];

    this.tableRow = [
      {type: "header", data: ["Company", "Contact", "country"]},
      {type:"data", data: ["Alfreds Futterkiste", "Maria Anders", "Germany"]},
      {type:"data", data: ["Centro comercial Moctezuma", "Francisco Chang", "Mexico"]},
      {type:"data", data: ["Alfreds Futterkiste", "Maria Anders", "Germany"]}
    ]
  }

  render() {
    return (
      // <div className="App">
      //   {this.todoItems.map((item, index) => <TodoItem keys={index} title={item} />)}
      // </div>

      <table>
        {this.tableRow.map((item) => item.type === "header" && <TableHead datas={item.data} />)}      
        {this.tableRow.map((item) => item.type === "data" && <TableData datas={item.data} />)}      
      </table>

      
    );
  }
}


export default App;
