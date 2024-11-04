import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('');
  const [clickedButton, setClickedButton] = useState<string | null>(null);
  const [operation, setOperation] = useState('');

  const handlePress = (value: string) => {
    if (value === '=') {
      try {
        const result = eval(display);
        const fullOperation = display;
        setDisplay(result.toString());
        setOperation(fullOperation);
      } catch (error) {
        setDisplay('Error');
        setOperation('');
      }
    } else if (value === 'C') {
      setDisplay('');
      setOperation('');
    } else if (value === '%') {
      try {
        const result = eval(display);
        const percentage = result / 100;
        setDisplay(percentage.toString());
        setOperation(display + '%=' + percentage);
      } catch (error) {
        setDisplay('Error');
        setOperation('');
      }
    } else if (value === 'sup') {
      const newDisplay = display.slice(0, -1);
      setDisplay(newDisplay);
      setOperation(newDisplay);
    } else {
      setDisplay(display + value);
      setOperation(display + value);
    }

    setClickedButton(value === '=' ? value : null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.operationText}>{operation}</Text>
        <Text style={styles.displayText}>{display}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonreset} onPress={() => handlePress('C')}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonsupp} onPress={() => handlePress('sup')}>
          <Text style={styles.buttonText}>sup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttondiv} onPress={() => handlePress('%')}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttondiv} onPress={() => handlePress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        {/* Ajoutez les autres boutons de la calculatrice ici */}
        <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonfois} onPress={() => handlePress('*')}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonmoins} onPress={() => handlePress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonplus} onPress={() => handlePress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonzero} onPress={() => handlePress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonegal, clickedButton === '=' ? styles.buttonegalHover : null]}
          onPress={() => handlePress('=')}
        >
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17181A',
    justifyContent: 'flex-end',
    paddingBottom: 40,
    paddingHorizontal: 18,
    alignItems: 'center',
  },
  displayContainer: {
    backgroundColor: '#17181A',
    marginBottom: 95,
    padding: 10,
    alignItems: 'flex-end',
    width: 321,
  },
  operationText: {
    fontSize: 25,
    color: 'grey',
    fontWeight: '400',
    marginBottom: 5,
  },
  displayText: {
    fontSize: 45,
    color: 'white',
    fontWeight: '600',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  button: {
    backgroundColor: '#25313D',
    width: 68,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    opacity: 0.8,
  },
  buttonText: {
    fontSize: 29,
    color: '#29A8FF',
    fontWeight: '700',
  },
  buttonplus: {
    backgroundColor: '#005DB2',
    width: 68,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    borderRadius: 15,
  },
  buttonfois: {
    backgroundColor: '#005DB2',
    width: 68,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    borderRadius: 15,
  },
  buttonmoins: {
    backgroundColor: '#005DB2',
    width: 68,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    borderRadius: 15,
  },
  buttondiv: {
    backgroundColor: '#005DB2',
    width: 68,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
/*     borderColor: '#ccc',
    borderWidth: 1, */
    opacity: 0.8,
    borderRadius: 15,
  },
  buttonegal: {
    backgroundColor: '#005DB2',
    width: 68,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    opacity: 0.8,
  },
  buttonegalHover: {
    backgroundColor: '#1991FF',
  },
  buttonzero: {
    backgroundColor: '#25313D',
    width: 150,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    opacity: 0.8,
    marginright: -77,
  },
  opera: {
    flexDirection: 'column',
    alignContent: 'flex-end',
  },
  buttonreset:{
    backgroundColor: '#5F6061',
    width: 68,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    opacity: 0.8,
  },
  buttonsupp:{
    backgroundColor: '#5F6061',
    width: 68,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    opacity: 0.8,
  }
});
