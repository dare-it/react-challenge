import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as PropTypes from 'prop-types';

const ComponentWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const ContentWrapper = styled(Stack)({
  alignItems: 'center',
  paddingBottom: '1.625rem',
  paddingTop: '1.625rem',
});

const ImageWrapper = styled(Box)(({ imageMaxWidth, imageMaxHeight }) => ({
  maxWidth: `${imageMaxWidth}px`,
  maxHeight: `${imageMaxHeight}px`,
  width: '100%',
  height: 'auto',
}));

const imageStyle = {
  width: '100%',
  height: 'auto',
};

export const InfoWithCaption = ({
  imageCaption,
  imageMaxWidth,
  imageMaxHeight,
  imageSrc,
  imageSrcset,
}) => (
  <ComponentWrapper>
    <ContentWrapper>
      <ImageWrapper
        imageMaxWidth={imageMaxWidth}
        imageMaxHeight={imageMaxHeight}
      >
        <img
          width={imageMaxWidth}
          height={imageMaxHeight}
          src={imageSrc}
          srcSet={imageSrcset}
          alt={''}
          style={imageStyle}
        />
      </ImageWrapper>
      <Typography variant={'caption'}>{imageCaption}</Typography>
    </ContentWrapper>
  </ComponentWrapper>
);

InfoWithCaption.propTypes = {
  imageCaption: PropTypes.string.isRequired,
  imageMaxWidth: PropTypes.number.isRequired,
  imageMaxHeight: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageSrcset: PropTypes.string,
};
