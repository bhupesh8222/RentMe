import React, { Component, lazy,useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
import { ReactComponent as IconChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

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

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
const CouponApplyForm = lazy(() =>
  import("../../components/others/CouponApplyForm")
);

const postcards=[
  {
    "name":"Swift",
     "price":"$500",
     "availableTimePeriod":2,
    "status":"InActive",
     "image":"https://apollo-singapore.akamaized.net/v1/files/6gidlowbvh55-IN/image;s=1080x1080",
     "date":"23-12-2020",
     "location":"F-136/B"
  },
  {
    "name":"Cycle",
     "price":"$50",
     "availableTimePeriod":2,
     "image":"https://apollo-singapore.akamaized.net/v1/files/yd1fmltqzavn3-IN/image;s=1080x1080",
     "date":"23-12-2020",
     "status":"Active",
     "location":"F-136/B"
  },
  {
    "name":"Bike",
     "price":"$200",
     "availableTimePeriod":2,
     "image":"https://apollo-singapore.akamaized.net/v1/files/6fgm7lx0nlvc3-IN/image;s=1080x1080",
     "date":"23-12-2020",
     "status":"Active",
     "location":"F-136/B"
  },
  {
    "name":"book",
     "price":"$10",
     "availableTimePeriod":2,
     "image":"https://apollo-singapore.akamaized.net/v1/files/jwlqbt836m58-IN/image;s=1080x1080",
     "date":"23-12-2020",
     "status":"InActive",
     "location":"F-136/B"
  },
  {
    "name":"Home Theatre",
     "price":"$150",
     "availableTimePeriod":2,
     "image":"https://apollo-singapore.akamaized.net/v1/files/tner8ro3xfzi2-IN/image;s=1080x1080",
     "date":"23-12-2020",
     "status":"Active",
     "location":"F-136/B"
  },
  {
    "name":"Arduino",
     "price":"$250",
     "availableTimePeriod":2,
     "image":"https://apollo-singapore.akamaized.net/v1/files/l2t23usb96bh2-IN/image;s=1080x1080",
     "date":"23-12-2020",
     "location":"F-136/B"
  }
];

const borrowcards=[
  {
    "name":"Mobile Charger",
     "price":"$2",
     "availableTimePeriod":2,
    "status":"InActive",
     "image":"https://apollo-singapore.akamaized.net/v1/files/58x7nbumzbnf1-IN/image;s=1080x1080",
     "date":"23-12-2020",
     "location":"F-136/B"
  },
  {
    "name":"Table Fan",
     "price":"$50",
     "availableTimePeriod":2,
     "image":"https://apollo-singapore.akamaized.net/v1/files/xojl90jo2y6n2-IN/image;s=200x400;q=60",
     "date":"23-12-2020",
     "status":"Active",
     "location":"F-136/B"
  },
  {
    "name":"Football Kit",
     "price":"$200",
     "availableTimePeriod":2,
     "image":"https://apollo-singapore.akamaized.net/v1/files/vdnx6iepc1we2-IN/image;s=200x400;q=60",
     "date":"23-12-2020",
     "status":"Active",
     "location":"F-136/B"
  },
  {
    "name":"Btech books",
     "price":"$10",
     "availableTimePeriod":2,
     "image":"https://apollo-singapore.akamaized.net/v1/files/ecre1g630zu71-IN/image;s=1080x1080",
     "date":"23-12-2020",
     "status":"InActive",
     "location":"F-136/B"
  },
];

 const CartView =function() {
  const classes = useStyles();
  const [flag, setflag] = useState(true);
  const history=useHistory();

    
  // onSubmitApplyCouponCode = async (values) => {
  //   alert(JSON.stringify(values));
  // };
  
    
    return (
      <React.Fragment>
        <Header />
        <TopMenu />
        <div className="bg-secondary border-top p-4 text-white mb-3">
          <h1 className="display-6">Transactions</h1>
        </div>
        {/* <div className="container mb-3">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width={120}>
                          Quantity
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
                                src="../../images/products/tshirt_red_480x400.webp"
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
                              <p className="small text-muted">
                                Size: XL, Color: blue, Brand: XYZ
                              </p>
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
                              <p className="small text-muted">
                                Size: XL, Color: blue, Brand: XYZ
                              </p>
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
                  <Link to="/checkout" className="btn btn-primary float-right">
                    Make Purchase <IconChevronRight className="i-va" />
                  </Link>
                  <Link to="/" className="btn btn-secondary">
                    <IconChevronLeft className="i-va" /> Continue shopping
                  </Link>
                </div>
              </div>
              <div className="alert alert-success mt-3">
                <p className="m-0">
                  <IconTruck className="i-va mr-2" /> Free Delivery within 1-2
                  weeks
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3">
                <div className="card-body">
                  <CouponApplyForm onSubmit={this.onSubmitApplyCouponCode} />
                </div>
              </div>
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
        </div> */}
        
        <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant={flag?"contained":"outlined"} color="primary" onClick={
                  ()=>{
                   setflag(true);
                  }  
                  }>
                    Post
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant={!flag?"contained":"outlined"} color="primary" onClick={()=>{
                   setflag(false);
                  }}>
                    Borrowed
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {(flag?postcards:borrowcards).map((product) => (
              <Grid item key={product} xs={12} sm={6} md={4}>
                   <div className="card">
      <img src={product.image} className="card-img-top" alt="..." />
      {product.isNew && (
        <span className="badge bg-success position-absolute mt-2 ml-2">
          New
        </span>
      )}
      {product.isHot && (
        <span className="badge bg-danger position-absolute r-0 mt-2 mr-2">
          Hot
        </span>
      )}
      {(product.discountPercentage > 0 || product.discountPrice > 0) && (
        <span
          className={`rounded position-absolute p-2 bg-warning  ml-2 small ${
            product.isNew ? "mt-5" : "mt-2"
          }`}
        >
          -
          {product.discountPercentage > 0
            ? product.discountPercentage + "%"
            : "$" + product.discountPrice}
        </span>
      )}
      <div className="card-body">
        <h6 className="card-subtitle mb-2">
          <Link to={product.link} className="text-decoration-none">
            {product.name}
          </Link>
        </h6>
        <div className="my-2">
          <span className="font-weight-bold h5">{product.price}</span>
          {/* {product.originPrice > 0 && (
            <del className="small text-muted ml-2">${product.originPrice}</del>
          )} */}
          {/* <span className="ml-2">
            {Array.from({ length: product.star }, (_, key) => (
              <IconStarFill className="text-warning mr-1" key={key} />
            ))}
          </span> */}
        </div>
        <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>	Montes Urales
								</a>
					<br/>
          
          <span className="font-weight-bold h6">   Active: {product.status}
     </span>
    
        <br />
        <div className="btn-group btn-block" role="group">
        <Button size="small" color={product.status=="Active"?"primary":"grey"}
        onClick={()=>{
         if(product.status=="Active"){
           history.push("/map");
         }
        }}>
                    Track Borrow Location <IconChevronRight className="i-va" />
                 
                    </Button>
                 
          </div>
      </div>
    </div>
  
                {/* <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <a href="/map" className="btn btn-primary float-right">
                    Track Location <IconChevronRight className="i-va" />
                  </a>
                
                    </Button>
                    </CardActions>
                </Card> */}
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
        <div className="bg-light border-top p-4">
          <div className="container">
            <h6>Payment and refund policy</h6>
            <p>
            The refund accruing shall be processed within 15-20 working days from the date of the cancellation request and subject to receipt of the refunds from the service provider or Airline. If we have received the payment through a valid credit card, then the same will be refunded to your credit card. Payments made using any other form of payment will be refunded by cheque within a maximum of 30 days from date of cancellation. All refunds shall be processed subject to processing of refunds by the respective airline/service provider.
    </p>
            <p>
            We acts only as a facilitator of services and shall not be held liable for any changes, deficiencies, disputes, etc. related to the services being provided by the third party service providers, including the matters related to delays in refunds or no refunds, of the fares and charges paid to third party service providers.
Please note convenience fee charged at the time of booking will not be refundable.
            </p>
          </div>

      <Footer />
        </div>
      </React.Fragment>
    );
  
}

export default CartView;
