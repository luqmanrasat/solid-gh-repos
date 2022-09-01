import { Component, createSignal, For } from 'solid-js';
import RepoCard from '../components/RepoCard';
import { Repo } from '../types';

const [savedRepos, setSavedRepos] = createSignal<Repo[]>([]);

const SavedRepos: Component = () => {
  return (
    <div>
      <h2>Your Saved Repos</h2>
      <For each={savedRepos()}>{(repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export default SavedRepos;
export { savedRepos, setSavedRepos };
