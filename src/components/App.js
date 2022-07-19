import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);
/*
bio: "I made this!"
city: "New York"
color: "firebrick"
links: {github: 'https://github.com/liza', linkedin: 'https://www.linkedin.com/in/liza/'}
name: "Liza"*/

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color}/>
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

export default App;
