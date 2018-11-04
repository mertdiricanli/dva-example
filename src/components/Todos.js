import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const Todos = ({ onDelete, todos }) => {
    
    const columns = [
        {
            title: "Title",
            dataIndex: 'title'
        },
        {
            title: "Actions",
            render: (text, record) => {
                return (
                    <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                        <Button>Delete</Button>   
                    </Popconfirm>
                )
            }
        }
    ];

    return (
        <Table dataSource={todos} columns={columns} rowKey="id" />
    )
}

Todos.propTypes = {
    onDelete: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
}

export default Todos;