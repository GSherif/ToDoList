import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { Form, FormControl, Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { MyContext } from '../../App';

class AddTask extends Component {

    state = {
        task: '',
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ text: value });
    }


    handleSubmit = addTask => (e) => {
        e.preventDefault();
        if (!this.state.text) return;
        const task = { text: this.state.text, completed: false, deleted: false, id: uuidv4() }
        addTask(task);
        this.setState({ text: '' });
    }

    render() {
        return (
            <MyContext.Consumer>
                {
                    value => (
                        <Form onSubmit={this.handleSubmit(value.addTask)}>
                            <FormControl placeholder="Task Title" onChange={this.handleChange} value={this.state.text || ''} />
                            <Button type="submit" variant="primary">Add Task</Button>
                        </Form>
                    )
                }
            </MyContext.Consumer>)
    }

}
export default AddTask;