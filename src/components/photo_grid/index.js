import "./index.css";

import image_desktop_1 from "../assets/image_desktop_1.png";
import image_desktop_2 from "../assets/image_desktop_2.png";
import image_desktop_3 from "../assets/image_desktop_3.png";
import image_desktop_4 from "../assets/image_desktop_4.png";
import image_desktop_5 from "../assets/image_desktop_5.png";
import image_desktop_6 from "../assets/image_desktop_6.png";
function Photo_Grid() {
  const PhotoGrid = [
    { photo: image_desktop_1, alt: "image_grid" },
    { photo: image_desktop_2, alt: "image_grid" },
    { photo: image_desktop_3, alt: "image_grid" },
    { photo: image_desktop_4, alt: "image_grid" },
    { photo: image_desktop_5, alt: "image_grid" },
    { photo: image_desktop_6, alt: "image_grid" },
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
