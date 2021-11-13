
import { useHistory, useLocation } from "react-router-dom";
import { Loader } from "../components/Loader";
import { useHttp } from "../hooks/http.hook";
import { useCallback } from "react";
import { useState,useEffect } from "react";
import { Item } from "../components/Item";

export const ItemGridPage = () => {
  const location = useLocation();
  const { searchreq } = location.state;
  const { request} = useHttp();
  const [items, setItems] = useState(null);
  const history = useHistory()
  const Search = useCallback(async () => {
    try {
      const fetched = await request("/api/data/searchreq", "POST", {searchreq}, {});
      const res = fetched.searchres;
      if(res.isItem){ 
        history.push(`/item/${res.item._id}`, {item:res.item})
      }
      setItems(res.items)

    } catch (e) {
      console.log(e);
    }
  }, [request, setItems, searchreq, history]);
  useEffect(()=>{
    Search()
    console.log(searchreq)
  },[Search, searchreq])
  if (!items) {
    return <Loader />;
  } else
    return (
      <div className="row">
        <div className="col l2 left-bar">
          <div className="row">
          </div>
        </div>
        <div className="col l10 items">
          <div className="col l12">
            <div className="row">
            {items.map((item) => {
                return (
                  <div className="col l2" key={item._id}>
                    <Item item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
};
