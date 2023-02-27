import { Button, Card, FlexLayout, Loader } from "@cedcommerce/ounce-ui";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, fetchProducts } from "../slice/DataSlice";

export const Product = () => {
  const Data = useSelector((store) => store.DataSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(Data);
  const [temp, setTemp] = useState([]);
  const AddtoCartHandler = (e) => {
    console.log(e);
    Data.products.products.map((val) => {
      if (val.id === e) {
        temp.push(val);
      }
      setTemp([...temp, val]);
      dispatch(addCart(temp));
    });
    // Data.products.products.forEach((element) => {
    //   if (element.id === parseInt(e.target.value)) {
    //     console.log("hd");
    //     var obj = {
    //       name: element.title,
    //       id: element.id,
    //       stock: element.stock,
    //       price: element.price,
    //       image: element.thumbnail,
    //       quantity: 1,
    //     };
    //     cartArr.push(obj);
    //     setCartArr([...cartArr]);
    //     dispatch(addCart(cartArr));
    //   }
    // });
  };
  return (
    <div style={{ marginLeft: "9%" }}>
      {Data.loader ? (
        <>
          <Loader title="Please wait while we are loading" />
        </>
      ) : (
        <Card>
          <div
            className="flexcontainer"
            style={{
              height: "200px",
            }}
          >
            <FlexLayout
              childWidth="none"
              direction="none"
              directionMob="none"
              directionTab="none"
              halign="none"
              halignMob="none"
              halignTab="none"
              order="Order"
              spacing="extraLoose"
              valign="none"
              valignMob="none"
              valignTab="none"
              wrap="wrap"
              wrapMob="none"
              wrapTab="none"
            >
              {Data.products.products !== undefined ? (
                Data.products.products.map((val) => (
                  <Card cardType="Bordered">
                    <img src={val.thumbnail} alt="" className="product_img" />
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "22px",
                        marginTop: "5%",
                      }}
                      className="shadow"
                    >
                      {val.title}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        columnGap: "70%",
                        fontSize: "20px",
                      }}
                      className="Description"
                    >
                      <p className="Description">{val.rating}</p>
                      <p style={{ float: "right" }}>₹{val.price}</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <Button
                        content="Add To Cart"
                        type="Warning"
                        length="Normal"
                        value={val.id}
                        onClick={() => AddtoCartHandler(val.id)}
                      />
                    </div>
                  </Card>
                ))
              ) : (
                <Loader title="Please wait while we are loading" />
              )}
            </FlexLayout>
          </div>
        </Card>
      )}
    </div>
  );
};
