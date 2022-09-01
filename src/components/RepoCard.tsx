import { Component, ComponentProps } from "solid-js";

export type Repo = {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: string;
  owner: {
    login: string;
  };
};

interface RepoCardProps extends ComponentProps<any> {
  repo: Repo;
}

const RepoCard: Component<RepoCardProps> = ({ repo }) => {
  return (
    <div class="card">
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
        <button class="btn btn-success">Save</button>
      </div>
    </div>
  );
};

export default RepoCard;
