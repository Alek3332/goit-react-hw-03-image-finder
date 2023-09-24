import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

// import PropTypes from 'prop-types';

import { ImageGalleryList } from './ImageGallery.styled';

export class ImageGallery extends Component {
  onClickSelectedImg = imgUrl => {
    this.props.largeImageURL(imgUrl);
  };

  render() {
    return (
      <>
        <ImageGalleryList largeImageURL={this.onClickSelectedImg}>
          {this.props.requestData.map(el => (
            <ImageGalleryItem
              key={el.id}
              onClick={this.onClickSelectedImg}
              dataGalleryItem={el}
            />
          ))}
        </ImageGalleryList>
      </>
    );
  }
}