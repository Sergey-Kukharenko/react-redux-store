import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchPhoneById} from '../../actions';
import {getPhoneById} from '../../selectors';
import {newObj, sorObj, compose} from "../../components/utils";

class Phone extends Component {

    componentDidMount() {
        const phoneId = this.props.match.params.id;
        this.props.fetchPhoneById(phoneId);
    }

    renderFields() {
        const {phone} = this.props;

        const arrayFields = ['cpu', 'camera', 'size', 'weight', 'display', 'battery', 'memory'];

        const columnFields = compose(
            sorObj,
            newObj(arrayFields)
        )(phone);

        return columnFields.map(([key, value]) => (
            <div className="column" key={key}>
                <div className="ab-details-title">
                    <p>{key}</p>
                </div>
                <div className="ab-details-info">
                    {value}
                </div>
            </div>
        ))
    }

    renderContent() {
        const {phone} = this.props;
        return (
            <div className="thumbnail">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={phone.image}
                            className="img-thumbnail"
                            alt={phone.name}/>
                    </div>
                    <div className="col-md-6">
                        {this.renderFields()}
                    </div>
                </div>
                <div className="caption-full">
                    <h4 className="pull-right">${phone.price}</h4>
                    <h4>{phone.name}</h4>
                    <p>{phone.description}</p>
                </div>
            </div>
        )
    }

    renderSidebar() {
        return (
            <div>Sidebar</div>
        )
    }

    render() {
        const {phone} = this.props;
        return (
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            {phone && this.renderContent()}
                        </div>
                        <div className='col-md-3'>
                            {phone && this.renderSidebar()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        phone: getPhoneById(state, state.phonePage.id)
    }
};

const mapDispatchToProps = {
    fetchPhoneById
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone)