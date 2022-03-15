import NoContentImage from '../../assets/no_content.png';
import NoContentImage2x from '../../assets/no_content_2x.png';
import { InfoWithCaption } from './InfoWithCaption';

const Image1x = NoContentImage;
const Image2x = `${NoContentImage2x} 2x`;
const noContentText = 'Brak danych do wyświetlenia';
const imageMaxWidth = 202;
const imageMaxHeight = 202;

export const NoContent = () => (
  <InfoWithCaption
    imageCaption={noContentText}
    imageMaxWidth={imageMaxWidth}
    imageMaxHeight={imageMaxHeight}
    imageSrc={Image1x}
    imageSrcset={Image2x}
  />
);
