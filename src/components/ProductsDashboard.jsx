import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getproductsData } from "../Redux/actions";

export const Products = () => {
  const {data} = useSelector((store)=>store)
  const dispatch = useDispatch()
  // to get all products list on component mounts
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    getData()
  }, [dispatch]);

  const getData = ()=>{
    
    axios.get("https://movie-fake-server.herokuapp.com/products").then(({data})=>{
      dispatch(getproductsData(data))
      console.log(data)
    })
  }
  
 
  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
  };
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        
        {/* map throught th products  list and display the results */}
        {data &&
          data.map((el) => {
            const  { image, id ,price, category, title, brand } = el
            return <div>
               <img src={el.image} alt="" />
               <p>{el.title}</p>
               <h4>{el.price}</h4>
              {/* display the results here */}</div>;
          })}
      </div>
    </>
  );
};
