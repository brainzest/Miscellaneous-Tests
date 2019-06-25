import React from 'react';
import DataForm from './DataForm';

class Test3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    afterSubmit = (data) => {
        console.log('After submit is correctly running!', data);
    }

    render() {
        return (
            <div>
                <h1>Managing User Event</h1>
                <DataForm afterSubmit={this.afterSubmit} />
            </div>
        )
    }
}

export default Test3;