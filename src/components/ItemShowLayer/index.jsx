import React from 'react';
import PropTypes from 'prop-types';
import Marked from 'marked';

// 属性验证
const propTypes = {
    item: PropTypes.object,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
};

function ItemShowLayer({ item, onEdit, onDelete }) {
    // 如果没有传入Item，直接返回一些静态提示
    if (!item || !item.id) {
        return (
            <div className="col-md-8 item-show-layer-component">
                <div className="no-select">请选择左侧列表里面的文章</div>
            </div>
        );
    }
    // 将Markdown转换成HTML
    // 注意在渲染HTML代码时使用了描述过的JSX转义写法dangerouslySetInnerHTML
    const content = marked(item.content);
    // 返回JSX结构
    return (
        <div className="col-md-8 item-show-layer-component">
            <div className="control-area">
                <button onClick={() => onEdit(item.id)} className="btn btn-primary">编辑</button>
                <button onClick={() => onDelete(item.id)} className="btn btn-danger">删除</button>
            </div>
            <h2>{item.title}</h2>
            <div className="item-text">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}
ItemShowLayer.propTypes = propTypes;
// 导出组件
export default ItemShowLayer;