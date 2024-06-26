import React from 'react';

function RepoItem({ repo }) {
  return (
    <div className="repository-item">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        {repo.name}
      </a>
    </div>
  );
}

export default RepoItem;
