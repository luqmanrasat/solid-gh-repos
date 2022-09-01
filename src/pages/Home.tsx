import { Component, For, Suspense } from "solid-js";
import { repos, setUsername, username } from "../App";
import RepoCard from "../components/RepoCard";

const Home: Component = () => {
  let usernameInput: HTMLInputElement;

  const submitUsername = (event: Event) => {
    event.preventDefault();
    setUsername(usernameInput.value);
  };

  return (
    <div>
      <form class="mb-3" onSubmit={(event) => submitUsername(event)}>
        <input
          ref={usernameInput!}
          class="p-1 align-middle"
          type="text"
          required
        />
        <button class="btn btn-dark align-middle ml-3" type="submit">
          Fetch
        </button>
      </form>

      <h3 class="mb-3">Github repos for {username()}</h3>

      <Suspense fallback={<p>Fetching...</p>}>
        <For each={repos()}>{(repo) => <RepoCard repo={repo} />}</For>
      </Suspense>
    </div>
  );
};

export default Home;
