import React,{Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {deleteTask} from '../../actions/tasks';

class DeletedTasks extends Component {

    handleDelete = e => {
        const id = e.target.dataset.id;
        this.props.deleteTask(id);
    } 
    render(){
            return (
                this.props.data.map(t => 
                                
                    <Card key={t.id} className="mx-5" style={{ width: '35rem' }}>
                        <Card.Body>
                            <Card.Title>{t.text}</Card.Title>
                                <Button variant="secondary" className="px-4" onClick={this.handleDelete} data-id={t.id}>Restore</Button>
                        </Card.Body>
                   </Card>
            )
            )
        }

    }

const mapStateToProps = state => ({
    data: state.data.filter(t => t.deleted),
});

const mapDispatchToProps = dispatch => ({
    deleteTask: id => dispatch(deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeletedTasks);