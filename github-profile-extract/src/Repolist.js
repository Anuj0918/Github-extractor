import React from 'react';
import RepoItem from './RepoItem';


// This component is responsible for displaying the list of repositories fetched from GitHub.
function Repolist({ repos }) {
  return (
    <div className="repository-list">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default Repolist;

