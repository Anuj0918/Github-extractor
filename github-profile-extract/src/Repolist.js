import React from 'react';
import RepoItem from './ReposItem';

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

