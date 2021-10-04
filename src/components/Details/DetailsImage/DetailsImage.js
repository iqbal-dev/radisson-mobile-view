import React from "react";
import ReactImageMagnify from "react-image-magnify";
import { useParams } from "react-router-dom";

const DetailsImage = ({ product }) => {
  const [rootImage, setRootImage] = React.useState("");
  const { id } = useParams();
  const detailsProduct = product.filter(
    (data, index) => index + 1 === Number(id)
  );
  console.log(detailsProduct);
  const groupImageLength = detailsProduct[0].groupImage.length;
  React.useEffect(() => {
    setRootImage(
      detailsProduct[0].groupImage?.length &&
        detailsProduct[0]?.groupImage[0]?.image
    );
  }, [groupImageLength, detailsProduct]);
  const handleRootImage = (e) => {
    setRootImage(e);
  };
  return (
    <div className="my-5">
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Single Page Image",
            isFluidWidth: true,
            src: rootImage,
            height: 100,
          },
          largeImage: {
            src: rootImage,
            width: 1800,
            height: 1400,
          },
          enlargedImageContainerDimensions: {
            width: "190%",
            height: "100%",
          },
          enlargedImageContainerStyle: {
            zIndex: 9,
            backgroundColor: "white",
            objectFit: "contain",
          },
          className: "singlePageRootImage",
        }}
      />
      <div className="row justify-content-between">
        {detailsProduct[0].groupImage?.length &&
          detailsProduct[0].groupImage?.map((image, index) => (
            <div
              className="col-2"
              onClick={(e) => handleRootImage(image.image)}
              style={{
                position: "relative",
                boxShadow:
                  rootImage === image.image ? "#d9d2d2 0 0 5px 5px" : "none",
                borderRadius: "10px",
              }}
              key={index}
            >
              <img
                className="image-fluid"
                style={{ height: "50px" }}
                src={image?.image}
                alt="product"
              />
              {rootImage === image.image ? null : (
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "rgb(231 231 231 / 42%)",
                    borderRadius: "10px",
                    height: "100%",
                    width: "100%",
                    left: "0",
                    top: "0",

                    display: "block",
                  }}
                ></div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default DetailsImage;
