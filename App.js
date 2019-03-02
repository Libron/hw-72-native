import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './store/reducer';
import DishesMenu from "./containers/DishesMenu/DishesMenu";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Turtle Pizza Menu</Text>
                </View>
                <View style={styles.content}>
                    <DishesMenu />
                </View>
            </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      paddingTop: 50,

      flex: 1,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      backgroundColor: 'black',
  },
    header: {
        textAlign: 'center',
        padding: 20,
        backgroundColor: '#dd2c00'
      },
    headerText: {
      textAlign: 'center',
        color: '#fff',
        fontStyle: 'italic',
        fontSize: 14,
        fontWeight: 'bold'
    },
    content: {
        flex: 4,
        backgroundColor: '#fafafa',
        overflow: 'hidden'
    },
});
