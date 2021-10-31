import React, {Component} from 'react';

class TableHead extends Component {
    render() {
        return (
            <tr>
                {this.props.datas.map((item) => <th>{item}</th>)}
            </tr>
        )
    }
}

export default TableHead