import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// 属性验证
const propTypes = {
    onClick: PropTypes.func
};

function CreateBar({ onClick }) {
    return (
        <a href="#" onClick={onClick} className="list-group-item create-bar-component">
            创建新的文章
        </a>
    )
}

// 添加验证
CreateBar.propTypes = propTypes;

// 导出组件
export default CreateBar;