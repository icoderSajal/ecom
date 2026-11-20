import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Abhiyaan Sanitary and Plumber Service is a trusted plumbing service
            provider in Bareilly. We serve Durga Nagar and nearby areas with
            fast, affordable, and reliable solutions. If you are searching for a
            plumber near you, we are ready to help.is a newly established shop
            led by Sajal Bajaj, built on years of hands-on experience in
            sanitary and plumbing work.We specialize in PVC and CPVC pipes,
            ceramic sanitary items, wash basins, English seats, pipe fittings,
            and modern bathroom accessories. Our experience
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9205 448 629</li>
            <li>abhiyaansanitary@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ abhiyaansanitary.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
