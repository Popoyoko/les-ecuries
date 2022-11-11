import "./index.css";

import image_grid_1 from "../../assets/image_grid_1.png";
import image_grid_2 from "../../assets/image_grid_2.png";
import image_grid_3 from "../../assets/image_grid_3.png";
import image_grid_4 from "../../assets/image_grid_4.png";
import image_grid_5 from "../../assets/image_grid_5.png";
import image_grid_6 from "../../assets/image_grid_6.png";
function Photo_Grid() {
  const PhotoGrid = [
    { photo: image_grid_1, alt: "image_grid" },
    { photo: image_grid_2, alt: "image_grid" },
    { photo: image_grid_3, alt: "image_grid" },
    { photo: image_grid_4, alt: "image_grid" },
    { photo: image_grid_5, alt: "image_grid" },
    { photo: image_grid_6, alt: "image_grid" },
  ];
  return (
    <div className="photo-grid">
      {PhotoGrid.map((id) => (
        <div key={id}>
          <img src={id.photo} alt={id.alt} />
        </div>
      ))}
    </div>
  );
}

export default Photo_Grid;
