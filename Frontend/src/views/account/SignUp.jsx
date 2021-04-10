import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import SignHeader from "../../components/SignHeader";
import TopMenu from "../../components/TopMenu";
const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));

class SignUpView extends Component {
  onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <div>
        <SignHeader />
        <TopMenu />
      <div className="container my-3">
        <div className="row border">
          <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
            <Link to="/">
              <img
                src="http://mobycy.com/blog/wp-content/uploads/2018/10/Rent-your-bike_1.jpg"
                alt="..."
                className="img-fluid"
              />
            </Link>
            {/* <Link to="/">
              <img
                src="../../images/banner/Laptops.webp"
                alt="..."
                className="img-fluid"
              />
            </Link> */}
          </div>
          <div className="col-md-6 p-3">
            <h4 className="text-center">Sign Up</h4>
            <SingUpForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>

      <Footer />     </div>
    );
  }
}

export default SignUpView;
