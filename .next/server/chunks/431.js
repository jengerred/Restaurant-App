exports.id = 431;
exports.ids = [431];
exports.modules = {

/***/ 4431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: ./components/cart.js
var cart = __webpack_require__(5376);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: ./components/dishes.js
var dishes = __webpack_require__(4578);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__(3805);
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);
// EXTERNAL MODULE: ./components/context.js
var context = __webpack_require__(7041);
;// CONCATENATED MODULE: ./components/restaurantList.js

var __jsx = (external_react_default()).createElement;








function RestaurantList(props) {
  const {
    0: restaurantID,
    1: setRestaurantID
  } = (0,external_react_.useState)(0);
  const {
    cart
  } = (0,external_react_.useContext)(context/* default */.Z);
  const {
    0: state,
    1: setState
  } = (0,external_react_.useState)(cart);
  const GET_RESTAURANTS = client_.gql`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
      }
    }
  `;
  const {
    loading,
    error,
    data
  } = (0,client_.useQuery)(GET_RESTAURANTS);
  if (loading) return __jsx("p", null, "Loading...");
  if (error) return __jsx("p", null, "ERROR");
  if (!data) return __jsx("p", null, "Not found");
  console.log(`Query Data: ${data.restaurants}`);
  let searchQuery = data.restaurants.filter(res => {
    return res.name.toLowerCase().includes(props.search);
  });
  let restId = searchQuery[0].id; // definet renderer for Dishes

  const renderDishes = restaurantID => {
    return __jsx(dishes/* default */.Z, {
      restId: restaurantID
    });
  };

  if (searchQuery.length > 0) {
    const restList = searchQuery.map(res => __jsx(external_reactstrap_.Col, {
      xs: "6",
      sm: "4",
      key: res.id,
      style: {
        marginTop: "2rem"
      }
    }, __jsx(external_reactstrap_.Card, {
      className: "cards",
      style: {
        margin: "0rem .5rem 20px 0.5rem",
        height: "100%"
      }
    }, __jsx(external_reactstrap_.CardImg, {
      top: true,
      style: {
        height: 200
      },
      src: `http://localhost:1337` + res.image.url
    }), __jsx(external_reactstrap_.CardBody, null, __jsx(external_reactstrap_.CardTitle, {
      style: {
        fontWeight: 'bold',
        fontSize: '20px',
        fontFamily: 'georgia'
      }
    }, res.name), __jsx(external_reactstrap_.CardText, null, res.description)), __jsx("div", {
      className: "card-footer"
    }, __jsx((external_react_anchor_link_smooth_scroll_default()), {
      href: "#dishes"
    }, " ", __jsx(external_reactstrap_.Button, {
      color: "info",
      onClick: () => setRestaurantID(res.id)
    }, "View Specials"))))));
    return __jsx(external_reactstrap_.Container, null, __jsx(external_reactstrap_.Row, {
      xs: "3"
    }, restList), __jsx("br", null), __jsx("br", null), __jsx("hr", null), __jsx("br", null), __jsx("br", null), __jsx(external_reactstrap_.Row, {
      id: "dishes",
      xs: "3",
      style: {
        marginTop: "1rem"
      }
    }, renderDishes(restaurantID)));
  } else {
    return __jsx("h1", null, " No Restaurants Found");
  }
}

/* harmony default export */ var restaurantList = (RestaurantList);
/*
 <Button color="info"  onClick={()=> setRestaurantID(res.id)} href="/menu" >   
                View Specials
              </Button>
*/

/*
import {gql,useQuery} from '@apollo/client';
import Dishes from "./dishes"
import {useContext, useState} from 'react';
import Link from "next/link";


import AppContext from "./context"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col} from "reactstrap";

function RestaurantList(props){
  const[restaurantID, setRestaurantID] = useState(0)
  const {cart } = useContext(AppContext);
  const [state, setState] = useState(cart)
  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(`Query Data: ${data.restaurants}`)


let searchQuery = data.restaurants.filter((res) =>{
    return res.name.toLowerCase().includes(props.search)
  })

let restId = searchQuery[0].id
 
// definet renderer for Dishes
  const renderDishes = (restaurantID) => {
    return    
    return (<Dishes restId={restaurantID}> </Dishes>)
  };
if(searchQuery.length > 0){
  const restList = searchQuery.map((res) => (
    <Col xs="6" sm="4" key={res.id}>
      <Card style={{ margin: "0 0.5rem 20px 0.5rem" }} onClick={()=> setRestaurantID(res.id)}>
        <CardImg
          top={true}
          style={{ height: 200 }}
          src={
          `http://localhost:1337`+ res.image.url
          }
        />
        <CardBody>
          <CardText>{res.description}</CardText>
        </CardBody>
        <div className="card-footer">
        <Button color="info" onClick={()=> setRestaurantID(res.id)}>{res.name}</Button>
        </div>
      </Card>
    </Col>
  ))

  return(

    <Container>
    <Row xs='3'>
      {restList}
    </Row>
  
    <Row xs='3'>
    {renderDishes(restaurantID)}
    </Row>

    </Container>
 
  )
} else {
  return <h1> No Restaurants Found</h1>
}
}
   export default RestaurantList

*/
;// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = (external_react_default()).createElement;







function Home() {
  const API_URL = "http://localhost:1337" || 0;
  console.log(`URL: ${API_URL}`);
  const {
    0: query,
    1: setQuery
  } = (0,external_react_.useState)("");
  const link = new client_.HttpLink({
    uri: `${API_URL}/graphql`
  });
  const cache = new client_.InMemoryCache();
  const client = new client_.ApolloClient({
    link,
    cache
  });
  return pages_jsx(client_.ApolloProvider, {
    client: client
  }, pages_jsx("div", {
    className: "search"
  }, pages_jsx("h1", {
    style: {
      margin: "20px"
    }
  }, " Local Restaurants"), pages_jsx(external_reactstrap_.InputGroup, null, pages_jsx(external_reactstrap_.InputGroupAddon, {
    addonType: "append"
  }, " Search "), pages_jsx(external_reactstrap_.Input, {
    onChange: e => setQuery(e.target.value.toLocaleLowerCase()),
    value: query
  })), pages_jsx("br", null)), pages_jsx(restaurantList, {
    search: query
  }));
}

/* harmony default export */ var pages = (Home);
/*
  <Row>
          <Cart> </Cart>
          </Row>
          */

/***/ })

};
;