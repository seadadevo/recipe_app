import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons"
export default function PreviousSearches() {
  const searches = [
    "pizza",
    "burger",
    "cookies",
    "juice",
    "biriyani",
    "salad",
    "ice cream",
    "lasagna",
    "pudding",
    "soup",
    "fish",
  ];

  return (
    <div>
      <div className="prev-search section">
        <h2>Previous Searches</h2>
        <div className="prev-search-container">
          {searches.map((search, index) => (
            <div
              key={index}
              style={{ animationDelay: index * 0.1 + "s" }}
              className="search-item"
            >
              {search}
            </div>
          ))}
        </div>
        <div className = "search-box">
            <input type = "text" placeholder="Search.."/>
            <button className="btn">
                <FontAwesomeIcon icon = {faSearch}/>
            </button>
        </div>
      </div>
    </div>
  );
}
