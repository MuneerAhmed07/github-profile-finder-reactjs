import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import { useState } from "react"

function App() {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  console.log(user);

  const fetchGithubProfile = async (username) => {
    setError(null);
    setUser(null);

    try{
      const response = await fetch(`https://api.github.com/users/${username}`);
      if(!response.ok) {
        throw new Error("User not Found");
      }
      const data = await response.json();
      setUser(data);
    } catch(error) {
      setError(error.message);
    }
  }

  return (
    <>
      <div className="app">
        <h1>GitHub Profile Finder</h1>
        <SearchBar OnSearch= {fetchGithubProfile} />
        {error && <p className="error">{error}</p>}
        {user && <ProfileCard user={user} />}
      </div>
    </>
  )
}

export default App
