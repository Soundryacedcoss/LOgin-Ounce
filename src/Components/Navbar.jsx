import { Button, Card, FlexLayout, PageHeader } from "@cedcommerce/ounce-ui";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import logo from "../image/logo.jpg";
import store from "../Store";
import { Carousell } from "./Carousell";
import { Product } from "./Product";
export const Navbar = () => {
  const navigate = useNavigate();
  const data = useSelector((store) => store.DataSlice);
  const CartHandler = () => {
    navigate("/Cart");
  };
  return (
    <>
      <div className="Navbar_container">
        <Card>
          <PageHeader
            action={
              <div style={{ marginRight: "35%" }}>
                <FlexLayout spacing="loose" wrap="noWrap">
                  {/* <Button onClick={function noRefCheck() {}} type="outlined"> */}
                  <i
                    class="fas fa-user-alt"
                    style={{ fontSize: "30px", color: "#d45f4d" }}
                  ></i>
                  {/* </Button> */}
                  {/* <Button onClick={function noRefCheck() {}} type="Outlined"> */}
                  <i
                    class="material-icons"
                    style={{ fontSize: "35px", color: "#fbc259" }}
                  >
                    home
                  </i>
                 
                  <i
                    class="fas fa-shopping-cart"
                    onClick={CartHandler}
                    style={{ fontSize: "30px", color: "dodgerblue" }}
                  ></i>
                  {data.cart.length}
                </FlexLayout>
              </div>
            }
            title={<img src={logo} alt="" className="logo" />}
          />
        </Card>
      </div>
      <Carousell />
      <Product />
    </>
  );
};
