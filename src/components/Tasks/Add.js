import React,{ Component} from 'react';
import {connect} from 'react-redux';
import uuidv4 from 'uuid/v4';
import {Form, FormControl, Button} from 'react-bootstrap';
import {addTask} from '../../actions/tasks';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

 class AddTask extends Component{

    state = {
        task: '',
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({text: value});
    }

    
    handleSubmit = (e) => {
        e.preventDefault(); 
        if(!this.state.text) return;
        const task = { text: this.state.text, completed: false, deleted: false, id: uuidv4()}
        this.props.addTask(task);
        this.setState({text: ''});
    }

    render(){
        return (<>
        <Form onSubmit={this.handleSubmit}>
            <FormControl  placeholder="Task Title" onChange={this.handleChange} value={this.state.text || ''}/>
            <Button type="submit" variant="primary">Add Task</Button>
        </Form>
       </>)
    }

}
 
const mapDispatchToProps = dispatch => ({
       addTask: data => dispatch(addTask(data)),
   });
  
export default connect(null, mapDispatchToProps)(AddTask);