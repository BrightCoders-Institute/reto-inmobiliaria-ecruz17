import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import CardScroll from './src/CardScroll';

function App(): JSX.Element {
  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#636363' : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
          style={{
            backgroundColor: '#b8b8b8',
          }}>
          <CardScroll/>
        </View>
    </SafeAreaView>
  );
}

export default App;
