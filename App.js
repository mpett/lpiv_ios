/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, FlatList, Platform, ImageBackground, TouchableOpacity, StatusBar} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MapView from 'react-native-maps';
import { Button, ListItem, SearchBar } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Västsvenska Matappen
      </Text>
    </View>
  );
};

export default App;
