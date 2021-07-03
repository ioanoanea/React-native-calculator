import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import SquareButton from "./components/SquareButton";
import ExpressionManager from "./logic/ExpressionManager";

// expression manager
let expressionManager = new ExpressionManager();

export default function App() {

  // text state
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Buttons container */}
      <View style={styles.buttonsContainer}>
        {/* Input text */}
        <Text style={styles.input}>{text}</Text>
        {/* Buttons line */}
        <View style={styles.buttonsLine}>
          <SquareButton style={styles.blue} text={'C'} onPress={() => {setText(expressionManager.clear());}}/>
          <SquareButton style={styles.blue} text={'÷'} onPress={() => {setText(expressionManager.addToExpression('÷'));}}/>
          <SquareButton style={styles.blue} text={'×'} onPress={() => {setText(expressionManager.addToExpression('×'));}}/>
          <SquareButton style={styles.blue} text={'⌫'} onPress={() => {setText(expressionManager.remove())}}/>
        </View>
        {/* Buttons line */}
        <View style={styles.buttonsLine}>
          <SquareButton text={'7'} onPress={() => {setText(expressionManager.addToExpression('7'));}}/>
          <SquareButton text={'8'} onPress={() => {setText(expressionManager.addToExpression('8'));}}/>
          <SquareButton text={'9'} onPress={() => {setText(expressionManager.addToExpression('9'));}}/>
          <SquareButton style={styles.blue} text={'-'} onPress={() => {setText(expressionManager.addToExpression('-'));}}/>
        </View>
        {/* Buttons line */}
        <View style={styles.buttonsLine}>
          <SquareButton text={'4'} onPress={() => {setText(expressionManager.addToExpression('4'));}}/>
          <SquareButton text={'5'} onPress={() => {setText(expressionManager.addToExpression('5'));}}/>
          <SquareButton text={'6'} onPress={() => {setText(expressionManager.addToExpression('6'));}}/>
          <SquareButton style={styles.blue} text={'+'} onPress={() => {setText(expressionManager.addToExpression('+'));}}/>
        </View>
        {/* Buttons line */}
        <View style={styles.buttonsLine}>
          {/* Multiple Buttons line */}
          <View style={styles.multipleItemsLine}>
            <View style={styles.shortLine}>
              <SquareButton text={'1'} onPress={() => {setText(expressionManager.addToExpression('1'));}}/>
              <SquareButton text={'2'} onPress={() => {setText(expressionManager.addToExpression('2'));}}/>
              <SquareButton text={'3'} onPress={() => {setText(expressionManager.addToExpression('3'));}}/>
            </View>
            <SquareButton text={'%'} onPress={() => {setText(expressionManager.addToExpression('%'));}}/>
            <SquareButton text={'0'} onPress={() => {setText(expressionManager.addToExpression('0'));}}/>
            <SquareButton text={'.'} onPress={() => {setText(expressionManager.addToExpression('.'));}}/>
          </View>
          {/* Button '=' */}
          <SquareButton
              style={styles.darkBlueButton}
              text={'='}
              onPress={() => {setText(expressionManager.evaluate().toString());}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    marginTop: 120,
    fontSize: 48,
    textAlign: 'right',
    marginBottom: 20,
  },
  buttonsContainer: {
    position: 'absolute',
    width: '90%',
    bottom: 20,
    marginHorizontal: '5%',
  },
  buttonsLine: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  multipleItemsLine: {
    width: '75%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blue: {
    backgroundColor: '#b5eaf5',
  },
  darkBlueButton: {
    backgroundColor: '#1d92cc',
    height: 156,
    color: '#fff',
  },
  shortLine: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
});
