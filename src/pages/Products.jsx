import React, { useState } from "react";
import { filterCats, filterSizes } from "../assets/data/filter";
import { getAllProducts } from "../assets/data/products";
import { Button, Grid, ProductCard } from "../components";
import CheckBox from "../components/CheckBox";
import Head from "../components/Head";

const Products = () => {
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };

  const [productFilter, setProductFilter] = useState(getAllProducts());

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.path],
          });
          break;

        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.path] });
          break;

        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.path] });
          break;

        default:
          break;
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCat = filter.category.filter((e) => e !== item.path);
          setFilter({
            ...filter,
            category: newCat,
          });
          break;

        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.path);
          setFilter({ ...filter, color: newColor });
          break;

        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.path);
          setFilter({ ...filter, size: newSize });
          break;

        default:
          break;
      }
    }
  };

  return (
    <Head title="Sản phẩm">
      <div className="products">
        <div className="products__filter">
          <div className="products__filter__widget">
            <div className="products__filter__widget__title">
              Danh mục sản phẩm
            </div>
            <div className="products__filter__widget__content">
              {filterCats.map((item, index) => (
                <p
                  key={index}
                  className="products__filter__widget__content__item"
                >
                  <CheckBox label={item.label} />
                </p>
              ))}
            </div>
          </div>
          <div className="products__filter__widget">
            <div className="products__filter__widget__title">Kích thước</div>
            <div className="products__filter__widget__content">
              {filterSizes.map((item, index) => (
                <p
                  key={index}
                  className="products__filter__widget__content__item"
                >
                  <CheckBox label={item.label} />
                </p>
              ))}
            </div>
          </div>
          <div className="products__filter__widget">
            <div className="products__filter__widget__content">
              <Button size="sm">Xóa bộ lọc</Button>
            </div>
          </div>
        </div>
        <div className="products__content">
          <Grid col={3} mdCol={2} smCol={1} gap={30}>
            {getAllProducts().map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
          </Grid>
        </div>
      </div>
    </Head>
  );
};

export default Products;
