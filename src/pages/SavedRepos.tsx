import { Component, createSignal, For, Show } from 'solid-js';
import RepoCard from '../components/RepoCard';
import { Repo } from '../types';

const storedRepos: Repo[] = JSON.parse(
  localStorage.getItem('savedRepos') || '[]'
);
const [savedRepos, setSavedRepos] = createSignal<Repo[]>(storedRepos);

const SavedRepos: Component = () => {
  return (
    <div>
      <h2>Your Saved Repos</h2>
      <Show when={savedRepos().length > 0} fallback={<p>No saved repository.</p>}>
        <For each={savedRepos()}>{(repo) => <RepoCard repo={repo} />}</For>
      </Show>
    </div>
  );
};

export default SavedRepos;
export { savedRepos, setSavedRepos };
