import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, handleClickOnImage  }) {
  return (
    <ul className={css.gallery} id="gallery" >
      {items.map((item) => {
        return (
          <li key={item.id} className={css.galleryItem}>
            <ImageCard data={item} onClick={handleClickOnImage} />
          </li>
        );
      })}
    </ul>
  );
}
