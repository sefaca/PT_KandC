/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import useGradingSystemViewModel, {classData} from './viewmodel';

const GradingSystemScreen: React.FC = () => {
  const {
    selectedClass,
    userAnswer,
    email,
    score,
    feedback,
    handleClassSelection,
    evaluateAnswer,
    renderCriteria,
    getGradientColors,
    setUserAnswer,
    setEmail,
  } = useGradingSystemViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Try out our Grading System!</Text>
      <Text style={styles.subtitle}>Choose from one of the example classes below to experience how our AI-powered grading works.</Text>
      <View style={styles.classSelectionContainer}>
        <Text style={styles.title}>Select a Class</Text>
        <View style={styles.buttonContainer}>
          {Object.keys(classData).map(className => (
            <TouchableOpacity
              key={className}
              style={[
                styles.button,
                selectedClass === className && styles.selectedButton,
              ]}
              onPress={() => handleClassSelection(className)}>
              <Text style={styles.buttonText}>{className}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {selectedClass && (
          <>
            <Text style={styles.title}>Question</Text>
            <Text style={styles.questionText}>
              {classData[selectedClass]?.question}
            </Text>
            <Text style={styles.title}>Rubrics</Text>
            <View style={styles.criteriaContainer}>
              {renderCriteria().map((criterion: { description: string; points: number }, index: number) => (
                <Text key={index} style={styles.criteriaText}>
                  {criterion.description} ({criterion.points}pts)
                </Text>
              ))}
            </View>
            <TextInput
              style={styles.input}
              placeholder="Type your answer here"
              placeholderTextColor="#AAA"
              value={userAnswer}
              onChangeText={setUserAnswer}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#AAA"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <Button
              title="Submit Answer"
              onPress={evaluateAnswer}
              color="#6200EA"
            />
          </>
        )}
      </View>

      {score !== null && (
        <LinearGradient
          colors={getGradientColors(score)}
          style={styles.resultContainer}>
          <Text style={styles.scoreText}>Total Score: {score}</Text>
          <Text style={styles.feedbackText}>{feedback}</Text>
        </LinearGradient>
      )}
    </View>
  );
};

export default GradingSystemScreen;
