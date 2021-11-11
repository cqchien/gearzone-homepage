import React, { useEffect } from "react";
import "./Category.scss";

export default function Category() {
  useEffect(() => {}, []);
  // const { categoriesInfo, isLoading, error } = useSelector(
  //   (state) => state.categoriesReducer
  // );

  const categoriesInfo = [
    { name: "Phone", tree: "phone" },
    { name: "Laptop", tree: "phone" },
  ];

  return (
    <div className="Category">
      <div className="container">
        <div className="row">
          {categoriesInfo &&
            // eslint-disable-next-line array-callback-return
            categoriesInfo.map((item) => {
              if (!item.tree.includes("/")) {
                return (
                  <div className="col Category-product" key={item.id}>
                    <a className="card" href="/">
                      <img
                        src="/images/logoGZ.png"
                        className="card-img-top"
                        alt="..."
                      />
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
