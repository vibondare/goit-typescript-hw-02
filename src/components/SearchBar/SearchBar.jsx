import { useId } from "react";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {  
  return (
    <header className={css.header}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const form = event.target;
          const searchQuery = form.elements.query.value;
          if (searchQuery.trim() === "") {
            toast.error("To search for images, search field must be filled in!");
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
