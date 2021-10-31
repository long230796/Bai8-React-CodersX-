import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.keys}</p> <h2>{this.props.title}</h2>
                
            </div>
        );
    }
}

export default TodoItem;