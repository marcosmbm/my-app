import React,{useState, useEffect} from "react";

import './App.css';

import Repositories from "./components/Repositories";

function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/marcosmbm/repos')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setRepositories(json)
    })

  }, []);

  return (
    <div className="container">
      <h1>Meus Repositórios</h1>

      <Repositories
        repositories={repositories}
      />
    </div>
  );
}

export default App;
