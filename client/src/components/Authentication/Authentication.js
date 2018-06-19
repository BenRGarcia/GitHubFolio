import React from "react";
import { connect } from "react-redux";

const isLogin = false;

export default ComposedComponent => {
  class RequireAuth extends React.Component {
    componentWillMount() {
      if (!isLogin) {
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