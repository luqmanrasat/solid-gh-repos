import { Component, ComponentProps } from "solid-js";
import { savedRepos, setSavedRepos } from '../pages/SavedRepos';
import { Repo } from '../types';

interface RepoCardProps extends ComponentProps<any> {
  repo: Repo;
}

const saveRepo = (repo: Repo) => {
  setSavedRepos([repo, ...savedRepos()]);
};

const RepoCard: Component<RepoCardProps> = ({ repo }) => {
  return (
    <div class="card mb-2">
      <div class="card-header">&#11088; stars: {repo.stargazers_count}</div>
      <div class="card-body">
        <a
          class="card-title"
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
        >
          <strong>{repo.owner?.login}</strong>/{repo.name}
        </a>
        <p class="card-text">{repo.description}</p>
        <button class="btn btn-green my-3" onClick={ () => saveRepo(repo)}>Save</button>
      </div>
    </div>
  );
};

export default RepoCard;
