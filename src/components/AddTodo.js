import React from 'react'

export default class AddTodo extends React.Component {
    state = {
        title: ''
    };

    handleChange =(e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    };

    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input
                    style={{flex: '10', padding: '5px'}}
                    type={"text"}
                    name={"title"}
                    placeholder={"Add Todo..."}
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <input
                    type={"submit"}
                    value={"Submit"}
                    className={"btn"}
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}
