import productApi from '../../apis/productApi';
import GlobalLoading from '../../components/Loading/Global';
import ProductDetail from '../../components/ProductDetail';
import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [specifications, setSpecifications] = useState([]);
  const [isNotFoundProduct, setIsNotFoundProduct] = useState(false);

  // lấy sản phẩm
  useEffect(() => {
    const getProduct = async (id) => {
      try {
        const response = await productApi.getProduct(id);
        if (response && response.success) {
          const { data } = response;
          setProduct(data.product);
          setSpecifications(data.specifications);
        } else {
          setIsNotFoundProduct(true);
        }
      } catch (error) {
        setIsNotFoundProduct(true);
      }
    };
    getProduct(id);

    return () => { };
  }, [id]);

  return (
    <>
      {product.name ? (
        <ProductDetail product={product} specifications={specifications} />
      ) : (
        <GlobalLoading content="Đang tải sản phẩm ..." />
      )}
      {isNotFoundProduct && <Redirect to="/not-found" />}
    </>
  );
}

export default ProductDetailPage;
