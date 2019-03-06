import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    hobby: PropTypes.string
};

class Hobby extends Component {
    render() {
        return (
            <li>{this.props.hobby}</li>
        )
    }
}

Hobby.propTypes = propTypes;

export default Hobby;