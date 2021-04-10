import React, { Component, lazy } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TopMenu from "../../components/TopMenu";
import { data } from "../../data";
const CardProductList2 = lazy(() =>
  import("../../components/card/CardProductList2")
);

class WishlistView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
         <Header />
        <TopMenu />
              <div className="container mb-3">
        <h4 className="my-3">Wishlists</h4>
        <div className="row g-3">
          {data.products.map((product, idx) => {
            return (
              <div key={idx} className="col-md-6">
                <CardProductList2 data={product} />
              </div>
            );
          })}
        </div>
      </div>
 
      <Footer />    </div>
    );
  }
}

export default WishlistView;
