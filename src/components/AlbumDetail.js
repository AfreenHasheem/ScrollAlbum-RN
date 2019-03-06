import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    title,
    artist,
    image,
    url
     } = album;
  const {
    headerContentStyles,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
      } = styles;

  //consuming the prop "album" that was created in AlbumList
  return (
    <Card>

      <CardSection>
         <View style={thumbnailContainerStyle}>
            <Image
            style={thumbnailStyle}
            source={{ uri: image }}
            />
         </View>
         <View style={headerContentStyles}>
              <Text style={headerTextStyle}>{title}</Text>
              <Text>{artist}</Text>
          </View>
      </CardSection>


      <CardSection>
          <Image
          style={imageStyle}
          source={{ uri: image }}
          />
      </CardSection>


      <CardSection>
         <Button whenPressed={() => Linking.openURL(url)}>
          Buy Now
          </Button>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 20
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
