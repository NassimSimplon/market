import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderEighteen from "../../wrappers/hero-slider/HeroSliderEighteen";
import BannerFourteen from "../../wrappers/banner/BannerFourteen";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import TabProductEleven from "../../wrappers/product/TabProductEleven";
import TabProductTwelve from "../../wrappers/product/TabProductTwelve";
import NewsletterThree from "../../wrappers/newsletter/NewsletterThree";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import CategoryThreeSlider from "../../wrappers/category/CategoryThreeSlider";
import VideoPopupTwo from "../../components/video-popup/VideoPopupTwo";
import TabProduct from "../../wrappers/product/TabProduct";
import CountDownOne from "../../wrappers/countdown/CountDownOne";
import CategoryTwoSlider from "../../wrappers/category/CategoryTwoSlider";
import ImageSliderTwo from "../../wrappers/image-slider/ImageSliderTwo";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import BrandLogoSliderFour from "../../wrappers/brand-logo/BrandLogoSliderFour";
import BannerFive from "../../wrappers/banner/BannerFive";

const HomeFashion = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Test | Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderEighteen />
        
          {/* banner */}
        <BannerFive />
         {/* featured icon */}
         <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />
           {/* category */}
        {/* <CategoryThreeSlider spaceTopClass="pt-100" spaceBottomClass="pb-95" /> */}
          {/* video popup */}
          <VideoPopupTwo spaceBottomClass="pb-100" />
        {/* tab product */}
        {/* <TabProductEleven
          category="kids"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          sectionTitle="Featured Products"
          bgColorClass="bg-gray-3"
        /> */}
           <TabProduct spaceBottomClass="pb-60" category="fashion" />
        {/* countdown */}
        {/* <CountDownThree
          spaceTopClass="pt-95"
          spaceBottomClass="pb-95"
          dateTime="November 13, 2020 12:12:00"
          countDownImage="/assets/img/banner/deal-4.jpg"
        /> */}

         <CountDownOne
          spaceTopClass="pt-115"
          spaceBottomClass="pb-115"
          bgImg="/assets/img/bg/bg-1.jpg"
          dateTime="November 13, 2020 12:12:00"
        />
        {/* ADS2 */}
        {/* <FeatureIconFour
          spaceTopClass="pt-10"
          spaceBottomClass="pb-90"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
        /> */}

        {/* testimonial */}
        <TestimonialOne
          spaceTopClass="pt-95"
          spaceMTopClass="mt-70"
          spaceBottomClass="pb-95"
          spaceMBottomClass="mb-70"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
        />
         {/* image slider */}
         <ImageSliderTwo />
        {/* tab product */}
        {/* <TabProductTwelve
          category="kids"
          spaceTopClass="pt-95"
          sectionTitle="Best Products"
        /> */}
          {/* brand logo slider */}
          <BrandLogoSliderFour
          spaceBottomClass="pb-100"
          spaceTopClass="pt-100"
          noBorder={true}
        />
        {/* newsletter */}
        {/* <NewsletterThree
          spaceTopClass="pt-80"
          spaceBottomClass="pb-95"
          subscribeBtnClass="dark-red-subscribe"
        /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
