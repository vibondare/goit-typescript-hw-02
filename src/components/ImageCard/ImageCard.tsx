import css from "./ImageCard.module.css";
import { unsplashImageData } from "../../images-api";

type Props = {
  data: unsplashImageData;
  onClick: (imageData: unsplashImageData) => void;
};

export default function ImageCard({ data, onClick }: Props) {
  return (
    <div>
      <img
        src={data.urls.small}
        className={css.image}
        alt={data.alt_description}
        onClick={() => onClick(data)}
        id={data.id}
      />
    </div>
  );
}
