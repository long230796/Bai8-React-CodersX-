import React, {Component} from 'react';

class TableData extends Component {
    render() {
        return (
            <tr>
                {this.props.datas.map((item) => <td>{item}</td>)}
            </tr>
        )
    }
}

export default TableData