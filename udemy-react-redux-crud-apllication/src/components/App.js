import React from 'react';
import {connect} from 'react-redux';

import {incriment, decriment} from '../actions';

class App extends React.Component{
  render(){
    const props = this.props;
    return(
      <React.Fragment>
        <div>value:{props.value}</div>
        <button onClick={props.incriment}>+1</button>
        <button onClick={props.decriment}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({value:state.count.value});
const mapDispatchToProps = dispatch => ({
  incriment: () => dispatch(incriment()),
  decriment: () => dispatch(decriment())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
