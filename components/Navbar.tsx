import React, { useState } from "react";

function Navbar() {
  const [display, Setdisplay] = useState(false);

  const ondisplay = () => {
    Setdisplay(!display);
    console.log("its working");
  };

  return (
    <div className="Navcontainer">
      <div className="Navbar">
        <div className="Logo">
          <h1>MyBookSite</h1>
        </div>
        <div className="Texts">
          <ul>
            <li>Anasayfa</li>
            <li onClick={ondisplay}>Yazılar</li>
            <li>Kitaplar</li>
            <li>Giriş</li>
          </ul>
        </div>
      </div>
      <div className="menuflex">
        <div
          className="menu1"
          style={{
            display: display ? "block" : "none",
          }}
        >
          <div className="background1">
            <ul>
              <li>Bu Bir Menüdür</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
