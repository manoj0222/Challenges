import React from "react";
import { MenuItem, Menu,Image } from "semantic-ui-react";
import brand from "../../Assests/AdmeBrand.png";
import "../../styles/navbar.css"

export default function Nav() {
  return (
     <nav>
        <section className="brand">
            <Image src={brand} size="mini"/>
            <b>Adme.ai</b>
        </section>
     </nav>
  );
}
