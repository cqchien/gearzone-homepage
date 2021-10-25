import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Category.scss";

export default function Category() {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  // const { categoriesInfo, isLoading, error } = useSelector(
  //   (state) => state.categoriesReducer
  // );

  const categoriesInfo = [{ name: "Phone", tree: "phone" }, { name: "Laptop", tree: "phone" }];

  console.log(categoriesInfo);
  return (
    <div className="Category">
      <div className="container">
        <div className="row">
          {categoriesInfo &&
            categoriesInfo.map((item) => {
              if (!item.tree.includes("/")) {
                return (
                  <div className="col Category-product" key={item.id}>
                    <a className="card" href="#">
                      <img src={item.logo} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">{item.name}</p>
                      </div>
                    </a>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}
