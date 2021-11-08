import path from "path";
import {Link} from 'react-router-dom'

export const Item = ({ item }) => {


  return (
    <div className="item-outside">
    <div className="row waves-effect waves-light item-inside">
      <Link to={{pathname:`item/${item._id}` , state:{item:item}}}>
        <span className="col l12">
          <span className="center-align col l1"></span>
          <span className="center-align col l10">
          <img alt='' src={'/api/public/img/'+ path.join(...item.category.split(' '), item.img)} className="responsive-img"/>
          </span>
          <span className="center-align col l1"></span>
        </span>
      <div className="section">
      <p className="col left l12 black-text">{item.name}</p>
      <h5 className="col left l12 flow-text black-text">{item.price} ₴</h5>
      <p className='col l12 red-text'>{!item.quantity?'Out of stock!':''}</p>
      </div>
      </Link>
    </div>
    </div>
  );
};
