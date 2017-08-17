import React from 'react';

export default class Dashboard extends React.Component{
  render(){
    return(
      <h1>This is {this.props.title}</h1>
    )
  }
}
