import { Component, createEffect } from "solid-js";
import { repos, setUsername, username } from "../App";

const Home: Component = () => {
  let usernameInput: HTMLInputElement;

  const submitUsername = (event: Event) => {
    event.preventDefault();
    setUsername(usernameInput.value);
  };

  createEffect(() => {
    console.log(repos());
  });

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
      <h3>Github repos for {username()}</h3>
    </div>
  );
};

export default Home;
