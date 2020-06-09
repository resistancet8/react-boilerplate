import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Spin } from "antd";

export default function (ProtectedRoutes) {
  class Authenticated extends Component {
    render() {
      const { isLoggedIn, loading } = this.props;
      
      return (
        <div className="authComponent">
          {isLoggedIn ? (
            <Spin spinning={loading}>
              <ProtectedRoutes {...this.props} />
            </Spin>
          )
            : (
              <Redirect
                to="/login"
              />
            )}
        </div>
      );
    }
  }
  return Authenticated;
}