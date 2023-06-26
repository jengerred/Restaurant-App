exports.id = 578;
exports.ids = [578];
exports.modules = {

/***/ 4578:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8074);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5376);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7041);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3805);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6099);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








function Dishes({
  restId
}) {
  const {
    0: restaurantID,
    1: setRestaurantID
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    addItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z);
  const GET_RESTAURANT_DISHES = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    loading,
    error,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_RESTAURANT_DISHES, {
    variables: {
      id: restId
    }
  });
  if (loading) return __jsx("p", null, "Loading...");
  if (error) return __jsx("p", null, "ERROR here");
  if (!data) return __jsx("p", null, "Not found");
  let restaurant = data.restaurant;

  if (restId > 0) {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("h1", {
      style: {
        marginTop: "20px",
        marginRight: "10px",
        fontFamily: 'georgia'
      }
    }, restaurant.name), __jsx("h1", {
      style: {
        marginTop: "20px",
        fontFamily: "times-italic"
      }
    }, " ~ Specials"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Row, null, restaurant.dishes.map(res => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
      xs: "6",
      sm: "4",
      style: {
        marginTop: "2rem"
      },
      key: res.id
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {
      className: "cards",
      style: {
        maxWidth: "300px"
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardImg, {
      top: true,
      style: {
        height: 200
      },
      src: `http://localhost:1337${res.image.url}`
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardBody, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardTitle, {
      style: {
        fontWeight: 'bold',
        fontSize: '20px'
      }
    }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardText, null, res.description), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.CardText, null, "$", res.price)), __jsx("div", {
      className: "card-footer"
    }, __jsx((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: "#cart"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {
      color: "info",
      outline: true,
      onClick: () => addItem(res)
    }, "+ Add To Cart")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {
      id: "cart"
    }, __jsx(_cart__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, null, " "))));
  } else {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, " ", __jsx("h1", null, " Click "), " ", __jsx("h1", {
      className: "text-info",
      style: {
        marginRight: "10px",
        marginLeft: "10px"
      }
    }, "View Specials"), __jsx("h1", null, "to see the dishes"));
  }
}

/* harmony default export */ __webpack_exports__["Z"] = (Dishes);
/*
import {useRouter} from "next/router"
import {gql,useQuery} from '@apollo/client';
import {useState, useContext} from 'react'
import Cart from "./cart"
import AppContext from "./context"
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col} from "reactstrap";
function Dishes({restId}){
  const [restaurantID, setRestaurantID] = useState()
  const {addItem} = useContext(AppContext)

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

  const router = useRouter();

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restId},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;

  let restaurant = data.restaurant;

  if (restId > 0){

    return (
      <>
   
      <h1 style={{marginTop: "20px",marginRight: "10px", fontFamily: 'georgia'}}>{restaurant.name}</h1><h1 style={{marginTop: "20px", fontFamily: "times-italic"}}> ~ Specials</h1>
        <Row>
          {restaurant.dishes.map((res) => (
            <Col xs="6" sm="4" style={{ marginTop: "2rem"}} key={res.id}>
              <Card className="cards" style={{maxWidth: "300px"}} >
                <CardImg
                  top={true}
                  style={{ height: 200 }}
                  src={`http://localhost:1337${res.image.url}`}
                />
                <CardBody>
                  <CardTitle style={{ fontWeight: 'bold', fontSize: '20px' }}>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                 <CardText>${res.price}</CardText>
                </CardBody>
                <div  className="card-footer">
                <AnchorLink href='#cart'><Button color="info"
                    outline
                   
                    onClick = {()=> addItem(res)}
                  >
                    + Add To Cart
                  </Button>
                  </AnchorLink>
                </div>
              </Card>
              
            </Col>

             
          
          ))}
             
          <Col id="cart">
             <Cart> </Cart>
             </Col>
            </Row>
           
        </>
        )}
        else{
          return <> <h1> Click </h1> <h1 className="text-info" style={{marginRight: "10px", marginLeft: "10px"}}>View Specials</h1>
          <h1>to see the dishes</h1></>
        }
    }
    export default Dishes
*/

/*

import {useRouter} from "next/router"
import {gql,useQuery} from '@apollo/client';
import {useState, useContext} from 'react'
import Cart from "./cart"
import AppContext from "./context"
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col} from "reactstrap";
function Dishes({restId}){
  const [restaurantID, setRestaurantID] = useState()
  const {addItem} = useContext(AppContext)

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

  const router = useRouter();

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restId},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;

  let restaurant = data.restaurant;

  if (restId > 0){

    return (
      <>
   
      <h1 style={{marginTop: "20px",marginRight: "10px", fontFamily: 'georgia'}}>{restaurant.name}</h1><h1 style={{marginTop: "20px", fontFamily: "times-italic"}}> ~ Specials</h1>
        <Row>
          {restaurant.dishes.map((res) => (
            <Col xs="6" sm="4" style={{ marginTop: "2rem"}} key={res.id}>
              <Card className="cards" style={{maxWidth: "300px"}} >
                <CardImg
                  top={true}
                  style={{ height: 200 }}
                  src={`http://localhost:1337${res.image.url}`}
                />
                <CardBody>
                  <CardTitle style={{ fontWeight: 'bold', fontSize: '20px' }}>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                 <CardText>${res.price}</CardText>
                </CardBody>
                <div  className="card-footer">
                <AnchorLink href='#cart'><Button color="info"
                    outline
                   
                    onClick = {()=> addItem(res)}
                  >
                    + Add To Cart
                  </Button>
                  </AnchorLink>
                </div>
              </Card>
              
            </Col>

             
          
          ))}
             
          <Col id="cart">
             <Cart> </Cart>
             </Col>
            </Row>
           
        </>
        )}
        else{
          return <> <h1> Click </h1> <h1 className="text-info" style={{marginRight: "10px", marginLeft: "10px"}}>View Specials</h1>
          <h1>to see the dishes</h1></>
        }
    }
    export default Dishes

*/

/*

import {useRouter} from "next/router"
import {gql,useQuery} from '@apollo/client';
import {useState, useContext} from 'react'
import AppContext from "./context"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col} from "reactstrap";


function Dishes({restId}){
  const [restaurantID, setRestaurantID] = useState()
  const {addItem} = useContext(AppContext)

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

  const router = useRouter();

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restId},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;

  let restaurant = data.restaurant;

  if (restId > 0){

    return (
      <>
       <h1>{restaurant.name}</h1>
        <Row>
          {restaurant.dishes.map((res) => (
            <Col xs="6" sm="4" key={res.id}>
              <Card style={{ margin: "0 10px", width: "300px"}}>
                <CardImg
                   top={true}
                   style={{ height: 200 }}
                  src={`http://localhost:1337${res.image.url}`}
                />
                <CardBody>
                  <CardTitle style={{ fontWeight: 'bold' }}>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                  <CardText>${res.price}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Button color="info"
                    outline
                    color="primary"
                    onClick = {()=> addItem(res)}
                  >
                    + Add To Cart
                  </Button>
                  
                </div>
              </Card>
            </Col>
          ))}
       
        </>
        )}
        else{
          return <> <h1> Click the</h1> <h1 className="text-info" style={{marginRight: "10px", marginLeft: "10px"}}>restaurant</h1>
         <h1>to see the dishes</h1></>
        }
    }
    export default Dishes;

    */

/***/ })

};
;