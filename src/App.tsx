import { Component, createEffect, createResource, createSignal } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import SavedRepos from "./pages/SavedRepos";

const fetchRepo = async (username: string) => {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=created`
  );
  return res.json();
};

const [username, setUsername] = createSignal("luqmanrasat");
const [repos] = createResource(username, fetchRepo);

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
export { username, setUsername, repos };
