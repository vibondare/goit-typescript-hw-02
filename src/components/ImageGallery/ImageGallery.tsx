import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { unsplashImageData } from "../../images-api";

type Props = {
  items: unsplashImageData[];
  handleClickOnImage: (imageData: unsplashImageData) => void;
};

export default function ImageGallery({ items, handleClickOnImage }: Props) {
  return (
    <ul className={css.gallery} id="gallery">
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
