import React, { lazy, Component } from "react";
import Footer from "../../components/Footer";
import SignHeader from "../../components/SignHeader";
import TopMenu from "../../components/TopMenu";
const ForgotPasswordForm = lazy(() =>
  import("../../components/account/ForgotPasswordForm")
);

class ForgotPasswordView extends Component {
  onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <div>
        <SignHeader />
        <TopMenu />
      <div className="container my-3">
        <div className="row justify-content-md-center ">
          <div className="col-md-4 p-3 border">
            <h4 className="text-center">Forgot Password</h4>
            <ForgotPasswordForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
      <Footer />
      </div>
     );
  }
}

export default ForgotPasswordView;
