import { useState, useEffect } from "react";
import "./App.css";
import { apiKey } from "./apiKey";
import { fetchImages } from "./images-api";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [chosenImageData, setChosenImageData] = useState([]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    async function getArticles() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImages(query, page, apiKey);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        console.log(error);
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getArticles();
  }, [page, query]);

  const handleClickOnImage = (imageData) => {
    setModalIsOpen(true);
    setChosenImageData(imageData);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setChosenImageData([]);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} handleClickOnImage={handleClickOnImage} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn handleClick={handleLoadMore} />
      )}
      {modalIsOpen && (
        <ImageModal
          imageData={chosenImageData}
          isOpen={modalIsOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default App;
