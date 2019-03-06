# ScrollAlbum-RN
Creating a list of Scrollable albums using React Native

The project fetches some JSON data and shows the data in a scrollable list. 
On clicking the Buy Now option, we direct the user to the corresponding Amazon link where the album can be purchased.

The JSON data is fetched from the link : http://rallycoding.herokuapp.com/api/music_albums
The following components are included:
Card.js : The main holder for the list of albums
CardSection.js : There are 3 card sections. First one holds the artist image:image, album name:title and artist name:artist.
Second holds the image(like a wallpaper):image of the album. The thumbnail_image in the JSON is currently not working so I have replaced it with the image itself.
Third holds the button to Buy Now which take you to the Amazon page. All these are present in the AlbumDetail.js
AlbumDetail.js : Contains the Cardsections
Button.js : Button to Buy Now
Headre.js : to show the header
AlbumList.js : Contains the API link which we fetch using "Axios". This component renders the album details and shows it in a scroll view.





