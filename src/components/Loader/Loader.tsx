import css from "./Loader.module.css";
import { ColorRing } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={css.loaderContainer}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#00319c", "#0040ca", "#0045db", "#5782df", "#aeb8cf"]}
      />
    </div>
  );
}
