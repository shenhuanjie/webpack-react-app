import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss';

// 属性验证
const propTypes = {
    item: PropTypes.object,
    onSave: PropTypes.func,
    onCancel: PropTypes.func
};

// 组件主体，这里是stateless function，所以直接就是一个函数
class ItemEditor extends Component {
    render() {
        const { onSave, onCancel } = this.props;

        const item = this.props.item || {
            title: '',
            content: '',
        };

        let saveText = item.id ? '保存' : '创建';

        let save = () => {
            onSave({
                ...item,
                title: this.refs.title.value,
                content: this.refs.content.value,
            });
        };
        // 返回JSX结构
        return (
            <div className="col-md-8 item-editor-component">
                <div className="control-area">
                    <button onClick={save} className="btn btn-success">{saveText}</button>
                    <button onClick={onCancel} className="btn secondary">取消</button>
                </div>
                <div className="edit-area">
                    <input ref="title" placeholder="请填写标题" defaultValue={item.title} />
                    <textarea ref="content" placeholder="请填写内容" defaultValue={item.content} />
                </div>
            </div>
        );
    }
}

// 添加验证
ItemEditor.propTypes = propTypes;

// 导出组件
export default ItemEditor;