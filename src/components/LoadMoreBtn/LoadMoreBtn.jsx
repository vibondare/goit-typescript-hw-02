import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ handleClick }) {
  return (
    <div className={css.loadMoreButtonContainer}>
      <button onClick={handleClick} className={css.loadMoreButton}>
        Load more
      </button>
    </div>
  );
}
