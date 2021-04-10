import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconReceipt } from "bootstrap-icons/icons/receipt.svg";
import { ReactComponent as IconCreditCard2Front } from "bootstrap-icons/icons/credit-card-2-front.svg";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import React, { Component, lazy,useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
import { ReactComponent as IconChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from "../../components/Header";
import TopMenu from "../../components/TopMenu";
import Footer from "../../components/Footer";
//mkcmkc

class CheckoutView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <TopMenu />
        <br /><br />
     <div className="container mb-3">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width={120}>
                          Days
                        </th>
                        <th scope="col" width={150}>
                          Price
                        </th>
                        <th scope="col" className="text-right" width={130}></th>
                      </tr>
                    </thead>
                    <tbody>
                                       <tr>
                        <td>
                          <div className="row">
                            <div className="col-3 d-none d-md-block">
                              <img
                                src="../../images/products/tshirt_grey_480x400.webp"
                                width="80"
                                alt="..."
                              />
                            </div>
                            <div className="col">
                              <Link
                                to="/product/detail"
                                className="text-decoration-none"
                              >
                                Another name of some product goes just here
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="input-group input-group-sm mw-140">
                            <button
                              className="btn btn-primary text-white"
                              type="button"
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="1"
                            />
                            <button
                              className="btn btn-primary text-white"
                              type="button"
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                        </td>
                        <td>
                          <var className="price">$237.00</var>
                          <small className="d-block text-muted">
                            $79.00 each
                          </small>
                        </td>
                        <td className="text-right">
                          <button className="btn btn-sm btn-outline-secondary mr-2">
                            <IconHeartFill className="i-va" />
                          </button>
                          <button className="btn btn-sm btn-outline-danger">
                            <IconTrash className="i-va" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-footer">
                  <a href="https://telr.com/payment-gateway/demo/" className="btn btn-primary float-right">
                    Borrow <IconChevronRight className="i-va" />
                  </a>
                </div>
              </div>
              </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <dl className="row border-bottom">
                    <dt className="col-6">Total price:</dt>
                    <dd className="col-6 text-right">$1,568</dd>

                    <dt className="col-6 text-success">Discount:</dt>
                    <dd className="col-6 text-success text-right">-$58</dd>
                    <dt className="col-6 text-success">
                      Coupon:{" "}
                      <span className="small text-muted">EXAMPLECODE</span>{" "}
                    </dt>
                    <dd className="col-6 text-success text-right">-$68</dd>
                  </dl>
                  <dl className="row">
                    <dt className="col-6">Total:</dt>
                    <dd className="col-6 text-right  h5">
                      <strong>$1,350</strong>
                    </dd>
                  </dl>
                  <hr />
                  <p className="text-center">
                    <img
                      src="../../images/payment/payments.webp"
                      alt="..."
                      height={26}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      <Footer />
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default CheckoutView;
