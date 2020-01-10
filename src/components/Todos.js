import React, {Component} from 'react';
import Todoitems from './Todoitems';
import PropTypes from 'prop-types';

class Todos extends Component{

    render(){
        return this.props.todos.map((todo) => (
        //<h3>{ todo.title }</h3>
        <Todoitems key = {todo.id} todo = {todo} toggleComplete = {this.props.toggleComplete} delTodo = {this.props.delTodo} />
        ));
    }
}

Todos.propTypes = {
    todos : PropTypes.array.isRequired,
    toggleComplete : PropTypes.func.isRequired,
    delTodo : PropTypes.func.isRequired,
}

export default Todos;