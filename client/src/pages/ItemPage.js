import path from "path";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { HBanner } from "../components/HBanner";
import { ModalCart } from "../components/ModalCart";

export const ItemPage = () => {
  const location = useLocation();
  const { item } = location.state;
  return (
    <div className="row">
      <div className="col l12">
      <Link to='/'><i className="tiny material-icons">home</i></Link>
      {item.category.split(' ').map(elem=>{
          return (<Link key={elem} to={{pathname:`/find`, state:{searchreq:elem}}}><i className="tiny material-icons">arrow_forward_ios</i> {elem} </Link>) }
      )}
      </div>
        <h1 className="col l12">{item.name}</h1>
          <div className="row">
            <div className="col l6">
              <img
                alt=""
                src={
                  "/api/public/img/" +
                  path.join(...item.category.split(" "), item.img)
                }
                className="responsive-img"
              ></img>
            </div>
            <div className="col l6">
                <div className="col l12">{item.quantity?<h5 className="item-page-elem item-available col valign-wrapper green-text green lighten-5">Is available</h5>:<h5 className="item-page-elem item-available col valign-wrapper red-text">Out of stock</h5>}</div>
                <div className="item-page-elem col l12 row item-buy valign-wrapper">
                        <div className='col'>{item.price} <span className='currency'>₴</span></div>
                        <a className='col l2 btn-large modal-trigger' href='#buy-modal'>Buy</a>
                </div>
                <p className="col l12">{item.desc}</p>
            </div>
      </div>
      <div className="col l12">
          <HBanner type={{id:1, category:item.category}}/>
      </div>
                <ModalCart/>
      
    </div>
  );
};
