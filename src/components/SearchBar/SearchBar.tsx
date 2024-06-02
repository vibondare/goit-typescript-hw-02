import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  onSearch: (newQuery: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  return (
    <header className={css.header}>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const form = event.target as HTMLFormElement;
          const searchQuery = (
            form.elements.namedItem("query") as HTMLInputElement
          ).value;
          if (searchQuery.trim() === "") {
            toast.error(
              "To search for images, search field must be filled in!"
            );
            return;
          }
          onSearch(searchQuery);
        }}
      >
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          className={css.searchBarInput}
        />
        <Toaster position="top-right" />
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
}
