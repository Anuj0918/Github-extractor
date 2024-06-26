import Repolist from "./Repolist";
import React , { useState} from "react";

// primary purpose of Main component is to enable the application to fetch data from a(GitHub API) based on user input, 
const Main = () => {
    const [username, setUsername] = useState('');
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState('');
  
    const fetchRepos = async () => {
      setError('');
      setRepos([]);
  
      if (!username) {
        setError('Please enter a username');
        return;
      }
  
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      }
    };
    return (
        <div className="main">
      <h1>GitHub Repository Fetcher</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={fetchRepos}>Fetch Repositories</button>
      {error && <p className="error">{error}</p>}
      <Repolist repos={repos} />
    </div>
  );
};



export default Main;
