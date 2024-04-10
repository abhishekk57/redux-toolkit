import React from "react";
import PropTypes from 'prop-types';
import {
    CachedImage,
    ImageCacheProvider
} from 'react-native-cached-image';
function ImageWrapper({ images }) {

    return (<ImageCacheProvider
        urlsToPreload={images}
        onPreloadComplete={() => { }}>
        <CachedImage source={{ uri: images[0] }} />
    </ImageCacheProvider>)
}

// export { ImageWrapper };
ImageWrapper.propTypes = {
    images: PropTypes.object.isRequired,
};