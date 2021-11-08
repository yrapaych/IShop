import { useEffect, useState, useCallback } from "react";
import { useHttp } from "../hooks/http.hook";
import { Link } from "react-router-dom";
export const CatModal = () => {
  const [cats, setCats] = useState([]);
  const { request, loading } = useHttp();

  const getCats = useCallback(async () => {
    const fetched = await request("/api/data/cats", "GET", null, {});
    setCats(JSON.parse(fetched.cats));
  }, [request, setCats]);
  useEffect(() => {
    const M = window.M;
    M.AutoInit();
  }, []);
  useEffect(() => {
    getCats();
  }, [getCats]);
  console.log(Object.keys(cats));
  if (loading) {
    return <div id="cat-modal" className="modal"></div>;
  } else
    return (
      <div id="cat-modal" className="modal">
          <div className="modal-content row valign-wrapper">
              <div className='col l2'>
        {Object.keys(cats).map((rootcat) => {
          return (
            <Link
            className="modal-link"
              to={{ pathname: `/find`, state: { searchreq: rootcat } }}
              key={rootcat}
            >
              {rootcat}
            </Link>
          );
        })}
        </div>
        </div>
      </div>
    );
};
