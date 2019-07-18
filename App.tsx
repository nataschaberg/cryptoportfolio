/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <View style={styles.parentContainer}>
        <View style={styles.innerContainer}>
          <Text>Initialized</Text>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  innerContainer: {
    backgroundColor: 'yellow' 
  }
});

export default App;