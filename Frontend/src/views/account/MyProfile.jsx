import React, { lazy, Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TopMenu from "../../components/TopMenu";
const ProfileForm = lazy(() => import("../../components/account/ProfileForm"));
const ChangePasswordForm = lazy(() =>
  import("../../components/account/ChangePasswordForm")
);
const SettingForm = lazy(() => import("../../components/account/SettingForm"));
const CardListForm = lazy(() =>
  import("../../components/account/CardListForm")
);

class MyProfileView extends Component {
  state = { imagePreview: "", isDeleting: false };

  onSubmitProfile = async (values) => {
    alert(JSON.stringify(values));
  };

  onSubmitChangePassword = async (values) => {
    alert(JSON.stringify(values));
  };

  onImageChange = async (obj) => {
    if (obj) {
      const val = await this.getBase64(obj);
      this.setState({ imagePreview: val });
    } else {
      this.setState({ imagePreview: "" });
    }
  };

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
      reader.onerror = (error) => reject(error);
    });
  };
  render() {
    return (
      <div>
         <Header />
        <TopMenu />
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-4">
            <ProfileForm
              onSubmit={this.onSubmitProfile}
              onImageChange={this.onImageChange}
              imagePreview={this.state.imagePreview}
            />
          </div>
          <div className="col-md-8">
            <ChangePasswordForm onSubmit={this.onSubmitChangePassword} />
            <br></br>
            <SettingForm />
            <br></br>
            <CardListForm />
          </div>
        </div>
      </div>
      
      <Footer /></div>
    );
  }
}

export default MyProfileView;
