/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

 import React from 'react';
 import { View } from 'react-native';
 import Header from './src/components/Header';
 import AlbumList from './src/components/AlbumList';

 export default class App extends React.Component {

   render() {
     return (
       <View style={{ backgroundColor: 'white', flex: 1 }}>
           <Header headerText={'Albums'} />
           <AlbumList />
        </View>
     );
   }
 }
