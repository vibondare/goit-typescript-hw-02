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
import { unsplashImageData } from "./images-api";

function App() {
  const [images, setImages] = useState<unsplashImageData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [chosenImageData, setChosenImageData] =
    useState<unsplashImageData | null>(null);

  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  useEffect((): void => {
    if (query.trim() === "") {
      return;
    }

    async function getArticles(): Promise<void> {
      try {
        setError(false);
        setIsLoading(true);
        const data: unsplashImageData[] = await fetchImages(query, page, apiKey);
        setImages((prevImages): unsplashImageData[] => {
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

  const handleClickOnImage = (imageData: unsplashImageData): void => {
    setModalIsOpen(true);
    setChosenImageData(imageData);
  };

  const handleCloseModal = (): void => {
    setModalIsOpen(false);
    setChosenImageData(null);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images !== null && images.length > 0 && (
        <ImageGallery items={images} handleClickOnImage={handleClickOnImage} />
      )}
      {isLoading && <Loader />}
      {images !== null && images.length > 0 && !isLoading && (
        <LoadMoreBtn handleClick={handleLoadMore} />
      )}
      {modalIsOpen && chosenImageData !== null && (
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
