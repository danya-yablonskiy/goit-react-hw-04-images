import { Button } from 'components/Button/Button';
import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { getSearchImage } from './api/getSearchImage';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [searhQuerry, setSearhQuerry] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImgUrl, setModalImgUrl] = useState('');

useEffect(() => {
  if (!!searhQuerry) {
    getSearchImage(searhQuerry, page)
      .then(({ hits }) => {
        if (hits.length === 0) {
          alert('Enter the correct data for the request');
        }
        setPictures(prev => [...prev, ...hits]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
}, [searhQuerry, page]);

  const nextPage = () => {
    setPage(prev => prev+1);
  };

  const handleFormSubmit = searhQuerry => {
    setPage(1);
    setPictures([]);
    setSearhQuerry(searhQuerry);
  };

  const onModal = modalImgUrl => {
    setModalImgUrl(modalImgUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <SearchBar
        onSubmit={handleFormSubmit}
        resetPage={page}
        clearPictures={pictures}
      />
      <ImageGallery images={pictures} showModal={onModal} />
      <Loader visible={isLoading} />
      {pictures.length > 0 && !isLoading && <Button onClick={nextPage} />}
      {showModal && <Modal modalImgUrl={modalImgUrl} closeModal={closeModal} />}
    </div>
  );
};

