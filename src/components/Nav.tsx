import { NavLink } from "@solidjs/router";
import { Component } from "solid-js";

const Nav: Component = () => {
  return (
    <nav class="mt-5 mb-3">
      <NavLink class="btn btn-primary mr-2" href="/" activeClass="btn-success" end>Home</NavLink>
      <NavLink class="btn btn-primary mr-2" href="/savedrepos" activeClass="btn-success">Saved ~ 5</NavLink>
    </nav>
  );
};

export default Nav;