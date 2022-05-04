import React from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { RotatingLines } from "react-loader-spinner";
import "./loading.css";

export default function Loading(){
  return(
   <div>
    <div className=" center-loader ">
    <RotatingLines width="100" />
    </div>
   </div>
  );
}