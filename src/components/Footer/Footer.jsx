import React from "react";
import facebook from "../../assets/social/facebook.svg";
import twitter from "../../assets/social/twitter.svg";
import instagram from "../../assets/social/instagram.svg";
import logoIcon from "/assets/green-home.png";
import { NavLink } from "react-router";
function Footer() {
  return (
    <footer className=" bg-gray-900 rounded-md relative  text-white py-10 px-3 mt-20 md:p-10">
      <div className="footer sm:footer-horizontal max-w-[1400px] mx-auto py-10">
        <aside className="">
          <div>
            <div className="navbar-start gap-2">
              <img className="w-12" src={logoIcon} alt="" />
              <NavLink
                to="/"
                className="font-bold text-slate-50 text-xl md:text-2xl"
              >
                EcoBari
              </NavLink>
            </div>
            <p className="text-sm mb-5 ">
              Your gardening community for a greener tomorrow.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <ul className="text-sm space-y-1">
                <li>📍 Dhaka, Bangladesh</li>
                <li>📞 +880 1234-567890</li>
                <li>✉️ support@ecobari.com</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-x-4">
            <img
              className="w-8 h-10 cursor-pointer hover:scale-105 transition-transform duration-500"
              src={facebook}
              alt=""
            />
            <img
              className="w-7 h-10 cursor-pointer hover:scale-105 transition-transform duration-500"
              src={twitter}
              alt=""
            />
            <img
              className="w-7 h-10 cursor-pointer hover:scale-105 transition-transform duration-500"
              src={instagram}
              alt=""
            />
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Features</h6>
          <a className="link link-hover">Join Events </a>
          <a className="link link-hover">Share Tips</a>
          <a className="link link-hover">Explore Other Tips</a>
          <a className="link link-hover">And More</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Explore Gardeners</a>
          <a className="link link-hover">Explore Tips</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <aside className="max-w-[1400px] mx-auto mt-10">
        <p className="text-center text-gray-500">
          Copyright © {new Date().getFullYear()} - All right reserved by EcoBari
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
