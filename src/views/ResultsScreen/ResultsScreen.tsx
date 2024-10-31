import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsScreen = ({ route }) => {
  const { score, feedback } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Score: {score}</Text>
      <Text style={styles.feedback}>{feedback}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F3F4F6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  feedback: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});

export default ResultsScreen;
