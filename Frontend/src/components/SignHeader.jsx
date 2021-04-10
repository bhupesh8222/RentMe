import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { ReactComponent as IconWalletFill } from "bootstrap-icons/icons/wallet-fill.svg";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import { ReactComponent as IconPersonBadgeFill } from "bootstrap-icons/icons/person-badge-fill.svg";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconListCheck } from "bootstrap-icons/icons/list-check.svg";
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed-fill.svg";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconBellFill } from "bootstrap-icons/icons/bell-fill.svg";
import { ReactComponent as IconInfoCircleFill } from "bootstrap-icons/icons/info-circle-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SignHeader = () => {
  return (
    <React.Fragment>
      <header className="p-3 border-bottom bg-light">
        <div className="container-fluid ">
          <div className="row g-1 d-flex justify-content-between">
            <div className="col-md-3 text-center">
              <Link to="/">
                <img
                  alt="logo"
                  src="../../images/logo (1).png"
                  style={{height:"60px",width:"150px",}}
                />
              </Link>
            </div>
            <div className="col-md-4">
              <div className="position-relative d-inline mr-3">
                <Link to="/" className="btn btn-primary">
                  SignIn
                  
                </Link> | <Link to="/account/signup" className="btn btn-primary">
                  SignUp
                  
                </Link>   </div>

              
              </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default SignHeader;
