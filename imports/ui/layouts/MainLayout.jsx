import React from 'react';
import Dashboard from '../components/Dashboard';

export default class MainLayout extends React.Component{
  render(){
    return(
      <Dashboard title={this.props.title}/>
    )
  }
}
