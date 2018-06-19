import React from "react";
import { connect } from "react-redux";

// const isLogin = false;

export default ComposedComponent => {
  class RequireAuth extends React.Component {

    state = {
      isLogin: false
    }

    componentDidMount(){
      fetch('/isAuthenticated')
      .then(resp => resp.json())
        .then(data =>
          this.setState(
            {isLogin: data.isAuthenticated}
          )
        )
    }
    
    componentWillMount() {
      if (!this.isLogin) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  


  // function mapStateToProps(state) {
  //   return {
  //     auth: state.auth.authenticated
  //   };
  // }

  // connect(mapStateToProps)
 
  return  (RequireAuth);
};