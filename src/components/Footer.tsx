/** @format */

"use client";
import React from "react";

const Footer = () => {
  return (
    <div >
      <footer className="footer pb-20 p-10 bg-[#212731] text-base-content">
        <nav>
          <h6 className="footer-title">Categories</h6>
          <a className="link link-hover">Web builders</a>
          <a className="link link-hover">Date Center</a>
          <a className="link link-hover">Robotics-automation</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Services</a>
        </nav>
      
        <form>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@email.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Sign Up</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
