import React from "react";
import { AlignJustify, Search } from "react-feather";
import { Link } from "react-router-dom";
import Profile from "../../../assets/profile.png";
const Navbar = () => {
  return (
    <div className="flex py-3">
      <nav class="navbar navbar-light bg-white justify-content-between">
        <Link class="navbar-brand">
          {" "}
          <AlignJustify />{" "}
        </Link>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            type="hidden"
          />
          <button
            class="btn bg-white
           my-2 my-sm-0"
            type="submit"
          >
            <Search />
          </button>
          <img
            src={Profile}
            alt=""
            style={{ height: "40px", borderRadius: "100%", marginLeft: "20px" }}
          />
        </form>
      </nav>
      <img src="" alt="" />
    </div>
  );
};

export default Navbar;
