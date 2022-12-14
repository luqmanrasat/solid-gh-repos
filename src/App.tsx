import { Component, createEffect, createResource, createSignal } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import SavedRepos from "./pages/SavedRepos";
import { Repo } from './types';

const fetchRepo = async (username: string): Promise<Repo[]> => {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=created`
  );
  const data = await res.json();
  return data;
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
