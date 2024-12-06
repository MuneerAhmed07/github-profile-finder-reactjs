import { useState } from "react"

const SearchBar = ({OnSearch}) => {

    const [username, setUserName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(username.trim()) {
            OnSearch(username)
        } else {
            alert("Please enter a username!");
        }
    }

  return (
    <>
     <form className='search-bar' onSubmit={handleSubmit}>
        <input type="text" 
            placeholder='Enter GitHub username'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            autoComplete='off'
        />
        <button type='submit'>Search</button>
    </form> 
    </>
  )
}

export default SearchBar
