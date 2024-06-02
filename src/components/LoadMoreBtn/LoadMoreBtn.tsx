import css from "./LoadMoreBtn.module.css";

type Props = {
  handleClick: () => void;
}

export default function LoadMoreBtn({ handleClick }: Props) {
  return (
    <div className={css.loadMoreButtonContainer}>
      <button onClick={handleClick} className={css.loadMoreButton}>
        Load more
      </button>
    </div>
  );
}
