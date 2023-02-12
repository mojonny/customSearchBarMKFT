import "./styles.css";
import arrow from "./DropArrowBlk.png";
import search from "./LookinGlass.png";

export default function App() {
  return (
    <div className="App">
      <div className="search-bar">
        <div id="select">
          <p>All </p>
          <ul>
            <li class="options">All Categories</li>
            <li class="options">Deals</li>
            <li class="options">Cars & Vehicles</li>
            <li class="options">Furniture</li>
            <li class="options">Electronics</li>
            <li class="options">Real Estate</li>
          </ul>
        </div>
        <div className="main-search">
          <input type="text" placeholder=" Search on MKTFY" />
          <img className="looking-glass" src={search} alt="looking glass" />
        </div>
        <div id="select">
          <img src={arrow} alt="arrow" />
          <p>Calgary</p>
          <ul>
            <li class="mini-search">
              <img
                className="mini-looking-glass"
                src={search}
                alt="looking glass"
              />
              <input type="text" placeholder="Search city" />
            </li>
            <li class="options">Calgary</li>
            <li class="options">Brooks</li>
            <li class="options">Camrose</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
