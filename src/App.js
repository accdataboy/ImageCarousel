import React from "react";
import "./App.css";
import Carousel from "./Carousel";
const images = [
  "https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/462711731_10162170178798523_6269833293639566319_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=b2EcKxd98BcQ7kNvgG2G9Ju&_nc_ht=scontent-den2-1.xx&_nc_gid=AfmNLPoPa_otV_jCj01hLOk&oh=00_AYAUXtPKgAPNxGci-avny89OhxRa4xPbOrWQsAz5-llgpA&oe=6711D7D3",
  "https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/462805903_10162170178838523_2224077981068926687_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iGZ_BWYo7skQ7kNvgH7_XiE&_nc_ht=scontent-den2-1.xx&_nc_gid=AKbznKSX8gjqCSnXeMWKgrs&oh=00_AYCTrACUjqUKNW-XnF9WYuMIY9_UwH9IOO80194fXtGN-Q&oe=6711B1D4",
  "https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/462705755_10162170178773523_3128137415058875836_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=atBNpc5iKZcQ7kNvgGiCeVF&_nc_ht=scontent-den2-1.xx&_nc_gid=AnQ1oYZFOycvOmxeDYlvWzl&oh=00_AYCPtfpRbZzV-7TCZ2fBB480tOYYiukRF518zCYva2mWmA&oe=6711E001",
  "https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/462043804_10162155715548523_8785031694217029753_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yBvg-sxcTF0Q7kNvgG-u0IN&_nc_ht=scontent-den2-1.xx&_nc_gid=Awfy46hsQ22AWTJ1IoEBQap&oh=00_AYB1YGtrQ2Wq9Raqm4nvIo9MzUZeTXdNcVOl8TU0aW9HPg&oe=6711D8F6",
  "https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/461983667_10162154048208523_4281176579451641054_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=zQzChDmJT_kQ7kNvgFSkGrO&_nc_ht=scontent-den2-1.xx&_nc_gid=Ax8ntjxCDMlC4bfCyGZo3z3&oh=00_AYAkn0GBuOjQPjF_1_BU5k4-oV0wSaR8jVWVRkxPx13LSA&oe=6711B8A3",
  "https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/461982002_10162153883873523_8656916537879575721_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=S-ZLPvI-8HYQ7kNvgGOoKb1&_nc_ht=scontent-den2-1.xx&_nc_gid=AFvjz7g3WLLRJRhv7oBU9Jp&oh=00_AYBk8K63fvE3tcqJhm7CSTIw0N7yTgwFo-d4w_1qXvWXMQ&oe=6711ABBF"
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>First Custom Carousel using React and Framer Motion</h1>
      </header>
      <main>
        <Carousel images={images} />
      </main>
    </div>
  );
}
export default App;
