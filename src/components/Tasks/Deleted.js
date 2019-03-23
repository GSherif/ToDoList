import React,{Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import {MyContext} from '../../App';

class DeletedTasks extends Component {

    deletedTaskId = (handleDelete) => (e) => {
        const did = e.target.dataset.id;
        handleDelete(did);
    }
    
    render(){
            return (
                <MyContext.Consumer>
                {
                value => (
                value.state.data.filter(t => (t.deleted)).map(t => 
                                
                    <Card key={t.id} className="mx-5" style={{ width: '35rem' }}>
                        <Card.Body>
                            <Card.Title>{t.text}</Card.Title>
                                <Button variant="secondary" className="px-4" onClick={this.deletedTaskId(value.handleDelete)} data-id={t.id}>Restore</Button>
                        </Card.Body>
                   </Card>
                )
                )
                }
                </MyContext.Consumer>
            )
        }

    }


export default DeletedTasks;