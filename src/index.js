import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <>
    <div className="heading">
      <h1>Image Gallery</h1>
      <p>Refresh page to get new images</p>
    </div>
    <div className="images">
      <img src="https://picsum.photos/200/300" alt="image1" />
      <img src="https://picsum.photos/210/300" alt="image2" />
      <img src="https://picsum.photos/220/300" alt="image3" />
      <img src="https://picsum.photos/230/300" alt="image4" />
      <img src="https://picsum.photos/250/300" alt="image5" />
    </div>
  </>,
  document.getElementById("root"),
);
