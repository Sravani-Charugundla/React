// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import { ReactDOM } from 'react';
// import Todo from "./components/Todo";
import React from 'react';
import { render } from 'react-dom';
// import Todo from "./components/Todo";
import { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value, }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Enter name
        <input type="text" name="name" value={inputs.name || ""} onChange={handleChange} />
      </label>
      <label>
        Enter your age:
        <input type="text" name="age" value={inputs.age || ""} onChange={handleChange} />
      </label>
      <label>
      Enter your school:
        <input type="text" name="school" value={inputs.school || ""} onChange={handleChange} />
      </label>
      <label>
        Enter class studying in:
        <input type="text" name="class" value={inputs.class|| ""} onChange = {handleChange}/>
      </label>
      <button type="submit">Submit</button>
    </form>

    <h1>UserName:{inputs.name}</h1>
    <h1>Age:{inputs.age}</h1>
    <h1>Educational Institutuion:{inputs.school}</h1>
    <h1>studying in:{inputs.class}</h1>
    </div>
  );
}

render(<App />, document.getElementById("root"));
export default App;


// class App extends React.Component {
//   render() {
//     return (
      
//       <div>
//         <h1>Hello {this.props.user}</h1>
//         <h2>Your inside parent class</h2>
//         <Child name = "Sravani" userId="5555"/>
//         <h3>Welcome to my page</h3>
//       </div>
//     );
//   }
// }

// class Child extends React.Component{
//   render(){
    
//     return(
      
//       <div>
//       <h1>
//         Hello,{this.props.name}
//       </h1>
//       <h2>Your inside child component</h2>
//       <h2>your user id is {this.props.userId}</h2>
//       <form>
//         <label>
//           Enter your name
//         </label>
//         <input type = "text"/>
//       </form>
//     </div>
//     );
//   }
// }

// render(
// <App/>, document.getElementById("root"));

// // ... rest of the code ...




// ... rest of the code ...

// function App() {
//   return (
//     <ul
//     role="list"
//     className="todo-list stack-large stack-exception"
//     aria-labelledby="list-heading"
//     >
//       <Todo/>
//       <Todo/>
//       <Todo/>
//     </ul>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
