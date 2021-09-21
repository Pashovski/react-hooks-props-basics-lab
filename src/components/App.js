import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";
// pass this data down as props to the child component(s) that need it!

console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home color={user.color} username={user.name} city={user.city} />
      <About links={user.links} bio={user.bio}/>
     
    </div>
  );
}

export default App;
