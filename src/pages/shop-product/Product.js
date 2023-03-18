import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";

const Product = ({ location, product }) => {
  const { pathname } = location;
let prod =    {
  _id: "63fb70d6cf4a930c4f696e3d",
  name: "Bottle",
  price: 20,
  new: true,
  feedbacks: [],
  saleCount: 0,
  tag: [],
  description: "hello world",
  images: [
      "uploads/single-products-1677422806729.jpg",
      "uploads/group-products-1677422806730.jpg"
  ],
  isHidden: false,
  isApproved: false,
  isSponsored: false,
  point: 100,
  variation: [],
  updatedAt: "2023-02-26T14:46:46.735Z",
  __v: 0
}
  return (
    <Fragment>
      <MetaTags>
        <title>Test | Product Page</title>
        <meta
          name="description"
          content="Product page of flone react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Shop Product
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={prod}
        />

        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={prod.description}
        />

        {/* related product slider */}
        <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={prod.description}
        />
      </LayoutOne>
    </Fragment>
  );
};

Product.propTypes = {
  location: PropTypes.object,
  product: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.id;
  return {
    product: state.productData.products.filter(
      single => single._id === itemId
    )[0]
  };
};

export default connect(mapStateToProps)(Product);
