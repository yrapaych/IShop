import path from "path";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const ModalCart = () => {
  const location = useLocation();
  const { item } = location.state;
  const [num, setNum] = useState(1);
  const lessClick = async () => {
    if (num > 1) setNum(num - 1);
  };
  const moreClick = () => {
    if (num < item.quantity) setNum(num + 1);
  };
  const inputHandler = (e) => {
    const parsed = parseInt(e.target.value, 10);
    if (!isNaN(parsed) && parsed <= item.quantity && parsed > 0) {
      setNum(parsed);
    }
    if (e.target.value === "") {
      setNum(0);
    }
    console.log(parsed);
  };

  useEffect(() => {
    const M = window.M;
    M.AutoInit();
  }, []);
  return (
    <div id="buy-modal" className="modal">
      <div className="modal-content row valign-wrapper">
        <div className="col l3">
          <img
            alt=""
            src={
              "/api/public/img/" +
              path.join(...item.category.split(" "), item.img)
            }
            className="responsive-img"
          ></img>
        </div>
        <div className="col l4">{item.name}</div>
        <i className="material-icons col click-icon" onClick={lessClick}>
          remove
        </i>
        <input
          type="text"
          className="col l1 add-cart-input"
          value={num}
          onChange={inputHandler}
        />
        <i className="material-icons col click-icon" onClick={moreClick}>
          add
        </i>
        <div className="col l2 center-align">{item.price * num} ₴</div>
        <div className="col l2 row">
          <button
            className="col l12 modal-close waves-effect waves-green btn item-btn"
          >
            Add to cart
          </button>
          <Link to="/order" className="col l12 modal-close waves-effect waves-green btn">
            Order
          </Link>
        </div>
      </div>
    </div>
  );
};
