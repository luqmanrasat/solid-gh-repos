import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import SavedRepos from "./pages/SavedRepos";

const App: Component = () => {
  return (
    <div class="container mx-auto">
      <Nav />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/savedrepos" component={SavedRepos} />
      </Routes>
    </div>
  );
};

export default App;
