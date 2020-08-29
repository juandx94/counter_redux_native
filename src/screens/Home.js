/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {actionIncrement, actionDecrement} from '../redux/actions/counterAction';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Counter</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.card}>
            <TouchableOpacity style={styles.btn} onPress={this.props.increment}>
              <Text style={styles.label}>INCREMENT</Text>
            </TouchableOpacity>
            <View style={{padding: 16}}>
              <Text style={styles.label}>{this.props.count}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={this.props.decrement}>
              <Text style={styles.label}>DECREMENT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  body: {
    justifyContent: 'center',
    flex: 1,
  },
  card: {
    justifyContent: 'space-around',
    margin: 16,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  btn: {
    padding: 8,
    backgroundColor: '#3D5AFE',
    alignContent: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Arial',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  title: {
    color: '#f2f2f2',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
});

const mapStateToProps = (state) => {
  return {
    count: state.counterReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(actionIncrement()),
    decrement: () => dispatch(actionDecrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
