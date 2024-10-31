/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
import { useState } from 'react';
import { Alert } from 'react-native';
import { ClassDataMap } from './type';

// Define los datos de las clases
export const classData: ClassDataMap = {
  Math: {
    question: 'Solve the equation: 5 * 2',
    criteria: [
      {
        description: 'Correct answer',
        points: 5,
        check: answer => answer.trim() === '10' || answer.trim() === '5 * 2 = 10',
      },
      {
        description: 'Show all work',
        points: 5,
        check: answer => answer.includes('*'),
      },
    ],
  },
  Spanish: {
    question: "Translate the sentence: 'The weather is nice today.'",
    criteria: [
      {
        description: 'Correct translation',
        points: 5,
        check: answer =>
          answer.toLowerCase().includes('el tiempo está bonito') ||
          answer.toLowerCase().includes('el clima está hermoso'),
      },
      {
        description: 'Grammar and punctuation accuracy',
        points: 5,
        check: answer => answer.includes('está') && answer.includes('.'),
      },
    ],
  },
  Physics: {
    question: 'What is the formula for velocity?',
    criteria: [
      {
        description: 'Correct formula',
        points: 5,
        check: answer =>
          answer.toLowerCase().includes('distance / time') ||
          answer.toLowerCase().includes('d / t'),
      },
      {
        description: 'Units are accurate',
        points: 5,
        check: answer =>
          answer.toLowerCase().includes('m/s') ||
          answer.toLowerCase().includes('meters per second'),
      },
    ],
  },
  History: {
    question: 'Who was the first president of the United States?',
    criteria: [
      {
        description: 'Correct answer',
        points: 5,
        check: answer => answer.toLowerCase().includes('george washington'),
      },
      {
        description: 'Extra historical details',
        points: 5,
        check: answer => answer.toLowerCase().includes('1789'),
      },
    ],
  },
};

const useGradingSystemViewModel = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>('');

  const handleClassSelection = (className: string) => {
    setSelectedClass(className);
    setUserAnswer('');
    setEmail('');
    setScore(null);
    setFeedback('');
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const evaluateAnswer = () => {
    if (!selectedClass) {
      return;
    }

    if (!userAnswer.trim()) {
      Alert.alert('Error', 'Please enter your answer.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    let totalScore = 0;
    let feedbackMessages: string[] = [];

    classData[selectedClass].criteria.forEach(criterion => {
      if (criterion.check(userAnswer)) {
        totalScore += criterion.points;
        feedbackMessages.push(
          `✅ ${criterion.description}: +${criterion.points} points`
        );
      } else {
        feedbackMessages.push(`❌ ${criterion.description}: 0 points`);
      }
    });

    setScore(totalScore);
    setFeedback(feedbackMessages.join('\n'));
  };

  const renderCriteria = () => {
    if (!selectedClass || !classData[selectedClass]?.criteria) {
      return [];
    }
    return classData[selectedClass].criteria.map((criterion) => ({
      description: criterion.description,
      points: criterion.points,
    }));
  };

  const getGradientColors = (score: number | null) => {
    if (score === null) {
      return ['#ffffff', '#ffffff'];
    }

    if (score === 0) {
      return ['#ff0000', '#ff9999'];
    }
    if (score <= 5) {
      return ['#ffcc00', '#ffff99'];
    }
    return ['#00cc00', '#99ff99'];
  };

  return {
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
  };
};

export default useGradingSystemViewModel;
