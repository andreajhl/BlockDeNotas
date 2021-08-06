import React from 'react';
import { connect } from 'react-redux';

export function TodoDetail(match) {
  console.log("match en detail: ", match.params)
  return (
    <div>
      {/* { props.listaTODOS.filter( (todo) => {  })} */}
    </div>
  )
};

function mapStatetoProps(state){
  return {
    listaTODOS: state
  }
}

export default connect ( mapStatetoProps) (TodoDetail);