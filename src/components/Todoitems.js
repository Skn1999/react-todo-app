import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todoitems extends Component {
    getStyle = () => {
        return {
            backgroundColor : "#f4f4f4",
            padding : "10px",
            borderBottom : "1px #ccc dotted",
            textDecoration : this.props.todo.completed ? "line-through" : "none"
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            
            <div style= {this.getStyle()}>
                <p>
                    <input type="checkbox" onChange = { this.props.toggleComplete.bind(this, id)}/> { ' '}
                    { title }

                    <button onClick = {this.props.delTodo.bind(this, id)} style={btnStyle} >x</button>
                </p>
            </div>
        )
    }
}

//propTypes
Todoitems.propTypes = {
    todo : PropTypes.object.isRequired,
    toggleComplete : PropTypes.func.isRequired,
    delTodo : PropTypes.func.isRequired,
}

//btnStyle
const btnStyle = {
    backgroundColor : "red",
    color : "white",
    padding : "5px 10px",
    border : "none",
    borderRadius : "5px",
    float : "right",
    cursor: "pointer"
}

export default Todoitems;
