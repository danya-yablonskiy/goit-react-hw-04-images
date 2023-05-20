import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
export function ImageGallery({ images, showModal }) {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem key={nanoid()}
        // key= {image.id} ТУТ ПОМИЛКА ПРО ДУБЛЮВАННЯ КЛЮЧА, ЧОМУ ТАК?
          image={image} showModal={showModal} />
      ))}
    </ul>
  );
}
