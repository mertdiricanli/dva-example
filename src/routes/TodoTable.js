import React, { Component } from 'react';
import { connect } from 'dva';
import Todos from '../components/Todos';
import styles from '../index.css';

class TodoTable extends Component {
    componentDidMount() {
        this.props.onLoad();
    }

    handleDelete = (id) => {
        this.props.onDelete(id);
    }

    render() {
        return (
            <div className={styles.container}>
                <h2>List of Todos</h2>
                <Todos todos={this.props.todos.todos ? this.props.todos.todos : []} onDelete={this.handleDelete} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
		todos: state.todos
	}
}

const mapDispatchToProps = dispatch => {
	return {
        onLoad: () => dispatch({ type: 'todos/fetchTodos' }),
		onDelete: (id) => dispatch({ type: 'todos/delete', payload: id})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoTable);