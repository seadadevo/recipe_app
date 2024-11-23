import { Link } from "react-router-dom";
import CustomImage from "./CustomImage";


const images = [
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
    "/img/gallery/img_9.jpg",
]
export default function HeroSec() {
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What Are We About</h1>
        <p className="info">
          FoodiesHub is a place where you can please your soul and tummy With
          delicious food recipes of all cuisine. And our service IS absolutely
          free. So start exploring now
        </p>
        <button className="btn"><Link className="btn-link" to = "/recipes">Explore Now</Link></button>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
            <CustomImage key = {index} imgSrc = {src} pt ={"90%"}/>
        ) )}
      </div>
    </div>
  );
}
