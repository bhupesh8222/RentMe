import React, { Component, lazy } from "react";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faShoppingCart,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "../../data";
import Header from "../../components/Header";
import TopMenu from "../../components/TopMenu";
import Footer from "../../components/Footer";
const CardFeaturedProduct = lazy(() =>
  import("../../components/card/CardFeaturedProduct")
);
const CardServices = lazy(() => import("../../components/card/CardServices"));
const Details = lazy(() => import("../../components/others/Details"));
const RatingsReviews = lazy(() =>
  import("../../components/others/RatingsReviews")
);
const QuestionAnswer = lazy(() =>
  import("../../components/others/QuestionAnswer")
);
const ShippingReturns = lazy(() =>
  import("../../components/others/ShippingReturns")
);
const SizeChart = lazy(() => import("../../components/others/SizeChart"));
class ProductDetailView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
         <Header />
        <TopMenu />
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-8">
            <div className="row mb-3">
              <div className="col-md-5 text-center">
                <img
                  src="../../images/products/tshirt_red_480x400.webp"
                  className="img-fluid mb-3"
                  alt=""
                />
                <img
                  src="../../images/products/tshirt_grey_480x400.webp"
                  className="border border-secondary mr-2" width="75"
                  alt="..."
                />
                <img
                  src="../../images/products/tshirt_black_480x400.webp"
                  className="border border-secondary mr-2" width="75"
                  alt="..."
                />
                <img
                  src="../../images/products/tshirt_green_480x400.webp"
                  className="border border-secondary mr-2" width="75"
                  alt="..."
                />
              </div>
              <div className="col-md-7">
                <h1 className="h5 d-inline mr-2">
                  Reebok T-Shirt                </h1>
                <span className="badge bg-success mr-2">New</span>
                <span className="badge bg-danger mr-2">Hot</span>
                <div className="mb-3">
                  <IconStarFill className="text-warning mr-1" />
                  <IconStarFill className="text-warning mr-1" />
                  <IconStarFill className="text-warning mr-1" />
                  <IconStarFill className="text-warning mr-1" />
                  <IconStarFill className="text-secondary mr-1" />|{" "}
                  <span className="text-muted small">
                    42 ratings and 4 reviews
                  </span>
                </div>
                <dl className="row small mb-3">
                  <dt className="col-sm-3">Availability</dt>
                  <dd className="col-sm-9">In stock</dd>
                  <dt className="col-sm-3">Sold by</dt>
                  <dd className="col-sm-9">Abhiskek</dd>
                  <dt className="col-sm-3">Date of Post</dt>
                  <dd className="col-sm-9">23-12-2020</dd>
                  <dt className="col-sm-3">Location</dt>
                  <dd className="col-sm-9">chandni Chowk, New Delhi</dd>
                
                  </dl>

                <div className="mb-3">
                  <span className="font-weight-bold h5 mr-2">$1900</span>
                  <del className="small text-muted mr-2">$2000</del>
                  <span className="rounded p-1 bg-warning  mr-2 small">
                    -$100
                  </span>
                </div>
                <div className="mb-3">
                  {/* <div className="d-inline float-left mr-2">
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
                  </div> */}
                  {/* <button
                    type="button"
                    className="btn btn-sm btn-primary mr-2"
                    title="Add to cart"
                  >
                    <FontAwesomeIcon icon={faCartPlus} /> Add to cart
                  </button> */}
                  <button
                    type="button"
                    className="btn btn-sm btn-warning mr-2"
                    title="Buy now"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} /> Borrow
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    title="Add to wishlist"
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
                <div>
                  <p className="font-weight-bold mb-2 small">
                    Product Highlights
                  </p>
                  <ul className="small">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>Etiam ullamcorper nibh eget faucibus dictum.</li>
                    <li>Cras consequat felis ut vulputate porttitor.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-link active"
                      id="nav-details-tab"
                      data-toggle="tab"
                      href="#nav-details"
                      role="tab"
                      aria-controls="nav-details"
                      aria-selected="true"
                    >
                      Details
                    </a>
                    <a
                      className="nav-link"
                      id="nav-randr-tab"
                      data-toggle="tab"
                      href="#nav-randr"
                      role="tab"
                      aria-controls="nav-randr"
                      aria-selected="false"
                    >
                      Ratings & Reviews
                    </a>
                    <a
                      className="nav-link"
                      id="nav-faq-tab"
                      data-toggle="tab"
                      href="#nav-faq"
                      role="tab"
                      aria-controls="nav-faq"
                      aria-selected="false"
                    >
                      Questions and Answers
                    </a>
                    {/* <a
                      className="nav-link"
                      id="nav-ship-returns-tab"
                      data-toggle="tab"
                      href="#nav-ship-returns"
                      role="tab"
                      aria-controls="nav-ship-returns"
                      aria-selected="false"
                    >
                      Shipping & Returns
                    </a> */}
                    {/* <a
                      className="nav-link"
                      id="nav-size-chart-tab"
                      data-toggle="tab"
                      href="#nav-size-chart"
                      role="tab"
                      aria-controls="nav-size-chart"
                      aria-selected="false"
                    >
                      Size Chart
                    </a> */}
                  </div>
                </nav>
                <div className="tab-content p-3 small" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-details"
                    role="tabpanel"
                    aria-labelledby="nav-details-tab"
                  >
                    <Details />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-randr"
                    role="tabpanel"
                    aria-labelledby="nav-randr-tab"
                  >
                    {Array.from({ length: 5 }, (_, key) => (
                      <RatingsReviews key={key} />
                    ))}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-faq"
                    role="tabpanel"
                    aria-labelledby="nav-faq-tab"
                  >
                    <dl>
                      {Array.from({ length: 5 }, (_, key) => (
                        <QuestionAnswer key={key} />
                      ))}
                    </dl>
                  </div>
                  {/* <div
                    className="tab-pane fade"
                    id="nav-ship-returns"
                    role="tabpanel"
                    aria-labelledby="nav-ship-returns-tab"
                  >
                    <ShippingReturns />
                  </div> */}
                  {/* <div
                    className="tab-pane fade"
                    id="nav-size-chart"
                    role="tabpanel"
                    aria-labelledby="nav-size-chart-tab"
                  >
                    <SizeChart />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <CardFeaturedProduct data={data.products} />
            <CardServices />
          </div>
        </div>
      </div>
    
      <Footer /></div>
    );
  }
}

export default ProductDetailView;
