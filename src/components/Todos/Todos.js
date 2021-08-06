import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Todo from '../Todo/Todo';

export function Todos(props) {
  return (
    <div>
      <span>{props.status}</span>
      {props.listaTODOS.map( (todo) => {
        return (
          <Link key={todo.id} to={`/edit/${todo.id}`}>
            <Todo title={todo.title} />
          </Link>
        )
      })}
    </div>
  )
};

function mapStatetoProps(state){
  return {
    listaTODOS: state
  }
}

export default connect ( mapStatetoProps) (Todos);