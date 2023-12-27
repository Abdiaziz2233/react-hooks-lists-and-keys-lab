import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const linkAnchor = links.map((link)=>{
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>{linkAnchor}</nav>;
}

export default NavBar;
