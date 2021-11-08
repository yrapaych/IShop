import { useHttp } from "../hooks/http.hook";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Loader } from "./Loader";
import { Link } from "react-router-dom";

export const Categories = () => {
  const [cats, setCats] = useState([]);
  const { request, loading } = useHttp();
  const getCats = useCallback(async () => {
    try {
      const fetched = await request('/api/data/cats', "GET", null, {});
      const res = JSON.parse(fetched.cats)
      setCats(Object.keys(res))
      /*res.forEach(function (elem) {
        const splc = elem.name.split(" ");
        splc.reduce(function (o, s) {
          if (o) {
            if (!o[s]) {
              return (o[s] = {});
            } else {
              return o[s];
            }
          } else return null;
        }, cat);
      });*/
    } catch (e) {
      console.log(e);
    }
  }, [setCats, request]);
  useEffect(() => {
    getCats();
  }, [getCats]);

  if (loading) {
    return <Loader />;
  } else
    return (
      <div className="col l12 row left-bar-item">
        <div className="col l12 row ">
          {cats.map((elem) => {
            return (
              <Link className="col l12" to={{pathname:`/find`, state:{searchreq:elem}}} key={elem}>
                {elem}
              </Link>
            );
          })}
        </div>
      </div>
    );
};
