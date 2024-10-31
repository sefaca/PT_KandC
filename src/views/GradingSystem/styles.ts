/* eslint-disable prettier/prettier */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  classSelectionContainer: {
    backgroundColor: '#222222',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    minWidth: '100%',
    minHeight: 90,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#6200EA',
  },
  buttonText: {
    color: '#FFF',
  },
  questionText: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 10,
  },
  criteriaContainer: {
    marginBottom: 20,
  },
  criteriaText: {
    color: '#FFF',
    fontSize: 16,
  },
  input: {
    width: 'auto',
    height: 40,
    borderColor: '#6200EA',
    borderWidth: 1,
    borderRadius: 5,
    color: '#FFF',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  resultContainer: {
    marginTop: 10,
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    width: 'auto',
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  feedbackText: {
    color: 'black',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default styles;
