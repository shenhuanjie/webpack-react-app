import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 属性验证
const propTypes = {
    hobby: PropTypes.string
};

// 组件主体，这里是stateless function，所以直接就是一个函数
class ListItem extends Component {
    render() {
        // 返回JSX结构
        return (
            <li>{this.props.hobby}</li>
        )
    }
}

// 添加验证
ListItem.propTypes = propTypes;

// 导出组件
export default ListItem;