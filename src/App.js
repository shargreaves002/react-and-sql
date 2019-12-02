import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from "./components/Todos";
import Header from "./components/layout/header";
import AddTodo from "./components/AddTodo";
import uuid from 'uuid';
import About from "./components/pages/About";

class App extends React.Component {
    state = {
      todos: [
          {
              id: uuid.v4(),
              title: 'Do something',
              completed: false
          },
          {
              id: uuid.v4(),
              title: 'Do something else',
              completed: false
          },
          {
              id: uuid.v4(),
              title: 'Do a third thing',
              completed: false
          }
      ]
    };

    // Toggle complete
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })});
    };

    delTodo = (id) => {
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    };

    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        };
        this.setState({todos: [...this.state.todos, newTodo]})
    };

    render(){
        return (
            <Router>
                <div className="App">
                    <div className={"container"}>
                        <Header/>
                        <Route exact path={'/'} render={props => (
                            <React.Fragment>
                                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                                <AddTodo addTodo={this.addTodo} />
                            </React.Fragment>
                        )} />
                        <Route path={'/about'} component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
