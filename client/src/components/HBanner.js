import { Item } from './Item';
import { useHttp } from "../hooks/http.hook";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { Loader } from "../components/Loader";
export const HBanner = ({type})=>{
    const [items, setItems] = useState([]);
    const { request} = useHttp();
    const getBanner = useCallback(async () => {
      try {
        const count = 6;
        const fetched = await request(
          "/api/data/banner",
          "POST",
          { count, bannertype:type },
          {}
        );
        setItems(fetched.banneritems);
      } catch (e) {console.log(e)}
    }, [setItems, request, type]);
    useEffect(() => {
      getBanner();
    }, [getBanner]);
    if (!items) {
      return <Loader />;
    } else if (items)
    return(
        <div className="col l12">
          <h5 className="col l12">{type.id>0?(type.id>1?"Найбільш популярні":"Найкраще продаються в Категорії " + type.category):"Може вас зацікавить..."}</h5>
            {items.map((item) => {
                return (
                  <div className="col l2" key={item._id}>
                    <Item item={item} />
                  </div>
                );
              })}
        </div>
    )
}