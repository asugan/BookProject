import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="Navcontainer">
      <div className="Navbar">
        <div className="Logo">
          <h1>MyBookSite</h1>
        </div>
        <div className="Texts">
          <ul>
            <li>Anasayfa</li>
            <li className="dropdown">
              <a href="#">Yazilar</a>
              <ul className="uldown">
                <li>
                  <a href="#">Fütuhat</a>
                </li>
                <li>
                  <a href="#">Niyazi</a>
                </li>
                <li>
                  <a href="#">Füsus</a>
                </li>
              </ul>
            </li>
            <li>Kitaplar</li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
