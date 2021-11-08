import { Link } from "react-router-dom";
import { useState} from "react";
import { useHistory } from "react-router-dom";
import { CatModal } from "./CatModal";
export const NavBar = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const searchInputHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    if (search) {
      history.push({ pathname: "/find", state: { searchreq: search } });
    }
  };

  return (
    <nav className="grey darken-4">
      <div className="container nav-wrapper grey darken-4 row">
        <Link to="/" className="brand-logo left col l2">
          <span className="center-align col l12">
            <i className="shop-icon material-icons col">shop</i>
            <span className="col">IShop</span>
          </span>
        </Link>
        <ul className="right row col l8">
          <div className="col l12">
            <li className="col l8">
              <div className="input-field white lighten-1 black-text ">
                <input
                  placeholder="Я шукаю..."
                  id="search"
                  type="search"
                  value={search}
                  onChange={searchInputHandler}
                  required
                />
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons active black-text">search</i>
                </label>
              </div>
            </li>
            <li>
              <input
                type="submit"
                className={`${search ? "" : "disabled"} btn grey`}
                value="Search"
                onClick={submitHandler}
              />
            </li>
            <li className="col">
              <a className='col btn-large modal-trigger' href='#cat-modal'>Categories</a>
              <CatModal/>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};
