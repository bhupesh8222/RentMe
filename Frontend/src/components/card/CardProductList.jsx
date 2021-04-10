import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconTruckFill } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

const CardProductList = (props) => {
  const history = useHistory();
             
  const product = props.data;
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-3 text-center">
          <img src={product.img} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h6 className="card-subtitle mr-2 d-inline">
              <Link to={product.link} className="text-decoration-none">
                {product.name}
              </Link>
            </h6>
            {product.isNew && (
              <span className="badge bg-success mr-2">New</span>
            )}
            {product.isHot && <span className="badge bg-danger mr-2">Hot</span>}

            <div>
              {product.star > 0 &&
                Array.from({ length: 5 }, (_, key) => {
                  if (key <= product.star)
                    return (
                      <IconStarFill className="text-warning mr-1" key={key} />
                    );
                  else
                    return (
                      <IconStarFill className="text-secondary mr-1" key={key} />
                    );
                })}
            </div>
            <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>	Montes Urales, Lomas de Chapultepec.
								</a>
					
            {product.description &&
              product.description.includes("|") === false && (
                <p className="small mt-2">{product.description}</p>
              )}
            {product.description && product.description.includes("|") && (
              <ul className="mt-2">
                {product.description.split("|").map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-body">
          <div className="mb-2">
            <span className="font-weight-bold h5">${product.price}</span>
            {product.originPrice > 0 && (
              <del className="small text-muted ml-2">
                ${product.originPrice}
              </del>
            )}
            {(product.discountPercentage > 0 || product.discountPrice > 0) && (
              <span className={`rounded p-1 bg-warning ml-2 small`}>
                -
                {product.discountPercentage > 0
                  ? product.discountPercentage + "%"
                  : "$" + product.discountPrice}
              </span>
            )}
          </div>
          {/* {product.isFreeShipping && (
            // <p className="text-success small mb-2">
            //   <IconTruckFill /> Free shipping
            // </p>
          )} */}

          <div className="btn-group btn-block" role="group">
            <button
            onClick={
              ()=>{history.push("/checkout");}
            
              //  event =>  window.location.href='https://telr.com/payment-gateway/demo/'}
              //dmdndmx x x x x
            }
              type="button"
              className="btn btn-sm btn-primary"
              title="Add to cart"
            >
             
              <FontAwesomeIcon icon={faCartPlus} /> Borrow
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              title="Add to wishlist"
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductList;
