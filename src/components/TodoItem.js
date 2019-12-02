import React from 'react';
import PropTypes from "prop-types";

class TodoItem extends React.Component {

    style = {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px dotted #cccccc'
    };

    btnStyle = {
        background: '#ff0000',
        color: '#ffffff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
    };

    getStyle = () => {
        return this.props.todo.completed ?
            {textDecoration: 'line-through'} : null;
    };

    render(){
        const { id, title } = this.props.todo;
        return (
            <div style={this.style}>
                <p>
                    <input type={"checkbox"} onChange={this.props.markComplete.bind(this, id)} /> &nbsp;
                    <span style={this.getStyle()}>{title}</span>
                    <button style={this.btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoItem;
