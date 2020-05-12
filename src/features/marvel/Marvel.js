import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { charactersData, fetchData, loading } from "./marvelSlice";

const Marvel = () => {
  const data = useSelector(charactersData);
  const isLoading = useSelector(loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const apod = data.map((item) => (
    <div key={item.id}>
      <div>{item.name}</div>
      <div>
        <img src={`${item.thumbnail.path}/portrait_xlarge.jpg`} alt="" />
      </div>
    </div>
  ));

  return isLoading ? <div>Loading...</div> : <div>{apod}</div>;
};

export default Marvel;
