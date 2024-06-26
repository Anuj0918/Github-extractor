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
/* target  attribute direct user to open link in new tab 
noopener: ensures that the new page (opened with target="_blank") does not have access to the window.opener property.
noreferrer: This value ensures that no referrer information is passed to the new page. new page does not know where the link was clicked from.
  */
export default RepoItem;
