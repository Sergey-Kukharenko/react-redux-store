import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchPhoneById} from '../../actions';

class Phone extends Component {

    componentDidMount() {
        const phoneId = this.props.match.params.id;
        this.props.fetchPhoneById(phoneId)
    }

    render() {
        return (
            <div>Phone</div>
        )
    }
}

const mapDispatchToProps = {
    fetchPhoneById
};

export default connect(null, mapDispatchToProps)(Phone)