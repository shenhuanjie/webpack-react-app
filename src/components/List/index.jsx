import React from 'react';
import PropTypes from 'prop-types'
import ListItem from '../ListItem';

const propTypes = {
    items: PropTypes.array,
    onSelect: PropTypes.func,
};

function List({ items, onSelect }) {
    // 循环插入子组件
    const itemsContent = items.map(
        item => (
            <ListItem item={item} key={item.id} onClick={() => onSelect(item.id)} />
        )
    );
    // 返回JSX结构
    return (
        <div className="list-component">
            {itemsContent}
        </div>
    );
}

List.propTypes = propTypes;

// 导出组件
export default List;