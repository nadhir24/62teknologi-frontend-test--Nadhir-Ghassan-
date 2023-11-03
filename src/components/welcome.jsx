import { Button } from "flowbite-react";
import Eyefind from "../assets/eyefind.png";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="bg-blue-200">
      <h1 className="h-96">welcome to </h1>
      <img className="mx-auto" src={Eyefind} alt="" />
    
    </div>
  );
}
