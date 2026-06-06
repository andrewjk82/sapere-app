import { Y12A_CH6_QUESTIONS } from '../constants/seedYear12aCh6Questions';
import { Y12A_CH6B_QUESTIONS } from '../constants/seedYear12aCh6BQuestions';
import { Y12A_CH6C_QUESTIONS } from '../constants/seedYear12aCh6CQuestions';
import { Y12A_CH6D_QUESTIONS } from '../constants/seedYear12aCh6DQuestions';
import { Y12A_CH6E_QUESTIONS } from '../constants/seedYear12aCh6EQuestions';
import { Y12A_CH6F_QUESTIONS } from '../constants/seedYear12aCh6FQuestions';
import { Y12_CH8_QUESTIONS } from '../constants/seedYear12Ch8Questions';
import { Y12A_CH8B_QUESTIONS } from '../constants/seedYear12aCh8BQuestions';
import { Y12A_CH8C_QUESTIONS } from '../constants/seedYear12aCh8CQuestions';
import { Y12A_CH8D_QUESTIONS } from '../constants/seedYear12aCh8DQuestions';
import { Y12A_CH8E_QUESTIONS } from '../constants/seedYear12aCh8EQuestions';
import { Y12A_CH8F_QUESTIONS } from '../constants/seedYear12aCh8FQuestions';
import { Y12A_CH3_QUESTIONS } from '../constants/seedYear12aCh3Questions';
import { Y12A_CH3B_QUESTIONS } from '../constants/seedYear12aCh3BQuestions';
import { Y12A_CH3C_QUESTIONS } from '../constants/seedYear12aCh3CQuestions';
import { Y12A_CH3D_QUESTIONS } from '../constants/seedYear12aCh3DQuestions';
import { Y12A_CH3E_QUESTIONS } from '../constants/seedYear12aCh3EQuestions';
import { Y12A_CH3F_QUESTIONS } from '../constants/seedYear12aCh3FQuestions';
import { Y12A_CH3G_QUESTIONS } from '../constants/seedYear12aCh3GQuestions';
import { Y12A_CH3H_QUESTIONS } from '../constants/seedYear12aCh3HQuestions';
import { Y12A_CH3I_QUESTIONS } from '../constants/seedYear12aCh3IQuestions';
import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, CheckCircle2, ChevronRight, 
  Layers, GraduationCap, Star, Clock, 
  Search, BookText, Award, Lock, Plus, Edit2, Trash2, Save, X,
  Target, TrendingUp
} from 'lucide-react';
import { auth, db } from '../firebase/config';
import { doc, onSnapshot, collection, updateDoc, setDoc, deleteDoc, getDocs, getDoc, query, where, getCountFromServer, serverTimestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { migrateCurriculumToFirestore } from '../constants/migrateCurriculum';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { ALGEBRA_QUESTIONS_Y11A } from '../constants/seedQuestions.js';
import { SURDS_QUESTIONS_Y11A } from '../constants/seedSurdsQuestions.js';
import { WHOLE_NUMBER_QUESTIONS_Y6 } from '../constants/seedYear6WholeNumberQuestions.js';
import { FRACTION_QUESTIONS_Y6 } from '../constants/seedYear6FractionsQuestions.js';
import { CH5_QUESTIONS_Y11A } from '../constants/seedYear11Ch5Questions.js';
import { Y11_CH3B_QUESTIONS } from '../constants/seedYear11Ch3BQuestions.js';
import { Y11_CH3C_QUESTIONS } from '../constants/seedYear11Ch3CQuestions.js';
import { Y11_CH3D_QUESTIONS } from '../constants/seedYear11Ch3DQuestions.js';
import { Y11_CH3E_QUESTIONS } from '../constants/seedYear11Ch3EQuestions.js';
import { Y11_CH3F_QUESTIONS } from '../constants/seedYear11Ch3FQuestions.js';
import { Y11_CH3G_QUESTIONS } from '../constants/seedYear11Ch3GQuestions.js';
import { Y11_CH3H_QUESTIONS } from '../constants/seedYear11Ch3HQuestions.js';
import { Y11_CH3I_QUESTIONS } from '../constants/seedYear11Ch3IQuestions.js';
import { Y11_CH3J_QUESTIONS } from '../constants/seedYear11Ch3JQuestions.js';
import { Y9_CH2A_QUESTIONS } from '../constants/seedSurdsQuestions.js';
import { Y11_EXT1_CH1A_QUESTIONS } from '../constants/seedYear11Ext1Ch1AQuestions.js';
import { Y11_EXT1_CH1B_QUESTIONS } from '../constants/seedYear11Ext1Ch1BQuestions.js';
import { Y11_EXT1_CH1C_QUESTIONS } from '../constants/seedYear11Ext1Ch1CQuestions.js';
import { Y11_EXT1_CH1D_QUESTIONS } from '../constants/seedYear11Ext1Ch1DQuestions.js';
import { Y9_CH3A_QUESTIONS } from '../constants/seedYear9Ch3Questions.js';
import { Y9_CH4A_QUESTIONS } from '../constants/seedYear9Ch4Questions.js';
import { Y9_CH5A_QUESTIONS } from '../constants/seedYear9Ch5Questions.js';
import { Y9_CH5B_QUESTIONS } from '../constants/seedYear9Ch5BQuestions.js';
import { Y9_CH5C_QUESTIONS } from '../constants/seedYear9Ch5CQuestions.js';
import { Y9_CH5D_QUESTIONS } from '../constants/seedYear9Ch5DQuestions.js';
import { Y9_CH5E_QUESTIONS } from '../constants/seedYear9Ch5EQuestions.js';
import { Y9_CH5F_QUESTIONS } from '../constants/seedYear9Ch5FQuestions.js';
import { Y9_CH5G_QUESTIONS } from '../constants/seedYear9Ch5GQuestions.js';
import { Y9_CH5H_QUESTIONS } from '../constants/seedYear9Ch5HQuestions.js';
import { Y9_CH5I_QUESTIONS } from '../constants/seedYear9Ch5IQuestions.js';
import { Y9_CH6A_QUESTIONS } from '../constants/seedYear9Ch6Questions.js';
import { Y9_CH7A_QUESTIONS } from '../constants/seedYear9Ch7Questions.js';
import { Y9_CH8A_QUESTIONS } from '../constants/seedYear9Ch8Questions.js';
import { Y9_CH11_QUESTIONS } from '../constants/seedYear9Ch11Questions.js';
import { Y9_CH11B_QUESTIONS } from '../constants/seedYear9Ch11BQuestions.js';
import { Y9_CH11C_QUESTIONS } from '../constants/seedYear9Ch11CQuestions.js';
import { Y9_CH11D_QUESTIONS } from '../constants/seedYear9Ch11DQuestions.js';
import { Y9_CH11E_QUESTIONS } from '../constants/seedYear9Ch11EQuestions.js';
import { Y9_CH11F_QUESTIONS } from '../constants/seedYear9Ch11FQuestions.js';
import { Y9_CH11G_QUESTIONS } from '../constants/seedYear9Ch11GQuestions.js';
import { Y9_CH11H_QUESTIONS } from '../constants/seedYear9Ch11HQuestions.js';
import { Y9_CH11I_QUESTIONS } from '../constants/seedYear9Ch11IQuestions.js';
import { Y9_CH14_QUESTIONS } from '../constants/seedYear9Ch14Questions.js';
import { Y9_CH14B_QUESTIONS } from '../constants/seedYear9Ch14BQuestions.js';
import { Y9_CH14C_QUESTIONS } from '../constants/seedYear9Ch14CQuestions.js';
import { Y9_CH14D_QUESTIONS } from '../constants/seedYear9Ch14DQuestions.js';
import { Y9_CH14E_QUESTIONS } from '../constants/seedYear9Ch14EQuestions.js';
import { Y9_CH14F_QUESTIONS } from '../constants/seedYear9Ch14FQuestions.js';
import { Y9_CH14G_QUESTIONS } from '../constants/seedYear9Ch14GQuestions.js';
import { Y12A_CH5A_QUESTIONS } from '../constants/seedYear12Ch5Questions.js';
import { Y12A_CH5B_QUESTIONS } from '../constants/seedYear12Ch5BQuestions.js';
import { Y12A_CH5C_QUESTIONS } from '../constants/seedYear12Ch5CQuestions.js';
import { Y12A_CH5D_QUESTIONS } from '../constants/seedYear12Ch5DQuestions.js';
import { Y12A_CH5E_QUESTIONS } from '../constants/seedYear12Ch5EQuestions.js';
import { Y12A_CH5F_QUESTIONS } from '../constants/seedYear12Ch5FQuestions.js';
import { Y12A_CH5G_QUESTIONS } from '../constants/seedYear12Ch5GQuestions.js';
import { Y12A_CH5H_QUESTIONS } from '../constants/seedYear12Ch5HQuestions.js';
import { Y12A_CH5I_QUESTIONS } from '../constants/seedYear12Ch5IQuestions.js';
import { Y12A_CH5J_QUESTIONS } from '../constants/seedYear12Ch5JQuestions.js';
import { Y12A_CH5K_QUESTIONS } from '../constants/seedYear12Ch5KQuestions.js';
import { Y12A_CH5L_QUESTIONS } from '../constants/seedYear12Ch5LQuestions.js';
import { Y8_CH1C_QUESTIONS } from '../constants/seedYear8Ch1Questions.js';
import { Y8_CH2H_QUESTIONS } from '../constants/seedYear8Ch2Questions.js';
import { Y8_CH3A_QUESTIONS } from '../constants/seedYear8Ch3Questions.js';
import { Y8_CH3F_QUESTIONS } from '../constants/seedYear8Ch3ReviewQuestions.js';
import { Y8_CH4A_QUESTIONS } from '../constants/seedYear8Ch4Questions.js';
import { Y8_CH4H_QUESTIONS } from '../constants/seedYear8Ch4ReviewQuestions.js';
import { Y8_CH5A_QUESTIONS } from '../constants/seedYear8Ch5Questions.js';
import { Y8_CH5H_QUESTIONS } from '../constants/seedYear8Ch5ReviewQuestions.js';
import { Y8_CH5I_QUESTIONS } from '../constants/seedYear8Ch5ChallengeQuestions.js';
import { Y8_CH6A_QUESTIONS } from '../constants/seedYear8Ch6Questions.js';
import { Y8_CH6H_QUESTIONS } from '../constants/seedYear8Ch6ReviewQuestions.js';
import { Y8_CH7A_QUESTIONS } from '../constants/seedYear8Ch7Questions.js';
import { Y8_CH7I_QUESTIONS } from '../constants/seedYear8Ch7ReviewQuestions.js';
import { Y8_CH8D_QUESTIONS } from '../constants/seedYear8Ch8ReviewQuestions.js';
import { Y8_CH9A_QUESTIONS } from '../constants/seedYear8Ch9Questions.js';
import { Y8_CH10A_QUESTIONS } from '../constants/seedYear8Ch10Questions.js';
import { Y8_CH10G_QUESTIONS } from '../constants/seedYear8Ch10GQuestions.js';
import { Y8_CH11A_QUESTIONS } from '../constants/seedYear8Ch11Questions.js';
import { Y8_CH11E_QUESTIONS } from '../constants/seedYear8Ch11EQuestions.js';
import { Y8_CH12A_QUESTIONS } from '../constants/seedYear8Ch12Questions.js';
import { Y8_CH12G_QUESTIONS } from '../constants/seedYear8Ch12GQuestions.js';
import { Y8_CH13A_QUESTIONS } from '../constants/seedYear8Ch13Questions.js';
import { Y8_CH13D_QUESTIONS } from '../constants/seedYear8Ch13DQuestions.js';
import { Y8_CH14A_QUESTIONS } from '../constants/seedYear8Ch14Questions.js';
import { Y8_CH14E_QUESTIONS } from '../constants/seedYear8Ch14EQuestions.js';
import { Y8_CH15A_QUESTIONS } from '../constants/seedYear8Ch15Questions.js';
import { Y8_CH15I_QUESTIONS } from '../constants/seedYear8Ch15IQuestions.js';
import { Y8_CH16A_QUESTIONS } from '../constants/seedYear8Ch16Questions.js';
import { Y8_CH16E_QUESTIONS } from '../constants/seedYear8Ch16EQuestions.js';
import { Y8_CH17A_QUESTIONS } from '../constants/seedYear8Ch17Questions.js';
import { Y8_CH17E_QUESTIONS } from '../constants/seedYear8Ch17EQuestions.js';
import { Y8_CH18A_QUESTIONS } from '../constants/seedYear8Ch18Questions.js';
import { Y8_CH18I_QUESTIONS } from '../constants/seedYear8Ch18IQuestions.js';
import { Y8_CH19A_QUESTIONS } from '../constants/seedYear8Ch19Questions.js';
import { Y7_CH3B_QUESTIONS } from '../constants/seedYear7Ch3BQuestions.js';
import { Y7_CH3C_QUESTIONS } from '../constants/seedYear7Ch3CQuestions.js';
import { Y7_CH3D_QUESTIONS } from '../constants/seedYear7Ch3DQuestions.js';
import { Y7_CH3E_QUESTIONS } from '../constants/seedYear7Ch3EQuestions.js';
import { Y7_CH3F_QUESTIONS } from '../constants/seedYear7Ch3FQuestions.js';
import { Y7_CH3G_QUESTIONS } from '../constants/seedYear7Ch3GQuestions.js';
import { Y7_CH3H_QUESTIONS } from '../constants/seedYear7Ch3HQuestions.js';
import { Y7_CH23A_QUESTIONS } from '../constants/seedYear7Ch23AQuestions.js';
import { Y7_CH23B_QUESTIONS } from '../constants/seedYear7Ch23BQuestions.js';
import { Y7_CH23C_QUESTIONS } from '../constants/seedYear7Ch23CQuestions.js';
import { Y7_CH23D_QUESTIONS } from '../constants/seedYear7Ch23DQuestions.js';
import { Y7_CH23E_QUESTIONS } from '../constants/seedYear7Ch23EQuestions.js';
import { Y7_CH23F_QUESTIONS } from '../constants/seedYear7Ch23FQuestions.js';
import { Y7_CH23H_QUESTIONS } from '../constants/seedYear7Ch23HQuestions.js';
import { Y7_CH23I_QUESTIONS } from '../constants/seedYear7Ch23IQuestions.js';
import { Y7_CH23J_QUESTIONS } from '../constants/seedYear7Ch23JQuestions.js';
import { Y7_CH1G_QUESTIONS } from '../constants/seedYear7Ch1GQuestions.js';
import { Y7_CH1H_QUESTIONS } from '../constants/seedYear7Ch1HQuestions.js';
import { Y7_CH1I_QUESTIONS } from '../constants/seedYear7Ch1IQuestions.js';
import { Y7_CH1J_QUESTIONS } from '../constants/seedYear7Ch1JQuestions.js';
import { Y7_CH1K_QUESTIONS } from '../constants/seedYear7Ch1KQuestions.js';
import { Y7_CH1L_QUESTIONS } from '../constants/seedYear7Ch1LQuestions.js';
import { Y7_CH1M_QUESTIONS } from '../constants/seedYear7Ch1MQuestions.js';
import { Y7_CH1B_QUESTIONS } from '../constants/seedYear7Ch1BQuestions.js';
import { Y7_CH1C_QUESTIONS } from '../constants/seedYear7Ch1CQuestions.js';
import { Y7_CH2B_QUESTIONS } from '../constants/seedYear7Ch2BQuestions.js';
import { Y7_CH2C_QUESTIONS } from '../constants/seedYear7Ch2CQuestions.js';
import { Y7_CH2D_QUESTIONS } from '../constants/seedYear7Ch2DQuestions.js';
import { Y7_CH2E_QUESTIONS } from '../constants/seedYear7Ch2EQuestions.js';
import { Y7_CH2F_QUESTIONS } from '../constants/seedYear7Ch2FQuestions.js';
import { Y7_CH2G_QUESTIONS } from '../constants/seedYear7Ch2GQuestions.js';
import { Y7_CH1D_QUESTIONS } from '../constants/seedYear7Ch1DQuestions.js';
import { Y7_CH1E_QUESTIONS } from '../constants/seedYear7Ch1EQuestions.js';
import { Y7_CH1F_QUESTIONS } from '../constants/seedYear7Ch1FQuestions.js';
import { Y10_CH1F_QUESTIONS } from '../constants/seedYear10Ch1FQuestions.js';
import { Y10_CH2F_QUESTIONS } from '../constants/seedYear10Ch2FQuestions.js';
import { Y10_CH3J_QUESTIONS } from '../constants/seedYear10Ch3JQuestions.js';
import { Y10_CH4G_QUESTIONS } from '../constants/seedYear10Ch4GQuestions.js';
import { Y10_CH5_QUESTIONS } from '../constants/seedYear10Ch5GQuestions.js';
import { Y10_CH5A_QUESTIONS } from '../constants/seedYear10Ch5AQuestions.js';
import { Y10_CH6_QUESTIONS } from '../constants/seedYear10Ch6Questions.js';
import { Y10_CH6K_QUESTIONS } from '../constants/seedYear10Ch6KQuestions.js';
import { Y10_CH7A_QUESTIONS } from '../constants/seedYear10Ch7AQuestions.js';
import { Y10_CH7H_QUESTIONS } from '../constants/seedYear10Ch7HQuestions.js';
import { Y10_CH8A_QUESTIONS } from '../constants/seedYear10Ch8AQuestions.js';
import { Y10_CH8E_QUESTIONS } from '../constants/seedYear10Ch8EQuestions.js';
import { Y10_CH9_QUESTIONS } from '../constants/seedYear10Ch9Questions.js';
import { ABBOTSLEIGH_2020_QUESTIONS } from '../constants/seedAbbotsleigh2020Questions.js';
import { ASCHAM_2020_QUESTIONS } from '../constants/seedAscham2020Questions.js';
import { BARKER_2020_QUESTIONS } from '../constants/seedBarker2020Questions.js';
import { BAULKHAM_2020_QUESTIONS } from '../constants/seedBaulkham2020Questions.js';
import QuestionBankModal from './QuestionBankModal';
import QuestionBankPage from './QuestionBankPage';
import LearningPath from './LearningPath';
import HscJourney from './HscJourney';
import { seedChapterQuestions } from '../services/chapterSeeder';

// ── Chapter seed registry ──────────────────────────────────────────────────
// Single source of truth for bulk question seeding. To add a new chapter:
// create its seed file, import the array above, and add ONE entry here — a
// "Seed" button appears automatically. No new handler function needed.
const CHAPTER_SEED_REGISTRY = [
  {
    chapterId: 'y12a-3',
    chapterTitle: 'Chapter 3: Curve-sketching using the derivative',
    topicId: 'y12a-3A',
    topicCode: '3A',
    topicTitle: 'Increasing, decreasing and stationary at a point',
    year: 'Year 12',
    seed: Y12A_CH3_QUESTIONS,
    label: 'Y12A Ch3 · 3A Increasing, decreasing and stationary',
  },
  {
    chapterId: 'y12a-3',
    chapterTitle: 'Chapter 3: Curve-sketching using the derivative',
    topicId: 'y12a-3B',
    topicCode: '3B',
    topicTitle: 'Stationary points and turning points',
    year: 'Year 12',
    seed: Y12A_CH3B_QUESTIONS,
    label: 'Y12A Ch3 · 3B Stationary points and turning points',
  },
  {
    chapterId: 'y12a-3',
    chapterTitle: 'Chapter 3: Curve-sketching using the derivative',
    topicId: 'y12a-3C',
    topicCode: '3C',
    topicTitle: 'Second and higher derivatives',
    year: 'Year 12',
    seed: Y12A_CH3C_QUESTIONS,
    label: 'Y12A Ch3 · 3C Second and higher derivatives',
  },
  {
    chapterId: 'y12a-3',
    chapterTitle: 'Chapter 3: Curve-sketching using the derivative',
    topicId: 'y12a-3D',
    topicCode: '3D',
    topicTitle: 'Concavity and points of inflection',
    year: 'Year 12',
    seed: Y12A_CH3D_QUESTIONS,
    label: 'Y12A Ch3 · 3D Concavity and points of inflection',
  },
  {
    chapterId: 'y12a-3',
    chapterTitle: 'Chapter 3: Curve-sketching using the derivative',
    topicId: 'y12a-3E',
    topicCode: '3E',
    topicTitle: 'Systematic curve sketching with the derivative',
    year: 'Year 12',
    seed: Y12A_CH3E_QUESTIONS,
    label: 'Y12A Ch3 · 3E Systematic curve sketching with the derivative',
  },
  {
    chapterId: 'y12a-3',
    chapterTitle: 'Chapter 3: Curve-sketching using the derivative',
    topicId: 'y12a-3F',
    topicCode: '3F',
    topicTitle: 'Global maximum and minimum',
    year: 'Year 12',
    seed: Y12A_CH3F_QUESTIONS,
    label: 'Y12A Ch3 · 3F Global maximum and minimum',
  },
  {
    chapterId: 'y12a-3',
    chapterTitle: 'Chapter 3: Curve-sketching using the derivative',
    topicId: 'y12a-3G',
    topicCode: '3G',
    topicTitle: 'Applications of maximisation and minimisation',
    year: 'Year 12',
    seed: Y12A_CH3G_QUESTIONS,
    label: 'Y12A Ch3 · 3G Applications of maximisation and minimisation',
  },
  {
    chapterId: 'y12a-3',
    chapterTitle: 'Chapter 3: Curve-sketching using the derivative',
    topicId: 'y12a-3H',
    topicCode: '3H',
    topicTitle: 'Primitive functions',
    year: 'Year 12',
    seed: Y12A_CH3H_QUESTIONS,
    label: 'Y12A Ch3 · 3H Primitive functions',
  },
  {
    chapterId: 'y12a-3',
    chapterTitle: 'Chapter 3: Curve-sketching using the derivative',
    topicId: 'y12a-3I',
    topicCode: '3I',
    topicTitle: 'Chapter review exercise',
    year: 'Year 12',
    seed: Y12A_CH3I_QUESTIONS,
    label: 'Y12A Ch3 · 3I Chapter review exercise',
  },
  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6A',
    topicCode: '6A',
    topicTitle: 'The behaviour of sin x near the origin',
    year: 'Year 12',
    seed: Y12A_CH6_QUESTIONS,
    label: 'Y12A Ch6 · 6A The behaviour of sin x near the origin',
  },
  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6B',
    topicCode: '6B',
    topicTitle: 'Differentiating the trigonometric functions',
    year: 'Year 12',
    seed: Y12A_CH6B_QUESTIONS,
    label: 'Y12A Ch6 · 6B Differentiating the trigonometric functions',
  },
  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6C',
    topicCode: '6C',
    topicTitle: 'Applications of differentiation',
    year: 'Year 12',
    seed: Y12A_CH6C_QUESTIONS,
    label: 'Y12A Ch6 · 6C Applications of differentiation',
  },
  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6D',
    topicCode: '6D',
    topicTitle: 'Integrating the trigonometric functions',
    year: 'Year 12',
    seed: Y12A_CH6D_QUESTIONS,
    label: 'Y12A Ch6 · 6D Integrating the trigonometric functions',
  },
  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6E',
    topicCode: '6E',
    topicTitle: 'Area',
    year: 'Year 12',
    seed: Y12A_CH6E_QUESTIONS,
    label: 'Y12A Ch6 · 6E Area',
  },
  {
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicId: 'y12a-6F',
    topicCode: '6F',
    topicTitle: 'Chapter review exercise',
    year: 'Year 12',
    seed: Y12A_CH6F_QUESTIONS,
    label: 'Y12A Ch6 · 6F Chapter review',
  },
  {
    chapterId: 'y12a-8',
    chapterTitle: 'Chapter 8: Series and finance',
    topicId: 'y12a-8A',
    topicCode: '8A',
    topicTitle: 'Applications of APs and GPs',
    year: 'Year 12',
    seed: Y12_CH8_QUESTIONS,
    label: 'Y12A Ch8 · 8A Applications of APs and GPs',
  },
  {
    chapterId: 'y12a-8',
    chapterTitle: 'Chapter 8: Series and finance',
    topicId: 'y12a-8B',
    topicCode: '8B',
    topicTitle: 'The use of logarithms with GPs',
    year: 'Year 12',
    seed: Y12A_CH8B_QUESTIONS,
    label: 'Y12A Ch8 · 8B The use of logarithms with GPs',
  },
  {
    chapterId: 'y12a-8',
    chapterTitle: 'Chapter 8: Series and finance',
    topicId: 'y12a-8C',
    topicCode: '8C',
    topicTitle: 'Simple and compound interest',
    year: 'Year 12',
    seed: Y12A_CH8C_QUESTIONS,
    label: 'Y12A Ch8 · 8C Simple and compound interest',
  },
  {
    chapterId: 'y12a-8',
    chapterTitle: 'Chapter 8: Series and finance',
    topicId: 'y12a-8D',
    topicCode: '8D',
    topicTitle: 'Investing money by regular instalments',
    year: 'Year 12',
    seed: Y12A_CH8D_QUESTIONS,
    label: 'Y12A Ch8 · 8D Investing money by regular instalments',
  },
  {
    chapterId: 'y12a-8',
    chapterTitle: 'Chapter 8: Series and finance',
    topicId: 'y12a-8E',
    topicCode: '8E',
    topicTitle: 'Paying off a loan',
    year: 'Year 12',
    seed: Y12A_CH8E_QUESTIONS,
    label: 'Y12A Ch8 · 8E Paying off a loan',
  },
  {
    chapterId: 'y12a-8',
    chapterTitle: 'Chapter 8: Series and finance',
    topicId: 'y12a-8F',
    topicCode: '8F',
    topicTitle: 'Chapter review exercise',
    year: 'Year 12',
    seed: Y12A_CH8F_QUESTIONS,
    label: 'Y12A Ch8 · 8F Chapter review',
  },
  { chapterId: 'y10-1', chapterTitle: 'Chapter 1: Consumer arithmetic', topicId: 'y10-1f', topicCode: '1F', topicTitle: 'Revision', year: 'Year 10', seed: Y10_CH1F_QUESTIONS, label: 'Y10 Ch1 · 1F Revision' },
  { chapterId: 'y10-2', chapterTitle: 'Chapter 2: Review of surds', topicId: 'y10-2f', topicCode: '2F', topicTitle: 'Revision', year: 'Year 10', seed: Y10_CH2F_QUESTIONS, label: 'Y10 Ch2 · 2F Revision' },
  { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3j', topicCode: '3J', topicTitle: 'Revision', year: 'Year 10', seed: Y10_CH3J_QUESTIONS, label: 'Y10 Ch3 · 3J Revision' },
  { chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4g', topicCode: '4G', topicTitle: 'Revision', year: 'Year 10', seed: Y10_CH4G_QUESTIONS, label: 'Y10 Ch4 · 4G Revision' },
  { chapterId: 'y10-5', chapterTitle: 'Chapter 5: Quadratic equations', topicId: 'y10-5g', topicCode: '5G', topicTitle: 'Revision', year: 'Year 10', seed: Y10_CH5_QUESTIONS, label: 'Y10 Ch5 · 5G Revision' },
  { chapterId: 'y10-6', chapterTitle: 'Chapter 6: Surface area and volume', topicId: 'y10-6k', topicCode: '6K', topicTitle: 'Revision', year: 'Year 10', seed: Y10_CH6K_QUESTIONS, label: 'Y10 Ch6 · 6K Revision' },
  { chapterId: 'y10-7', chapterTitle: 'Chapter 7: The parabola', topicId: 'y10-7a', topicCode: '7A', topicTitle: 'Parabolas congruent to y = x^2', year: 'Year 10', seed: Y10_CH7A_QUESTIONS, label: 'Y10 Ch7A · Parabolas' },
  { chapterId: 'y10-7', chapterTitle: 'Chapter 7: The parabola', topicId: 'y10-7h', topicCode: '7H', topicTitle: 'Revision', year: 'Year 10', seed: Y10_CH7H_QUESTIONS, label: 'Y10 Ch7 · 7H Revision' },
  { chapterId: 'y10-8', chapterTitle: 'Chapter 8: Review of geometry', topicId: 'y10-8a', topicCode: '8A', topicTitle: 'Review of triangles', year: 'Year 10', seed: Y10_CH8A_QUESTIONS, label: 'Y10 Ch8 · Review of triangles' },
  { chapterId: 'y10-8', chapterTitle: 'Chapter 8: Review of congruence and similarity', topicId: 'y10-8e', topicCode: '8E', topicTitle: 'Revision', year: 'Year 10', seed: Y10_CH8E_QUESTIONS, label: 'Y10 Ch8 · 8E Revision' },
  { chapterId: 'y10-9', chapterTitle: 'Chapter 9: Indices, Exponentials and Logarithms', topicId: 'y10-9a', topicCode: '9A', topicTitle: 'Review of powers and integer indices', year: 'Year 10', seed: Y10_CH9_QUESTIONS, label: 'Y10 Ch9 · 9A Review of powers and integer indices' },
  { chapterId: 'y11a-3', chapterTitle: 'Chapter 3: Functions and graphs', topicId: 'y11a-3B', topicCode: '3B', topicTitle: 'Functions, relations, and graphs', year: 'Year 11', seed: Y11_CH3B_QUESTIONS, label: 'Y11A Ch3 · 3B Functions, relations, and graphs' },
  { chapterId: 'y11a-3', chapterTitle: 'Chapter 3: Functions and graphs', topicId: 'y11a-3C', topicCode: '3C', topicTitle: 'Review of linear graphs', year: 'Year 11', seed: Y11_CH3C_QUESTIONS, label: 'Y11A Ch3 · 3C Review of linear graphs' },
  { chapterId: 'y11a-3', chapterTitle: 'Chapter 3: Functions and graphs', topicId: 'y11a-3D', topicCode: '3D', topicTitle: 'Quadratic functions — factoring and the graph', year: 'Year 11', seed: Y11_CH3D_QUESTIONS, label: 'Y11A Ch3 · 3D Quadratic functions — factoring and the graph' },
  { chapterId: 'y11a-3', chapterTitle: 'Chapter 3: Functions and graphs', topicId: 'y11a-3E', topicCode: '3E', topicTitle: 'Completing the square and the graph', year: 'Year 11', seed: Y11_CH3E_QUESTIONS, label: 'Y11A Ch3 · 3E Completing the square and the graph' },
  { chapterId: 'y11a-3', chapterTitle: 'Chapter 3: Functions and graphs', topicId: 'y11a-3F', topicCode: '3F', topicTitle: 'The quadratic formulae and the graph', year: 'Year 11', seed: Y11_CH3F_QUESTIONS, label: 'Y11A Ch3 · 3F The quadratic formulae and the graph' },
  { chapterId: 'y11a-3', chapterTitle: 'Chapter 3: Functions and graphs', topicId: 'y11a-3G', topicCode: '3G', topicTitle: 'Powers, cubics, and circles', year: 'Year 11', seed: Y11_CH3G_QUESTIONS, label: 'Y11A Ch3 · 3G Powers, cubics, and circles' },
  { chapterId: 'y11a-3', chapterTitle: 'Chapter 3: Functions and graphs', topicId: 'y11a-3H', topicCode: '3H', topicTitle: 'Two graphs that have asymptotes', year: 'Year 11', seed: Y11_CH3H_QUESTIONS, label: 'Y11A Ch3 · 3H Two graphs that have asymptotes' },
  { chapterId: 'y11a-3', chapterTitle: 'Chapter 3: Functions and graphs', topicId: 'y11a-3I', topicCode: '3I', topicTitle: 'Direct and inverse variation', year: 'Year 11', seed: Y11_CH3I_QUESTIONS, label: 'Y11A Ch3 · 3I Direct and inverse variation' },
  { chapterId: 'y11a-3', chapterTitle: 'Chapter 3: Functions and graphs', topicId: 'y11a-3-3j', topicCode: '3J', topicTitle: 'Revision', year: 'Year 11', seed: Y11_CH3J_QUESTIONS, label: 'Y11A Ch3 · 3J Revision' },
  { chapterId: 'y11e1-1', chapterTitle: 'Chapter 1: Algebra review', topicId: 'y11e1-1A', topicCode: '1A', topicTitle: 'Algebra review', year: 'Year 11', seed: Y11_EXT1_CH1A_QUESTIONS, label: 'Y11 Ext1 Ch1 · Algebra review' },
  { chapterId: 'y11e1-1', chapterTitle: 'Chapter 1: Algebra review', topicId: 'y11e1-1B', topicCode: '1B', topicTitle: 'Factoring', year: 'Year 11', seed: Y11_EXT1_CH1B_QUESTIONS, label: 'Y11 Ext1 Ch1 · Factoring' },
  { chapterId: 'y11e1-1', chapterTitle: 'Chapter 1: Algebra review', topicId: 'y11e1-1C', topicCode: '1C', topicTitle: 'Algebraic fractions', year: 'Year 11', seed: Y11_EXT1_CH1C_QUESTIONS, label: 'Y11 Ext1 Ch1 · Algebraic fractions' },
  { chapterId: 'y11e1-1', chapterTitle: 'Chapter 1: Algebra review', topicId: 'y11e1-1D', topicCode: '1D', topicTitle: 'Quadratic equations', year: 'Year 11', seed: Y11_EXT1_CH1D_QUESTIONS, label: 'Y11 Ext1 Ch1 · Quadratic equations' },
  { chapterId: 'y9-3', chapterTitle: 'Chapter 3: Consumer arithmetic', topicId: 'y9-3a', topicCode: '3A', topicTitle: 'Review of percentages', year: 'Year 9', seed: Y9_CH3A_QUESTIONS, label: 'Y9 Ch3 · Consumer arithmetic' },
  { chapterId: 'y9-4', chapterTitle: 'Chapter 4: Factorisation', topicId: 'y9-4a', topicCode: '4A', topicTitle: 'Factorisation', year: 'Year 9', seed: Y9_CH4A_QUESTIONS, label: 'Y9 Ch4 · Factorisation' },
  { chapterId: 'y9-5', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicId: 'y9-5a', topicCode: '5A', topicTitle: 'Expressions', year: 'Year 9', seed: Y9_CH5A_QUESTIONS, label: 'Y9 Ch5 · Linear equations' },
  { chapterId: 'y9-5', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicId: 'y9-5b', topicCode: '5B', topicTitle: 'Solving simple linear equations', year: 'Year 9', seed: Y9_CH5B_QUESTIONS, label: 'Y9 Ch5 · Solving simple linear equations' },
  { chapterId: 'y9-5', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicId: 'y9-5c', topicCode: '5C', topicTitle: 'Equations with brackets', year: 'Year 9', seed: Y9_CH5C_QUESTIONS, label: 'Y9 Ch5 · Equations with brackets' },
  { chapterId: 'y9-5', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicId: 'y9-5d', topicCode: '5D', topicTitle: 'Linear equations involving fractions', year: 'Year 9', seed: Y9_CH5D_QUESTIONS, label: 'Y9 Ch5 · Linear equations involving fractions' },
  { chapterId: 'y9-5', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicId: 'y9-5e', topicCode: '5E', topicTitle: 'Using linear equations to solve problems', year: 'Year 9', seed: Y9_CH5E_QUESTIONS, label: 'Y9 Ch5 · Using linear equations to solve problems' },
  { chapterId: 'y9-5', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicId: 'y9-5f', topicCode: '5F', topicTitle: 'Literal equations', year: 'Year 9', seed: Y9_CH5F_QUESTIONS, label: 'Y9 Ch5 · Literal equations' },
  { chapterId: 'y9-5', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicId: 'y9-5g', topicCode: '5G', topicTitle: 'Inequalities', year: 'Year 9', seed: Y9_CH5G_QUESTIONS, label: 'Y9 Ch5 · Inequalities' },
  { chapterId: 'y9-5', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicId: 'y9-5h', topicCode: '5H', topicTitle: 'Solving linear inequalities', year: 'Year 9', seed: Y9_CH5H_QUESTIONS, label: 'Y9 Ch5 · Solving linear inequalities' },
  { chapterId: 'y9-5', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicId: 'y9-5i', topicCode: '5I', topicTitle: 'Revision', year: 'Year 9', seed: Y9_CH5I_QUESTIONS, label: 'Y9 Ch5 · Revision' },
  { chapterId: 'y9-6', chapterTitle: 'Chapter 6: Formulas', topicId: 'y9-6a', topicCode: '6A', topicTitle: 'Formulas', year: 'Year 9', seed: Y9_CH6A_QUESTIONS, label: 'Y9 Ch6 · Formulas' },
  { chapterId: 'y9-7', chapterTitle: 'Chapter 7: Congruence and special quadrilaterals', topicId: 'y9-7a', topicCode: '7A', topicTitle: 'Review of angles', year: 'Year 9', seed: Y9_CH7A_QUESTIONS, label: 'Y9 Ch7 · Angles' },
  { chapterId: 'y9-8', chapterTitle: 'Chapter 8: Index laws', topicId: 'y9-8a', topicCode: '8A', topicTitle: 'Index laws', year: 'Year 9', seed: Y9_CH8A_QUESTIONS, label: 'Y9 Ch8 · Index laws' },
  { chapterId: 'y9-11', chapterTitle: 'Chapter 11: Coordinate geometry', topicId: 'y9-11a', topicCode: '11A', topicTitle: 'Distance between two points', year: 'Year 9', seed: Y9_CH11_QUESTIONS, label: 'Y9 Ch11 · Distance between two points' },
  { chapterId: 'y9-11', chapterTitle: 'Chapter 11: Coordinate geometry', topicId: 'y9-11b', topicCode: '11B', topicTitle: 'The midpoint of an interval', year: 'Year 9', seed: Y9_CH11B_QUESTIONS, label: 'Y9 Ch11 · The midpoint of an interval' },
  { chapterId: 'y9-11', chapterTitle: 'Chapter 11: Coordinate geometry', topicId: 'y9-11c', topicCode: '11C', topicTitle: 'The gradient of a line', year: 'Year 9', seed: Y9_CH11C_QUESTIONS, label: 'Y9 Ch11 · The gradient of a line' },
  { chapterId: 'y9-11', chapterTitle: 'Chapter 11: Coordinate geometry', topicId: 'y9-11d', topicCode: '11D', topicTitle: 'The equation of a straight line', year: 'Year 9', seed: Y9_CH11D_QUESTIONS, label: 'Y9 Ch11 · The equation of a straight line' },
  { chapterId: 'y9-11', chapterTitle: 'Chapter 11: Coordinate geometry', topicId: 'y9-11e', topicCode: '11E', topicTitle: 'Graphing straight lines', year: 'Year 9', seed: Y9_CH11E_QUESTIONS, label: 'Y9 Ch11 · Graphing straight lines' },
  { chapterId: 'y9-11', chapterTitle: 'Chapter 11: Coordinate geometry', topicId: 'y9-11f', topicCode: '11F', topicTitle: 'The equation of a line using the gradient and a point', year: 'Year 9', seed: Y9_CH11F_QUESTIONS, label: 'Y9 Ch11 · The equation of a line using the gradient and a point' },
  { chapterId: 'y9-11', chapterTitle: 'Chapter 11: Coordinate geometry', topicId: 'y9-11g', topicCode: '11G', topicTitle: 'Parallel and perpendicular straight lines', year: 'Year 9', seed: Y9_CH11G_QUESTIONS, label: 'Y9 Ch11 · Parallel and perpendicular straight lines' },
  { chapterId: 'y9-11', chapterTitle: 'Chapter 11: Coordinate geometry', topicId: 'y9-11h', topicCode: '11H', topicTitle: 'The circle', year: 'Year 9', seed: Y9_CH11H_QUESTIONS, label: 'Y9 Ch11 · The circle' },
  { chapterId: 'y9-11', chapterTitle: 'Chapter 11: Coordinate geometry', topicId: 'y9-11i', topicCode: '11I', topicTitle: 'Challenge exercise', year: 'Year 9', seed: Y9_CH11I_QUESTIONS, label: 'Y9 Ch11 · Challenge exercise' },
  { chapterId: 'y9-14', chapterTitle: 'Chapter 14: Simultaneous linear equations', topicId: 'y9-14a', topicCode: '14A', topicTitle: 'Solving simultaneous equations by drawing graphs', year: 'Year 9', seed: Y9_CH14_QUESTIONS, label: 'Y9 Ch14 · 14A Graphical solution' },
  { chapterId: 'y9-14', chapterTitle: 'Chapter 14: Simultaneous linear equations', topicId: 'y9-14b', topicCode: '14B', topicTitle: 'Substitution', year: 'Year 9', seed: Y9_CH14B_QUESTIONS, label: 'Y9 Ch14 · 14B Substitution' },
  { chapterId: 'y9-14', chapterTitle: 'Chapter 14: Simultaneous linear equations', topicId: 'y9-14c', topicCode: '14C', topicTitle: 'Elimination', year: 'Year 9', seed: Y9_CH14C_QUESTIONS, label: 'Y9 Ch14 · 14C Elimination' },
  { chapterId: 'y9-14', chapterTitle: 'Chapter 14: Simultaneous linear equations', topicId: 'y9-14d', topicCode: '14D', topicTitle: 'Word Problems', year: 'Year 9', seed: Y9_CH14D_QUESTIONS, label: 'Y9 Ch14 · 14D Word Problems' },
  { chapterId: 'y9-14', chapterTitle: 'Chapter 14: Simultaneous linear equations', topicId: 'y9-14e', topicCode: '14E', topicTitle: 'Geometry and simultaneous equations', year: 'Year 9', seed: Y9_CH14E_QUESTIONS, label: 'Y9 Ch14 · 14E Geometry' },
  { chapterId: 'y9-14', chapterTitle: 'Chapter 14: Simultaneous linear equations', topicId: 'y9-14f', topicCode: '14F', topicTitle: 'Families of straight lines', year: 'Year 9', seed: Y9_CH14F_QUESTIONS, label: 'Y9 Ch14 · 14F Families of lines' },
  { chapterId: 'y9-14', chapterTitle: 'Chapter 14: Simultaneous linear equations', topicId: 'y9-14g', topicCode: '14G', topicTitle: 'Revision', year: 'Year 9', seed: Y9_CH14G_QUESTIONS, label: 'Y9 Ch14 · 14G Revision' },
  { chapterId: 'y8-1', chapterTitle: 'Chapter 1: Whole numbers', topicId: 'y8-1c', topicCode: '1C', topicTitle: 'Problem solving', year: 'Year 8', seed: Y8_CH1C_QUESTIONS, label: 'Y8 Ch1 · Problem solving' },
  { chapterId: 'y8-2', chapterTitle: 'Chapter 2: Fractions and decimals', topicId: 'y8-2h', topicCode: '2H', topicTitle: 'Review of fractions and decimals', year: 'Year 8', seed: Y8_CH2H_QUESTIONS, label: 'Y8 Ch2 · Review' },
  { chapterId: 'y8-3', chapterTitle: 'Chapter 3: Review of factors and indices', topicId: 'y8-3f', topicCode: '3F', topicTitle: 'Review of factors and indices', year: 'Year 8', seed: Y8_CH3F_QUESTIONS, label: 'Y8 Ch3 · Review' },
  { chapterId: 'y8-3', chapterTitle: 'Chapter 3: HCF and LCM', topicId: 'y8-3a', topicCode: '3A', topicTitle: 'HCF and LCM', year: 'Year 8', seed: Y8_CH3A_QUESTIONS, label: 'Y8 Ch3 · HCF and LCM' },
  { chapterId: 'y8-4', chapterTitle: 'Chapter 4: Negative numbers', topicId: 'y8-4h', topicCode: '4H', topicTitle: 'Review of negative numbers', year: 'Year 8', seed: Y8_CH4H_QUESTIONS, label: 'Y8 Ch4 · Review' },
  { chapterId: 'y8-4', chapterTitle: 'Chapter 4: Integers', topicId: 'y8-4a', topicCode: '4A', topicTitle: 'Integers', year: 'Year 8', seed: Y8_CH4A_QUESTIONS, label: 'Y8 Ch4 · Integers' },
  { chapterId: 'y8-5', chapterTitle: 'Chapter 5: Review of geometry', topicId: 'y8-5h', topicCode: '5H', topicTitle: 'Review of geometry', year: 'Year 8', seed: Y8_CH5H_QUESTIONS, label: 'Y8 Ch5 · Review' },
  { chapterId: 'y8-5', chapterTitle: 'Chapter 5: Angles', topicId: 'y8-5a', topicCode: '5A', topicTitle: 'Angles', year: 'Year 8', seed: Y8_CH5A_QUESTIONS, label: 'Y8 Ch5 · Angles' },
  { chapterId: 'y8-5', chapterTitle: 'Chapter 5: Review of geometry', topicId: 'y8-5i', topicCode: '5I', topicTitle: 'Geometry challenge', year: 'Year 8', seed: Y8_CH5I_QUESTIONS, label: 'Y8 Ch5 · Challenge' },
  { chapterId: 'y8-6', chapterTitle: 'Chapter 6: Review of algebra', topicId: 'y8-6h', topicCode: '6H', topicTitle: 'Review of algebra', year: 'Year 8', seed: Y8_CH6H_QUESTIONS, label: 'Y8 Ch6 · Review' },
  { chapterId: 'y8-6', chapterTitle: 'Chapter 6: Substitution', topicId: 'y8-6a', topicCode: '6A', topicTitle: 'Substitution', year: 'Year 8', seed: Y8_CH6A_QUESTIONS, label: 'Y8 Ch6 · Substitution' },
  { chapterId: 'y8-7', chapterTitle: 'Chapter 7: Percentages', topicId: 'y8-7i', topicCode: '7I', topicTitle: 'Review of percentages', year: 'Year 8', seed: Y8_CH7I_QUESTIONS, label: 'Y8 Ch7 · Review' },
  { chapterId: 'y8-7', chapterTitle: 'Chapter 7: Percentages', topicId: 'y8-7a', topicCode: '7A', topicTitle: 'Percentages', year: 'Year 8', seed: Y8_CH7A_QUESTIONS, label: 'Y8 Ch7 · Percentages' },
  { chapterId: 'y8-8', chapterTitle: "Chapter 8: Pythagoras' theorem", topicId: 'y8-8d', topicCode: '8D', topicTitle: "Review of Pythagoras' theorem", year: 'Year 8', seed: Y8_CH8D_QUESTIONS, label: 'Y8 Ch8 · Review' },
  { chapterId: 'y8-9', chapterTitle: 'Chapter 9: Pythagoras Theorem', topicId: 'y8-9a', topicCode: '9A', topicTitle: 'Pythagoras theorem', year: 'Year 8', seed: Y8_CH9A_QUESTIONS, label: 'Y8 Ch9 · Pythagoras theorem' },
  { chapterId: 'y8-10', chapterTitle: 'Chapter 10: Rates and ratios', topicId: 'y8-10a', topicCode: '10A', topicTitle: 'Review of the unitary method', year: 'Year 8', seed: Y8_CH10A_QUESTIONS, label: 'Y8 Ch10 · Unitary method' },
  { chapterId: 'y8-10', chapterTitle: 'Chapter 10: Rates and ratios', topicId: 'y8-10G', topicCode: '10G', topicTitle: 'Review of rates and ratios', year: 'Year 8', seed: Y8_CH10G_QUESTIONS, label: 'Y8 Ch10 · Review' },
  { chapterId: 'y8-11', chapterTitle: 'Chapter 11: Algebra - part 2', topicId: 'y8-11a', topicCode: '11A', topicTitle: 'Expanding brackets and collecting like terms', year: 'Year 8', seed: Y8_CH11A_QUESTIONS, label: 'Y8 Ch11 · Algebra part 2' },
  { chapterId: 'y8-11', chapterTitle: 'Chapter 11: Algebra - part 2', topicId: 'y8-11e', topicCode: '11E', topicTitle: 'Review', year: 'Year 8', seed: Y8_CH11E_QUESTIONS, label: 'Y8 Ch11 · Review' },
  { chapterId: 'y8-12', chapterTitle: 'Chapter 12: Congruent triangles', topicId: 'y8-12a', topicCode: '12A', topicTitle: 'Congruence of figures in the plane', year: 'Year 8', seed: Y8_CH12A_QUESTIONS, label: 'Y8 Ch12 · Congruence' },
  { chapterId: 'y8-12', chapterTitle: 'Chapter 12: Congruent triangles', topicId: 'y8-12g', topicCode: '12G', topicTitle: 'Review', year: 'Year 8', seed: Y8_CH12G_QUESTIONS, label: 'Y8 Ch12 · Review' },
  { chapterId: 'y8-13', chapterTitle: 'Chapter 13: Congruence and special quadrilaterals', topicId: 'y8-13a', topicCode: '13A', topicTitle: 'Parallelograms and their properties', year: 'Year 8', seed: Y8_CH13A_QUESTIONS, label: 'Y8 Ch13 · Congruence and special quadrilaterals' },
  { chapterId: 'y8-13', chapterTitle: 'Chapter 13: Congruence and special quadrilaterals', topicId: 'y8-13d', topicCode: '13D', topicTitle: 'Review', year: 'Year 8', seed: Y8_CH13D_QUESTIONS, label: 'Y8 Ch13 · Review' },
  { chapterId: 'y8-14', chapterTitle: 'Chapter 14: Circles', topicId: 'y8-14a', topicCode: '14A', topicTitle: 'Features of the circle', year: 'Year 8', seed: Y8_CH14A_QUESTIONS, label: 'Y8 Ch14 · Circles' },
  { chapterId: 'y8-14', chapterTitle: 'Chapter 14: Circles', topicId: 'y8-14e', topicCode: '14E', topicTitle: 'Review', year: 'Year 8', seed: Y8_CH14E_QUESTIONS, label: 'Y8 Ch14 · Review' },
  { chapterId: 'y8-15', chapterTitle: 'Chapter 15: Area, volume and time', topicId: 'y8-15a', topicCode: '15A', topicTitle: 'Review of area and length', year: 'Year 8', seed: Y8_CH15A_QUESTIONS, label: 'Y8 Ch15 · Area, volume and time' },
  { chapterId: 'y8-15', chapterTitle: 'Chapter 15: Areas, volumes and time', topicId: 'y8-15i', code: '15I', topicCode: '15I', topicTitle: 'Review', year: 'Year 8', seed: Y8_CH15I_QUESTIONS, label: 'Y8 Ch15 · Review' },
  { chapterId: 'y8-16', chapterTitle: 'Chapter 16: Probability', topicId: 'y8-16a', topicCode: '16A', topicTitle: 'An introduction to probability', year: 'Year 8', seed: Y8_CH16A_QUESTIONS, label: 'Y8 Ch16 · Probability' },
  { chapterId: 'y8-16', chapterTitle: 'Chapter 16: Probability', topicId: 'y8-16e', topicCode: '16E', topicTitle: 'Review', year: 'Year 8', seed: Y8_CH16E_QUESTIONS, label: 'Y8 Ch16 · Review' },
  { chapterId: 'y8-17', chapterTitle: 'Chapter 17: Formulas and factorisation', topicId: 'y8-17a', topicCode: '17A', topicTitle: 'Formulas', year: 'Year 8', seed: Y8_CH17A_QUESTIONS, label: 'Y8 Ch17 · Formulas' },
  { chapterId: 'y8-17', chapterTitle: 'Chapter 17: Formulas and factorisation', topicId: 'y8-17e', topicCode: '17E', topicTitle: 'Review', year: 'Year 8', seed: Y8_CH17E_QUESTIONS, label: 'Y8 Ch17 · Review' },
  { chapterId: 'y8-18', chapterTitle: 'Chapter 18: Graphing straight lines', topicId: 'y8-18a', topicCode: '18A', topicTitle: 'The Cartesian plane', year: 'Year 8', seed: Y8_CH18A_QUESTIONS, label: 'Y8 Ch18 · Graphing straight lines' },
  { chapterId: 'y8-18', chapterTitle: 'Chapter 18: Graphing straight lines', topicId: 'y8-18i', topicCode: '18I', topicTitle: 'Review', year: 'Year 8', seed: Y8_CH18I_QUESTIONS, label: 'Y8 Ch18 · Review' },
  { chapterId: 'y8-19', chapterTitle: 'Chapter 19: Statistics', topicId: 'y8-19a', topicCode: '19A', topicTitle: 'Comparing means and medians', year: 'Year 8', seed: Y8_CH19A_QUESTIONS, label: 'Y8 Ch19 · Statistics' },
  { chapterId: 'y7-1', chapterTitle: 'Chapter 1: Whole numbers', topicId: 'y7-1b', topicCode: '1B', topicTitle: 'Addition', year: 'Year 7', seed: Y7_CH1B_QUESTIONS, label: 'Y7 Ch1 · 1B Addition' },
  { chapterId: 'y7-1', chapterTitle: 'Chapter 1: Whole numbers', topicId: 'y7-1c', topicCode: '1C', topicTitle: 'The standard addition algorithm', year: 'Year 7', seed: Y7_CH1C_QUESTIONS, label: 'Y7 Ch1 · 1C The standard addition algorithm' },
  { chapterId: 'y7-1', chapterTitle: 'Chapter 1: Whole numbers', topicId: 'y7-1d', topicCode: '1D', topicTitle: 'Subtraction', year: 'Year 7', seed: Y7_CH1D_QUESTIONS, label: 'Y7 Ch1 · 1D Subtraction' },
  { chapterId: 'y7-1', chapterTitle: 'Chapter 1: Whole numbers', topicId: 'y7-1e', topicCode: '1E', topicTitle: 'Multiplication', year: 'Year 7', seed: Y7_CH1E_QUESTIONS, label: 'Y7 Ch1 · 1E Multiplication' },
  { chapterId: 'y7-1', chapterTitle: 'Chapter 1: Whole numbers', topicId: 'y7-1f', topicCode: '1F', topicTitle: 'Mental strategies and distributive law', year: 'Year 7', seed: Y7_CH1F_QUESTIONS, label: 'Y7 Ch1 · 1F Mental strategies and distributive law' },
  { chapterId: 'y7-1', chapterTitle: 'Chapter 1: Whole numbers', topicId: 'y7-1g', topicCode: '1G', topicTitle: 'Place value', year: 'Year 7', seed: Y7_CH1G_QUESTIONS, label: 'Y7 Ch1 · 1G Place value' },
  { chapterId: 'y7-1', chapterTitle: 'Chapter 1: Whole numbers', topicId: 'y7-1h', topicCode: '1H', topicTitle: 'The standard multiplication algorithms', year: 'Year 7', seed: Y7_CH1H_QUESTIONS, label: 'Y7 Ch1 · 1H The standard multiplication algorithms' },
  { chapterId: 'y7-1', chapterTitle: 'Chapter 1: Whole numbers', topicId: 'y7-1i', topicCode: '1I', topicTitle: 'Division', year: 'Year 7', seed: Y7_CH1I_QUESTIONS, label: 'Y7 Ch1 · 1I Division' },
  { chapterId: 'y7-1', chapterTitle: 'Chapter 1: Whole numbers', topicId: 'y7-1j', topicCode: '1J', topicTitle: 'The short division algorithm', year: 'Year 7', seed: Y7_CH1J_QUESTIONS, label: 'Y7 Ch1 · 1J The short division algorithm' },
  { chapterId: 'y7-1', chapterTitle: 'Chapter 1: Whole numbers', topicId: 'y7-1k', topicCode: '1K', topicTitle: 'The long division algorithm', year: 'Year 7', seed: Y7_CH1K_QUESTIONS, label: 'Y7 Ch1 · 1K The long division algorithm' },
  { chapterId: 'y7-1', chapterTitle: 'Chapter 1: Whole numbers', topicId: 'y7-1l', topicCode: '1L', topicTitle: 'Order of operations', year: 'Year 7', seed: Y7_CH1L_QUESTIONS, label: 'Y7 Ch1 · 1L Order of operations' },
  { chapterId: 'y7-1', chapterTitle: 'Chapter 1: Whole numbers', topicId: 'y7-1m', topicCode: '1M', topicTitle: 'Revision', year: 'Year 7', seed: Y7_CH1M_QUESTIONS, label: 'Y7 Ch1 · 1M Revision' },
  { chapterId: 'y7-2', chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility', topicId: 'y7-2b', topicCode: '2B', topicTitle: 'Odd and even numbers', year: 'Year 7', seed: Y7_CH2B_QUESTIONS, label: 'Y7 Ch2 · 2B Odd and even numbers' },
  { chapterId: 'y7-2', chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility', topicId: 'y7-2c', topicCode: '2C', topicTitle: 'Prime and composite numbers', year: 'Year 7', seed: Y7_CH2C_QUESTIONS, label: 'Y7 Ch2 · 2C Prime and composite numbers' },
  { chapterId: 'y7-2', chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility', topicId: 'y7-2d', topicCode: '2D', topicTitle: 'Powers of numbers', year: 'Year 7', seed: Y7_CH2D_QUESTIONS, label: 'Y7 Ch2 · 2D Powers of numbers' },
  { chapterId: 'y7-2', chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility', topicId: 'y7-2e', topicCode: '2E', topicTitle: 'Using mental strategies to multiply and divide', year: 'Year 7', seed: Y7_CH2E_QUESTIONS, label: 'Y7 Ch2 · 2E Using mental strategies to multiply and divide' },
  { chapterId: 'y7-2', chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility', topicId: 'y7-2f', topicCode: '2F', topicTitle: 'Using powers in factorisation', year: 'Year 7', seed: Y7_CH2F_QUESTIONS, label: 'Y7 Ch2 · 2F Using powers in factorisation' },
  { chapterId: 'y7-2', chapterTitle: 'Chapter 2: Factors, multiples, primes and divisibility', topicId: 'y7-2g', topicCode: '2G', topicTitle: 'Squares and square roots', year: 'Year 7', seed: Y7_CH2G_QUESTIONS, label: 'Y7 Ch2 · 2G Squares and square roots' },
  { chapterId: 'y7-3', chapterTitle: 'Chapter 3: An introduction to algebra', topicId: 'y7-3b', topicCode: '3B', topicTitle: 'Algebraic notation', year: 'Year 7', seed: Y7_CH3B_QUESTIONS, label: 'Y7 Ch3 · Algebraic notation' },
  { chapterId: 'y7-3', chapterTitle: 'Chapter 3: An introduction to algebra', topicId: 'y7-3c', topicCode: '3C', topicTitle: 'Substitution', year: 'Year 7', seed: Y7_CH3C_QUESTIONS, label: 'Y7 Ch3 · Substitution' },
  { chapterId: 'y7-3', chapterTitle: 'Chapter 3: An introduction to algebra', topicId: 'y7-3d', topicCode: '3D', topicTitle: 'Adding and subtracting like terms', year: 'Year 7', seed: Y7_CH3D_QUESTIONS, label: 'Y7 Ch3 · Adding and subtracting like terms' },
  { chapterId: 'y7-3', chapterTitle: 'Chapter 3: An introduction to algebra', topicId: 'y7-3e', topicCode: '3E', topicTitle: 'Algebra with brackets', year: 'Year 7', seed: Y7_CH3E_QUESTIONS, label: 'Y7 Ch3 · Algebra with brackets' },
  { chapterId: 'y7-3', chapterTitle: 'Chapter 3: An introduction to algebra', topicId: 'y7-3f', topicCode: '3F', topicTitle: 'Multiplying algebraic terms', year: 'Year 7', seed: Y7_CH3F_QUESTIONS, label: 'Y7 Ch3 · Multiplying algebraic terms' },
  { chapterId: 'y7-3', chapterTitle: 'Chapter 3: An introduction to algebra', topicId: 'y7-3g', topicCode: '3G', topicTitle: 'Describing arrays, areas and number patterns', year: 'Year 7', seed: Y7_CH3G_QUESTIONS, label: 'Y7 Ch3 · Describing arrays, areas and number patterns' },
  { chapterId: 'y7-3', chapterTitle: 'Chapter 3: An introduction to algebra', topicId: 'y7-3h', topicCode: '3H', topicTitle: 'Chapter review', year: 'Year 7', seed: Y7_CH3H_QUESTIONS, label: 'Y7 Ch3 · Chapter review' },
  { chapterId: 'y7-23', chapterTitle: 'Chapter 23: Algebra', topicId: 'y7-23a', topicCode: '23A', topicTitle: 'Algebraic expressions', year: 'Year 7', seed: Y7_CH23A_QUESTIONS, label: 'Y7 Ch23 · Algebraic expressions' },
  { chapterId: 'y7-23', chapterTitle: 'Chapter 23: Algebra', topicId: 'y7-23b', topicCode: '23B', topicTitle: 'Like terms and unlike terms', year: 'Year 7', seed: Y7_CH23B_QUESTIONS, label: 'Y7 Ch23 · Like terms and unlike terms' },
  { chapterId: 'y7-23', chapterTitle: 'Chapter 23: Algebra', topicId: 'y7-23c', topicCode: '23C', topicTitle: 'Simplifying algebraic expressions', year: 'Year 7', seed: Y7_CH23C_QUESTIONS, label: 'Y7 Ch23 · Simplifying algebraic expressions' },
  { chapterId: 'y7-23', chapterTitle: 'Chapter 23: Algebra', topicId: 'y7-23d', topicCode: '23D', topicTitle: 'Collecting like terms', year: 'Year 7', seed: Y7_CH23D_QUESTIONS, label: 'Y7 Ch23 · Collecting like terms' },
  { chapterId: 'y7-23', chapterTitle: 'Chapter 23: Algebra', topicId: 'y7-23e', topicCode: '23E', topicTitle: 'Writing algebraic expressions', year: 'Year 7', seed: Y7_CH23E_QUESTIONS, label: 'Y7 Ch23 · Writing algebraic expressions' },
  { chapterId: 'y7-23', chapterTitle: 'Chapter 23: Algebra', topicId: 'y7-23f', topicCode: '23F', topicTitle: 'Substitution', year: 'Year 7', seed: Y7_CH23F_QUESTIONS, label: 'Y7 Ch23 · Substitution' },
  { chapterId: 'y7-23', chapterTitle: 'Chapter 23: Algebra', topicId: 'y7-23h', topicCode: '23H', topicTitle: 'Multiplying, dividing and expanding', year: 'Year 7', seed: Y7_CH23H_QUESTIONS, label: 'Y7 Ch23 · Multiplying, dividing and expanding' },
  { chapterId: 'y7-23', chapterTitle: 'Chapter 23: Algebra', topicId: 'y7-23i', topicCode: '23I', topicTitle: 'Applying algebra', year: 'Year 7', seed: Y7_CH23I_QUESTIONS, label: 'Y7 Ch23 · Applying algebra' },
  { chapterId: 'y7-23', chapterTitle: 'Chapter 23: Algebra', topicId: 'y7-23j', topicCode: '23J', topicTitle: 'Problem solving with algebra', year: 'Year 7', seed: Y7_CH23J_QUESTIONS, label: 'Y7 Ch23 · Problem solving with algebra' },
  { chapterId: 'y10-5', chapterTitle: 'Chapter 5: Quadratic equations', topicId: 'y10-5a', topicCode: '5A', topicTitle: 'Solution of quadratic equations', year: 'Year 10', seed: Y10_CH5A_QUESTIONS, label: 'Y10 Ch5 · Solution of quadratic equations' },
  { chapterId: 'y10-6', chapterTitle: 'Chapter 6: Surface area and volume', topicId: 'y10-6a', topicCode: '6A', topicTitle: 'Review of prisms and cylinders', year: 'Year 10', seed: Y10_CH6_QUESTIONS, label: 'Y10 Ch6 · Review of prisms and cylinders' },
  // ── HSC Trial Exam Papers (multi-topic — each question carries its own topicId) ──
  { chapterId: 'exam:abbotsleigh-2020', badgeLabel: 'Y12 EXAM', examPaper: 'abbotsleigh-2020', chapterTitle: 'Abbotsleigh 2020 HSC Trial', topicId: 'y12a-exam', topicCode: 'EXAM', topicTitle: 'Abbotsleigh 2020 Trial Exam', year: 'Year 12', seed: ABBOTSLEIGH_2020_QUESTIONS, label: 'Y12 · Abbotsleigh 2020 HSC Trial (Advanced)' },
  { chapterId: 'exam:asc-2020', badgeLabel: 'Y12 EXAM', examPaper: 'asc-2020', chapterTitle: 'Ascham 2020 HSC Trial', topicId: 'y12a-exam', topicCode: 'EXAM', topicTitle: 'Ascham 2020 Trial Exam', year: 'Year 12', seed: ASCHAM_2020_QUESTIONS, label: 'Y12 · Ascham 2020 HSC Trial (Advanced)' },
  { chapterId: 'exam:bar-2020', badgeLabel: 'Y12 EXAM', examPaper: 'bar-2020', chapterTitle: 'Barker 2020 HSC Trial', topicId: 'y12a-exam', topicCode: 'EXAM', topicTitle: 'Barker 2020 Trial Exam', year: 'Year 12', seed: BARKER_2020_QUESTIONS, label: 'Y12 · Barker 2020 HSC Trial (Advanced)' },
  { chapterId: 'exam:baulko-2020', badgeLabel: 'Y12 EXAM', examPaper: 'baulko-2020', chapterTitle: 'Baulkham Hills 2020 HSC Trial', topicId: 'y12a-exam', topicCode: 'EXAM', topicTitle: 'Baulkham Hills 2020 Trial Exam', year: 'Year 12', seed: BAULKHAM_2020_QUESTIONS, label: 'Y12 · Baulkham Hills 2020 HSC Trial (Advanced)' },
  { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5A', topicCode: '5A', topicTitle: 'Review of exponential functions base e', year: 'Year 12', seed: Y12A_CH5A_QUESTIONS, label: 'Y12 Ch5 · 5A Review of exponential functions base e' },
  { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5B', topicCode: '5B', topicTitle: 'Differentiation of exponential functions', year: 'Year 12', seed: Y12A_CH5B_QUESTIONS, label: 'Y12 Ch5 · 5B Differentiation of exponential functions' },
  { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5C', topicCode: '5C', topicTitle: 'Applications of differentiation', year: 'Year 12', seed: Y12A_CH5C_QUESTIONS, label: 'Y12 Ch5 · 5C Applications of differentiation' },
  { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5D', topicCode: '5D', topicTitle: 'Integration of exponential functions', year: 'Year 12', seed: Y12A_CH5D_QUESTIONS, label: 'Y12 Ch5 · 5D Integration of exponential functions' },
  { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5E', topicCode: '5E', topicTitle: 'Applications of integration', year: 'Year 12', seed: Y12A_CH5E_QUESTIONS, label: 'Y12 Ch5 · 5E Applications of integration' },
  { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5F', topicCode: '5F', topicTitle: 'Review of logarithmic functions', year: 'Year 12', seed: Y12A_CH5F_QUESTIONS, label: 'Y12 Ch5 · 5F Review of logarithmic functions' },
  { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5G', topicCode: '5G', topicTitle: 'Differentiation of logarithmic functions', year: 'Year 12', seed: Y12A_CH5G_QUESTIONS, label: 'Y12 Ch5 · 5G Differentiation of logarithmic functions' },
  { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5H', topicCode: '5H', topicTitle: 'Applications of differentiation', year: 'Year 12', seed: Y12A_CH5H_QUESTIONS, label: 'Y12 Ch5 · 5H Applications of differentiation' },
  { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5I', topicCode: '5I', topicTitle: 'Integration giving logarithms', year: 'Year 12', seed: Y12A_CH5I_QUESTIONS, label: 'Y12 Ch5 · 5I Integration giving logarithms' },
  { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5J', topicCode: '5J', topicTitle: 'Areas and the logarithmic function', year: 'Year 12', seed: Y12A_CH5J_QUESTIONS, label: 'Y12 Ch5 · 5J Areas and the logarithmic function' },
  { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5K', topicCode: '5K', topicTitle: 'Calculus with other bases', year: 'Year 12', seed: Y12A_CH5K_QUESTIONS, label: 'Y12 Ch5 · 5K Calculus with other bases' },
  { chapterId: 'y12a-5', chapterTitle: 'Chapter 5: The exponential and logarithmic functions', topicId: 'y12a-5L', topicCode: '5L', topicTitle: 'Chapter 5 Revision', year: 'Year 12', seed: Y12A_CH5L_QUESTIONS, label: 'Y12 Ch5 · 5L Chapter 5 Revision' },
];
import {
  fetchHscResultsIncremental,
  loadCachedHscResults,
} from '../services/hscResultsService';
import { localCache } from '../services/localCacheService';
import './curriculum.css';
import './hsc-chart.css';


const YEARS = Array.from({ length: 12 }, (_, i) => `Year ${i + 1}`);
// Bump the cache key suffix to invalidate every client's stored counts once.
// Pre-existing caches were written before the seeder & delete paths bumped
// sync_meta, so chapter cards could show pre-seed numbers indefinitely even
// after thousands of questions were added. Forcing one re-fetch resyncs all
// existing installs.
const QUESTION_COUNT_CACHE_KEY = 'sapere:question-counts:v4';
const QUESTION_COUNT_CACHE_TTL_MS = 6 * 60 * 60 * 1000;
const CURRICULUM_CACHE_KEY = 'curriculum-records:v1';
const ADMIN_TOOL_COUNT_IDS = [
  'y6-wn',
  'y11a-1', 'y11-1', 'y11a-2', 'y11-2', 'y11a-3', 'y11-3', 'y11a-4', 'y11a-5', 'y11a-6', 
  'y10-1', 'y10-3', 'y10-4', 
  'y9-1', 
  'y8-1', 
  'y7-1', 'y7-2', 'y7-3', 'y7-4', 'y7-5', 'y7-5a', 'y7-6', 'y7-6a', 'y7-7', 'y7-7a', 'y7-8', 'y7-8a', 'y7-10a', 'y7-11a', 'y7-12a', 'y7-13a', 'y7-14a', 'y7-15a', 'y7-16a', 'y7-17a', 'y7-18a', 'y7-19a', 'y7-20a'
];

const loadCachedQuestionCounts = () => {
  try {
    if (typeof window === 'undefined') return { counts: {}, savedAt: 0, version: 0 };
    const parsed = JSON.parse(window.localStorage.getItem(QUESTION_COUNT_CACHE_KEY) || '{}');
    if (parsed && typeof parsed === 'object' && parsed.counts) return parsed;
    return { counts: parsed || {}, savedAt: 0, version: 0 };
  } catch {
    return { counts: {}, savedAt: 0, version: 0 };
  }
};

const saveCachedQuestionCounts = (counts, version = 0) => {
  try {
    window.localStorage.setItem(QUESTION_COUNT_CACHE_KEY, JSON.stringify({ counts, savedAt: Date.now(), version }));
  } catch {
    // Cache only; ignore private-mode/quota failures.
  }
};

const Curriculum = () => {
  const { user, isAdmin } = useAuth();
  const { showToast } = useToast();
  const [selectedYear, setSelectedYear] = useState('Year 11');
  const [selectedCourse, setSelectedCourse] = useState('Advanced');
  const [searchQuery, setSearchQuery] = useState('');
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [curriculumRecords, setCurriculumRecords] = useState([]);
  const [isMigrating, setIsMigrating] = useState(false);
  const [editingChapter, setEditingChapter] = useState(null); // { mode: 'add'|'edit', chapter: {} }
  const [editingSubtopicIndex, setEditingSubtopicIndex] = useState(-1);
  const [subtopicForm, setSubtopicForm] = useState({ code: '', title: '', page: '' });

  const closeEditingChapterModal = () => {
    setEditingChapter(null);
    setEditingSubtopicIndex(-1);
    setSubtopicForm({ code: '', title: '', page: '' });
  };
  // Chapter card click navigates to a topics list page (not a modal); choosing
  // a topic opens the student-style question bank page for that topic.
  const [selectedChapterForQuestions, setSelectedChapterForQuestions] = useState(null);
  const [selectedTopicForBank, setSelectedTopicForBank] = useState(null);
  const [questionCounts, setQuestionCounts] = useState({});
  const [showAdminTools, setShowAdminTools] = useState(false);
  const [adminActiveTab, setAdminActiveTab] = useState('y11_12');
  const [expandedSeedYears, setExpandedSeedYears] = useState({});
  const [searchOpen, setSearchOpen] = useState(false);
  const [hscRecords, setHscRecords] = useState([]);
  const [hscModalOpen, setHscModalOpen] = useState(false);

  // Fetch Curriculum from Firestore
  useEffect(() => {
    if (!isAdmin) {
      setLoading(false);
      return undefined;
    }

    setLoading(true);
    let cancelled = false;
    const cached = localCache.get(CURRICULUM_CACHE_KEY);
    if (Array.isArray(cached?.records)) {
      setCurriculumRecords(cached.records);
      setLoading(false);
    }

    const fetchCurriculumIfChanged = async () => {
      try {
        const metaSnap = await getDoc(doc(db, 'sync_meta', 'curriculum'));
        const remoteVersion = Number(metaSnap.data()?.version || metaSnap.data()?.updatedAt?.toMillis?.() || 0);
        if (cached?.records && cached?.version === remoteVersion && remoteVersion > 0) return;
        const snap = await getDocs(collection(db, 'curriculum'));
        if (cancelled) return;
        const records = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        const version = remoteVersion || Date.now();
        if (!remoteVersion) {
          setDoc(doc(db, 'sync_meta', 'curriculum'), {
            version,
            updatedAt: serverTimestamp(),
          }, { merge: true }).catch(() => {});
        }
        setCurriculumRecords(records);
        localCache.set(CURRICULUM_CACHE_KEY, {
          version,
          savedAt: Date.now(),
          records,
        });
      } catch (err) {
        console.error("Firestore error in Curriculum:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCurriculumIfChanged();
    return () => {
      cancelled = true;
    };
  }, [isAdmin]);

  const handleUpdateChapters = async (newChapters) => {
    const docId = courses 
      ? `${selectedYear.replace(' ', '_')}_${selectedCourse}`
      : selectedYear.replace(' ', '_');
    
    const docRef = doc(db, 'curriculum', docId);
    try {
      await setDoc(docRef, {
        year: selectedYear,
        course: selectedCourse || null,
        chapters: newChapters,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      await setDoc(doc(db, 'sync_meta', 'curriculum'), {
        version: Date.now(),
        updatedAt: serverTimestamp(),
      }, { merge: true });
      localCache.remove(CURRICULUM_CACHE_KEY);
      
      // Update local state directly to reflect changes in UI immediately
      setCurriculumRecords(prev => {
        const index = prev.findIndex(r => r.id === docId);
        if (index >= 0) {
          const updated = [...prev];
          updated[index] = { ...updated[index], chapters: newChapters, updatedAt: new Date().toISOString() };
          return updated;
        } else {
          return [...prev, { id: docId, year: selectedYear, course: selectedCourse || null, chapters: newChapters, updatedAt: new Date().toISOString() }];
        }
      });
    } catch (err) {
      console.error("Error updating curriculum:", err);
      showToast("Failed to save changes.", 'error');
    }
  };

  const handleDeleteChapter = async (chapterId) => {
    if (!window.confirm("Are you sure you want to delete this chapter?")) return;
    const base = currentRecord?.chapters ? [...currentRecord.chapters] : [...displayData];
    const newChapters = base.filter(c => c.id !== chapterId);
    await handleUpdateChapters(newChapters);
  };

  const handleAddOrUpdateSubtopic = (e) => {
    e.preventDefault();
    if (!subtopicForm.code || !subtopicForm.title) {
      showToast("Please enter both Code and Title.", "warning");
      return;
    }

    const currentTopics = [...(editingChapter.chapter.topics || [])];
    const newSubtopic = {
      id: subtopicForm.id || `${editingChapter.chapter.id}-${subtopicForm.code.toLowerCase()}`,
      code: subtopicForm.code,
      title: subtopicForm.title,
      page: subtopicForm.page ? parseInt(subtopicForm.page) : ''
    };

    if (editingSubtopicIndex >= 0) {
      currentTopics[editingSubtopicIndex] = newSubtopic;
    } else {
      currentTopics.push(newSubtopic);
    }

    setEditingChapter({
      ...editingChapter,
      chapter: {
        ...editingChapter.chapter,
        topics: currentTopics
      }
    });

    setSubtopicForm({ code: '', title: '', page: '' });
    setEditingSubtopicIndex(-1);
  };

  const handleEditSubtopicClick = (index, subtopic) => {
    setEditingSubtopicIndex(index);
    setSubtopicForm({
      id: subtopic.id,
      code: subtopic.code,
      title: subtopic.title,
      page: subtopic.page || ''
    });
  };

  const handleDeleteSubtopic = (index) => {
    const currentTopics = [...(editingChapter.chapter.topics || [])];
    currentTopics.splice(index, 1);
    setEditingChapter({
      ...editingChapter,
      chapter: {
        ...editingChapter.chapter,
        topics: currentTopics
      }
    });
    
    if (editingSubtopicIndex === index) {
      setSubtopicForm({ code: '', title: '', page: '' });
      setEditingSubtopicIndex(-1);
    } else if (editingSubtopicIndex > index) {
      setEditingSubtopicIndex(editingSubtopicIndex - 1);
    }
  };

  const handleSaveChapter = async (e) => {
    e.preventDefault();
    let chapterData = { ...editingChapter.chapter };

    // UX FIX: If user typed in the "Add Subtopic" form but forgot to click [+], 
    // we automatically append it to the topics array before saving!
    if (subtopicForm.code && subtopicForm.title) {
      const currentTopics = [...(chapterData.topics || [])];
      const newSubtopic = {
        id: subtopicForm.id || `${chapterData.id || ''}-${subtopicForm.code.toLowerCase()}`,
        code: subtopicForm.code,
        title: subtopicForm.title,
        page: subtopicForm.page ? parseInt(subtopicForm.page) : ''
      };
      if (editingSubtopicIndex >= 0) {
        currentTopics[editingSubtopicIndex] = newSubtopic;
      } else {
        currentTopics.push(newSubtopic);
      }
      chapterData.topics = currentTopics;
      setSubtopicForm({ code: '', title: '', page: '' });
      setEditingSubtopicIndex(-1);
    }

    // Use currentRecord if it exists; otherwise fall back to displayData so
    // CURRICULUM_DATA chapters are preserved when no Firestore record exists yet.
    let newChapters = currentRecord?.chapters
      ? [...currentRecord.chapters]
      : [...displayData];

    if (editingChapter.mode === 'add') {
      if (!chapterData.title?.trim()) {
        showToast("Please enter a chapter title.", "warning");
        return;
      }
      const newId = `${selectedYear.toLowerCase().replace(' ', '')}-${Date.now()}`;
      newChapters.push({ ...chapterData, id: newId });
    } else {
      const idx = newChapters.findIndex(c => c.id === chapterData.id);
      if (idx >= 0) {
        newChapters[idx] = chapterData;
      } else {
        newChapters.push(chapterData); // fallback: chapter wasn't in list yet
      }
    }

    await handleUpdateChapters(newChapters);
    closeEditingChapterModal();
  };

  const handleSeedAlgebraQuestions = async () => {
    if (!window.confirm("This will replace all existing questions for Chapter 1 with the latest 74 questions. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');
      
      // 1. Clear existing
      const q = query(collRef, where('chapterId', '==', 'y11a-1'));
      const snap = await getDocs(q);
      const batch = writeBatch(db);
      snap.docs.forEach(d => batch.delete(d.ref));
      await batch.commit();

      // 2. Add new
      const addBatch = writeBatch(db);
      
      ALGEBRA_QUESTIONS_Y11A.forEach(qData => {
        const docRef = doc(collRef);
        const shuffledOpts = [...qData.opts].sort(() => Math.random() - 0.5);
        const correctIndex = shuffledOpts.indexOf(qData.a);

        addBatch.set(docRef, {
          chapterId: 'y11a-1',
          chapterTitle: 'Chapter 1: Algebra review',
          topicId: 'y11a-1' + qData.c.slice(-1),
          topicCode: qData.c,
          topicTitle: qData.t,
          isManual: true,
          title: qData.q.replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q,
          difficulty: 'medium',
          timeLimit: 120,
          type: 'multiple_choice',
          options: shuffledOpts.map(o => ({ text: o, imageUrl: "" })),
          answer: correctIndex.toString(),
          hint: qData.h,
          solution: qData.s,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      });
      await addBatch.commit();
      showToast("Successfully updated 74 Algebra questions!", 'success');
    } catch (err) {
      console.error(err);
      showToast("Failed to update questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedSurdsQuestions = async () => {
    if (!window.confirm("This will replace all existing questions for Chapter 2 (Surds) with the latest randomized questions. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');
      
      // 1. Clear existing for chapter y11a-2
      const q = query(collRef, where('chapterId', '==', 'y11a-2'));
      const snap = await getDocs(q);
      const batch = writeBatch(db);
      snap.docs.forEach(d => batch.delete(d.ref));
      await batch.commit();

      // 2. Add new surds questions
      const addBatch = writeBatch(db);
      
      SURDS_QUESTIONS_Y11A.forEach(qData => {
        const docRef = doc(collRef);
        const shuffledOpts = [...qData.opts].sort(() => Math.random() - 0.5);
        const correctIndex = shuffledOpts.indexOf(qData.a);

        addBatch.set(docRef, {
          chapterId: 'y11a-2',
          chapterTitle: 'Chapter 2: Surds and indices',
          topicId: 'y11a-2' + qData.c.slice(-1),
          topicCode: qData.c,
          topicTitle: qData.t,
          isManual: true,
          title: qData.q.replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q,
          difficulty: 'medium',
          timeLimit: 120,
          type: 'multiple_choice',
          options: shuffledOpts.map(o => ({ text: o, imageUrl: "" })),
          answer: correctIndex.toString(),
          hint: qData.h,
          solution: qData.s,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      });
      await addBatch.commit();
      showToast(`Successfully updated ${SURDS_QUESTIONS_Y11A.length} Surds questions!`, 'success');
    } catch (err) {
      console.error(err);
      showToast("Failed to update Surds questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedWholeNumbersQuestions = async () => {
    if (!window.confirm("This will replace all existing questions for Year 6 Whole Numbers with the latest 60 questions, and ensure the curriculum chapter is present. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, getDoc, setDoc, serverTimestamp } = await import('firebase/firestore');
      
      // 1. Ensure the curriculum chapter exists in curriculum/Year_6
      const curDocRef = doc(db, 'curriculum', 'Year_6');
      const curSnap = await getDoc(curDocRef);
      let chapters = [];
      if (curSnap.exists()) {
        chapters = curSnap.data().chapters || [];
      }
      
      // Check if y6-wn is in chapters, and prepend/replace it
      const y6Data = CURRICULUM_DATA['Year 6'] || [];
      const wnChapter = y6Data.find(c => c.id === 'y6-wn');
      if (wnChapter) {
        chapters = [wnChapter, ...chapters.filter(c => c.id !== 'y6-wn')];
      }

      await setDoc(curDocRef, {
        year: 'Year 6',
        course: null,
        chapters,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      
      const metaRef = doc(db, 'sync_meta', 'curriculum');
      await setDoc(metaRef, { 
        version: Date.now(),
        lastUpdated: serverTimestamp() 
      }, { merge: true });

      // Clear local cache for curriculum
      localCache.remove(CURRICULUM_CACHE_KEY);

      // Update local state directly so it re-renders immediately
      setCurriculumRecords(prev => {
        const index = prev.findIndex(r => r.id === 'Year_6');
        if (index >= 0) {
          const updated = [...prev];
          updated[index] = { ...updated[index], chapters, updatedAt: new Date().toISOString() };
          return updated;
        } else {
          return [...prev, { id: 'Year_6', year: 'Year 6', course: null, chapters, updatedAt: new Date().toISOString() }];
        }
      });

      const collRef = collection(db, 'questions');
      const addBatch = writeBatch(db);
      
      WHOLE_NUMBER_QUESTIONS_Y6.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = "";
        
        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...qData.opts].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: "" }));
          answerField = correctIndex.toString();
        } else {
          optionsField = [];
          answerField = qData.a;
        }

        addBatch.set(docRef, {
          chapterId: 'y6-wn',
          chapterTitle: 'Chapter 1: Whole Numbers',
          topicId: 'y6-wn-' + qData.c.slice(-1),
          topicCode: qData.c,
          topicTitle: qData.t,
          isManual: true,
          title: qData.q.replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q,
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type,
          options: optionsField,
          answer: answerField,
          hint: qData.h || "",
          solution: qData.s || "",
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      
      await addBatch.commit();
      showToast(`Successfully updated ${WHOLE_NUMBER_QUESTIONS_Y6.length} Whole Number questions and synced curriculum!`, 'success');
      
      // Update cache locally
      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y6-wn'] = WHOLE_NUMBER_QUESTIONS_Y6.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts(cached.counts);
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Whole Number questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedFractionsQuestions = async () => {
    if (!window.confirm("This will replace all existing questions for Year 6 Fractions with the latest questions, and ensure the curriculum chapter is present. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, getDoc, setDoc, serverTimestamp } = await import('firebase/firestore');
      
      // 1. Ensure the curriculum chapter exists in curriculum/Year_6
      const curDocRef = doc(db, 'curriculum', 'Year_6');
      const curSnap = await getDoc(curDocRef);
      let chapters = [];
      if (curSnap.exists()) {
        chapters = curSnap.data().chapters || [];
      }
      
      // Check if y6-frac is in chapters, and prepend/replace it
      const y6Data = CURRICULUM_DATA['Year 6'] || [];
      const fracChapter = y6Data.find(c => c.id === 'y6-frac');
      if (fracChapter) {
        chapters = [fracChapter, ...chapters.filter(c => c.id !== 'y6-frac')];
      }

      await setDoc(curDocRef, {
        id: 'Year_6',
        year: 'Year 6',
        course: null,
        chapters,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      
      const metaRef = doc(db, 'sync_meta', 'curriculum');
      await setDoc(metaRef, { 
        version: Date.now(),
        lastUpdated: serverTimestamp() 
      }, { merge: true });

      // Clear local cache for curriculum
      localCache.remove(CURRICULUM_CACHE_KEY);

      // Update local state directly so it re-renders immediately
      setCurriculumRecords(prev => {
        const index = prev.findIndex(r => r.id === 'Year_6');
        if (index >= 0) {
          const updated = [...prev];
          updated[index] = { ...updated[index], chapters, updatedAt: new Date().toISOString() };
          return updated;
        } else {
          return [...prev, { id: 'Year_6', year: 'Year 6', course: null, chapters, updatedAt: new Date().toISOString() }];
        }
      });

      const collRef = collection(db, 'questions');
      const addBatch = writeBatch(db);
      
      FRACTION_QUESTIONS_Y6.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = "";
        
        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...qData.opts].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: "" }));
          answerField = correctIndex.toString();
        } else {
          optionsField = [];
          answerField = qData.a;
        }

        addBatch.set(docRef, {
          chapterId: 'y6-frac',
          chapterTitle: 'Chapter 2: Fractions',
          topicId: 'y6-frac-' + qData.c.slice(-1),
          topicCode: qData.c,
          topicTitle: qData.t,
          isManual: true,
          title: qData.q.replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q,
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type,
          options: optionsField,
          answer: answerField,
          hint: qData.h || "",
          solution: qData.s || "",
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      
      await addBatch.commit();
      showToast(`Successfully updated ${FRACTION_QUESTIONS_Y6.length} Fraction questions and synced curriculum!`, 'success');
      
      // Update cache locally
      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y6-frac'] = FRACTION_QUESTIONS_Y6.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts(cached.counts);
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Fraction questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY11Ch5Questions = async () => {
    if (!window.confirm("This will replace all existing questions for Year 11 Advanced Chapter 5 with the latest questions. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      
      const collRef = collection(db, 'questions');
      const addBatch = writeBatch(db);
      
      CH5_QUESTIONS_Y11A.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = "";
        
        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...qData.opts].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: "" }));
          answerField = correctIndex.toString();
        } else {
          optionsField = [];
          answerField = qData.a;
        }

        addBatch.set(docRef, {
          chapterId: 'y11a-5',
          chapterTitle: 'Chapter 5: Transformations and symmetry',
          topicId: 'y11a-5' + qData.c.slice(-1),
          topicCode: qData.c,
          topicTitle: qData.t,
          isManual: true,
          title: qData.q.replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q,
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type,
          options: optionsField,
          answer: answerField,
          hint: qData.h || "",
          solution: qData.s || "",
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      
      await addBatch.commit();
      showToast(`Successfully updated ${CH5_QUESTIONS_Y11A.length} Ch5 questions!`, 'success');
      
      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y11a-5'] = CH5_QUESTIONS_Y11A.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts(cached.counts);
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Ch5 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY9Ch2Questions = async () => {
    if (!window.confirm("This will seed all Year 9 Chapter 2A (Pythagoras' theorem) questions. Existing questions for this topic will be replaced. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');

      // Clear existing y9-2 questions
      const q = query(collRef, where('chapterId', '==', 'y9-2'));
      const snap = await getDocs(q);
      const clearBatch = writeBatch(db);
      snap.docs.forEach(d => clearBatch.delete(d.ref));
      await clearBatch.commit();

      // Add new questions
      const addBatch = writeBatch(db);
      Y9_CH2A_QUESTIONS.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = qData.a || '';

        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...(qData.opts || [])].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: '' }));
          answerField = correctIndex.toString();
        }

        addBatch.set(docRef, {
          chapterId: 'y9-2',
          chapterTitle: "Chapter 2: Pythagoras' theorem and surds",
          topicId: 'y9-2a',
          topicCode: '2A',
          topicTitle: qData.t || "Review of Pythagoras' theorem and applications",
          isManual: true,
          title: (qData.q || '').replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q || '',
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type || 'short_answer',
          options: optionsField,
          answer: answerField,
          hint: qData.h || '',
          solution: qData.s || '',
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      await addBatch.commit();
      showToast(`Successfully seeded ${Y9_CH2A_QUESTIONS.length} Year 9 Ch2A questions!`, 'success');

      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y9-2'] = (cached.counts['y9-2'] || 0) + Y9_CH2A_QUESTIONS.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Year 9 Ch2 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  // Generic chapter seeder — used by every CHAPTER_SEED_REGISTRY entry, so a
  // new chapter never needs its own copy-pasted handler again.
  const handleSeedChapter = async (entry) => {
    if (!window.confirm(`Seed ${entry.seed.length} questions for ${entry.label}? Existing questions for this topic will be replaced.`)) return;
    setIsMigrating(true);
    try {
      await seedChapterQuestions(entry);
      // The seeder is a non-destructive upsert (set merge:true), so the
      // chapter's *total* count is seed.length + any pre-existing questions.
      // Fetch the live counts from the server.
      let liveChapterCount = entry.seed.length;
      let liveTopicCount = entry.seed.length;
      try {
        const chapSnap = await getCountFromServer(
          query(collection(db, 'questions'), where('chapterId', '==', entry.chapterId))
        );
        liveChapterCount = chapSnap.data().count || 0;

        const topicSnap = await getCountFromServer(
          query(collection(db, 'questions'), where('topicId', '==', entry.topicId))
        );
        liveTopicCount = topicSnap.data().count || 0;
      } catch (e) {
        console.warn('Post-seed count fetch failed; falling back to seed length:', e);
      }
      showToast(`Seeded ${entry.label}. Topic now has ${liveTopicCount} questions.`, 'success');
      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts[entry.chapterId] = liveChapterCount;
        cached.counts[entry.topicId] = liveTopicCount;
        saveCachedQuestionCounts(cached.counts, Date.now());
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast(`Failed to seed ${entry.label}.`, 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY9Ch3Questions = async () => {
    if (!window.confirm("This will seed all Year 9 Chapter 3A (Percentages) questions. Existing questions for this topic will be replaced. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');

      // Clear existing y9-3a questions (only topic 3A to avoid wiping other Ch3 topics if any exist)
      const q = query(collRef, where('topicId', '==', 'y9-3a'));
      const snap = await getDocs(q);
      const clearBatch = writeBatch(db);
      snap.docs.forEach(d => clearBatch.delete(d.ref));
      await clearBatch.commit();

      // Add new questions
      const addBatch = writeBatch(db);
      Y9_CH3A_QUESTIONS.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = qData.a || '';

        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...(qData.opts || [])].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: '' }));
          answerField = correctIndex.toString();
        }

        addBatch.set(docRef, {
          chapterId: 'y9-3',
          chapterTitle: "Chapter 3: Consumer arithmetic",
          topicId: 'y9-3a',
          topicCode: '3A',
          topicTitle: qData.t || "Review of percentages",
          isManual: true,
          title: (qData.q || '').replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q || '',
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type || 'short_answer',
          options: optionsField,
          answer: answerField,
          hint: qData.h || '',
          solution: qData.s || '',
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      await addBatch.commit();
      showToast(`Successfully seeded ${Y9_CH3A_QUESTIONS.length} Year 9 Ch3A questions!`, 'success');

      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y9-3'] = (cached.counts['y9-3'] || 0) + Y9_CH3A_QUESTIONS.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Year 9 Ch3 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY9Ch4Questions = async () => {
    if (!window.confirm("This will seed all Year 9 Chapter 4A (Factorisation) questions. Existing questions for this topic will be replaced. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');

      const q = query(collRef, where('topicId', '==', 'y9-4a'));
      const snap = await getDocs(q);
      const clearBatch = writeBatch(db);
      snap.docs.forEach(d => clearBatch.delete(d.ref));
      await clearBatch.commit();

      const addBatch = writeBatch(db);
      Y9_CH4A_QUESTIONS.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = qData.a || '';

        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...(qData.opts || [])].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: '' }));
          answerField = correctIndex.toString();
        }

        addBatch.set(docRef, {
          chapterId: 'y9-4',
          chapterTitle: "Chapter 4: Factorisation",
          topicId: 'y9-4a',
          topicCode: '4A',
          topicTitle: qData.t || "Factorisation using common factors",
          isManual: true,
          title: (qData.q || '').replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q || '',
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type || 'short_answer',
          options: optionsField,
          answer: answerField,
          hint: qData.h || '',
          solution: qData.s || '',
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      await addBatch.commit();
      showToast(`Successfully seeded ${Y9_CH4A_QUESTIONS.length} Year 9 Ch4A questions!`, 'success');

      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y9-4'] = (cached.counts['y9-4'] || 0) + Y9_CH4A_QUESTIONS.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Year 9 Ch4 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY9Ch5Questions = async () => {
    if (!window.confirm("This will seed all Year 9 Chapter 5A (Expressions) questions. Existing questions for this topic will be replaced. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');

      const q = query(collRef, where('topicId', '==', 'y9-5a'));
      const snap = await getDocs(q);
      const clearBatch = writeBatch(db);
      snap.docs.forEach(d => clearBatch.delete(d.ref));
      await clearBatch.commit();

      const addBatch = writeBatch(db);
      Y9_CH5A_QUESTIONS.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = qData.a || '';

        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...(qData.opts || [])].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: '' }));
          answerField = correctIndex.toString();
        }

        addBatch.set(docRef, {
          chapterId: 'y9-5',
          chapterTitle: "Chapter 5: Equations",
          topicId: 'y9-5a',
          topicCode: '5A',
          topicTitle: qData.t || "Expressions",
          isManual: true,
          title: (qData.q || '').replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q || '',
          difficulty: qData.difficulty || 'easy',
          timeLimit: 120,
          type: qData.type || 'multiple_choice',
          options: optionsField,
          answer: answerField,
          hint: qData.h || '',
          solution: qData.s || '',
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      await addBatch.commit();
      showToast(`Successfully seeded ${Y9_CH5A_QUESTIONS.length} Year 9 Ch5A questions!`, 'success');

      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y9-5'] = (cached.counts['y9-5'] || 0) + Y9_CH5A_QUESTIONS.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Year 9 Ch5 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY9Ch6Questions = async () => {
    if (!window.confirm("This will seed all Year 9 Chapter 6A (Substitution) questions. Existing questions for this topic will be replaced. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');

      const q = query(collRef, where('topicId', '==', 'y9-6a'));
      const snap = await getDocs(q);
      const clearBatch = writeBatch(db);
      snap.docs.forEach(d => clearBatch.delete(d.ref));
      await clearBatch.commit();

      const addBatch = writeBatch(db);
      Y9_CH6A_QUESTIONS.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = qData.a || '';

        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...(qData.opts || [])].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: '' }));
          answerField = correctIndex.toString();
        }

        addBatch.set(docRef, {
          chapterId: 'y9-6',
          chapterTitle: "Chapter 6: Formulas",
          topicId: 'y9-6a',
          topicCode: '6A',
          topicTitle: qData.t || "Substitution into formulas",
          isManual: true,
          title: (qData.q || '').replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q || '',
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type || 'short_answer',
          options: optionsField,
          answer: answerField,
          hint: qData.h || '',
          solution: qData.s || '',
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      await addBatch.commit();
      showToast(`Successfully seeded ${Y9_CH6A_QUESTIONS.length} Year 9 Ch6A questions!`, 'success');

      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y9-6'] = (cached.counts['y9-6'] || 0) + Y9_CH6A_QUESTIONS.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Year 9 Ch6 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY9Ch7Questions = async () => {
    if (!window.confirm("This will seed all Year 9 Chapter 7A (Review of angles) questions. Existing questions for this topic will be replaced. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');

      const q = query(collRef, where('topicId', '==', 'y9-7a'));
      const snap = await getDocs(q);
      const clearBatch = writeBatch(db);
      snap.docs.forEach(d => clearBatch.delete(d.ref));
      await clearBatch.commit();

      const addBatch = writeBatch(db);
      Y9_CH7A_QUESTIONS.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        const isMC = qData.type === 'multiple_choice';
        let optionsField = [];
        let answerField = qData.a || qData.solution || '';

        if (isMC) {
          const shuffledOpts = [...(qData.opts || [])].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a || qData.solution);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: '' }));
          answerField = correctIndex.toString();
        }

        addBatch.set(docRef, {
          chapterId: 'y9-7',
          chapterTitle: "Chapter 7: Congruence and special quadrilaterals",
          topicId: 'y9-7a',
          topicCode: '7A',
          topicTitle: qData.t || "Review of angles",
          isManual: true,
          title: ((qData.q || qData.question || '').replace(/\$/g, '').slice(0, 30)) + '...',
          question: qData.q || qData.question || '',
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          // "teacher_review" seed questions are open "give reasons" prompts —
          // store them as short-answer + manual grading so the challenge
          // renders a text input (not empty multiple-choice options).
          type: isMC ? 'multiple_choice' : 'short_answer',
          requiresManualGrading: !isMC,
          options: optionsField,
          answer: answerField,
          hint: qData.h || '',
          solution: qData.s || qData.solution || qData.a || '',
          solutionSteps: qData.solutionSteps || [],
          graphData: qData.graphData || null,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      await addBatch.commit();
      showToast(`Successfully seeded ${Y9_CH7A_QUESTIONS.length} Year 9 Ch7A questions!`, 'success');

      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y9-7'] = (cached.counts['y9-7'] || 0) + Y9_CH7A_QUESTIONS.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Year 9 Ch7 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY9Ch8Questions = async () => {
    if (!window.confirm("This will append Year 9 Chapter 8A (Index Laws) questions to your database without deleting existing questions. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');

      const addBatch = writeBatch(db);
      Y9_CH8A_QUESTIONS.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = qData.a || qData.solution || '';

        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...(qData.opts || [])].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a || qData.solution);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: '' }));
          answerField = correctIndex.toString();
        }

        addBatch.set(docRef, {
          chapterId: 'y9-8',
          chapterTitle: "Chapter 8: Index Laws",
          topicId: 'y9-8a',
          topicCode: '8A',
          topicTitle: qData.t || "Index Laws",
          isManual: true,
          title: ((qData.q || qData.question || '').replace(/\$/g, '').slice(0, 30)) + '...',
          question: qData.q || qData.question || '',
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type || 'teacher_review',
          options: optionsField,
          answer: answerField,
          hint: qData.h || '',
          solution: qData.s || qData.solution || qData.a || '',
          solutionSteps: qData.solutionSteps || [],
          graphData: qData.graphData || null,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      await addBatch.commit();
      showToast(`Successfully appended ${Y9_CH8A_QUESTIONS.length} Year 9 Ch8A questions!`, 'success');

      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y9-8'] = (cached.counts['y9-8'] || 0) + Y9_CH8A_QUESTIONS.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Year 9 Ch8 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };


  const handleSeedCurveQuestion = async () => {
    if (!window.confirm("Add the Year 11 Advanced curve properties question?")) return;
    setIsMigrating(true);
    try {
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');
      
      await addDoc(collRef, {
        chapterId: 'y11a-9',
        chapterTitle: 'Chapter 9: Differentiation',
        topicId: 'y11a-9A',
        topicCode: '9A',
        topicTitle: 'Tangents and the derivative',
        isManual: true,
        title: "Consider a curve with the following properties...",
        question: "Consider a curve with the following properties:\n\n$$ g(x) \\text{ is odd.} $$\n$$ g(5) = 0 \\text{ and } g'(2) = 0. $$\n$$ g'(x) > 0 \\text{ for } x > 2. $$\n\nWhich of the following could be the graph of $$ y = g(x) $$?",
        difficulty: 'hard',
        timeLimit: 120,
        type: 'multiple_choice',
        options: [
          { text: "A", imageUrl: "/images/questions/q_curve_A.png" },
          { text: "B", imageUrl: "/images/questions/q_curve_B.png" },
          { text: "C", imageUrl: "/images/questions/q_curve_C.png" },
          { text: "D", imageUrl: "/images/questions/q_curve_D.png" }
        ],
        answer: "2",
        hint: "An odd function is symmetric about the origin. Check the slope (gradient) after x=2.",
        solution: "1. **g(x) is odd**: The graph must have rotational symmetry of 180° about the origin. Graph B and D are even, so they are eliminated.\n2. **g(5) = 0**: The curve passes through the x-axis at x = 5.\n3. **g'(2) = 0**: The curve has a stationary point at x = 2.\n4. **g'(x) > 0 for x > 2**: The curve must be increasing for x > 2. In Graph A, after x=2, the curve goes downwards ($$ g'(x) < 0 $$). In Graph C, after x=2, the curve goes upwards ($$ g'(x) > 0 $$).\n\nTherefore, Graph C is correct.",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      showToast("Successfully added curve question!", 'success');
    } catch (err) {
      console.error(err);
      showToast("Failed to add question.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncSelectedYear = async () => {
    const isSenior = ['Year 11', 'Year 12'].includes(selectedYear);
    const data = isSenior 
      ? CURRICULUM_DATA[selectedYear]?.[selectedCourse] 
      : CURRICULUM_DATA[selectedYear];
      
    if (!Array.isArray(data)) {
      showToast("No built-in curriculum data found for this selection.", 'info');
      return;
    }
    
    const courseName = isSenior ? ` (${selectedCourse})` : '';
    if (!window.confirm(`Replace ${selectedYear}${courseName} curriculum with the built-in version?`)) return;
    
    await handleUpdateChapters(data);
  };

  const handleUpdateHscProfile = async (fields) => {
    if (!user?.uid) return;
    await updateDoc(doc(db, 'users', user.uid), fields);
    setProfile((prev) => ({ ...prev, ...fields }));
  };

  useEffect(() => {
    if (!user || isAdmin) return;
    const unsub = onSnapshot(doc(db, 'users', user.uid), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setProfile(data);
        if (data.assignedYear) {
          const y = Array.isArray(data.assignedYear) ? data.assignedYear[0] : data.assignedYear;
          setSelectedYear(y);
        }
        if (data.assignedCourse) {
          const c = Array.isArray(data.assignedCourse) ? data.assignedCourse[0] : data.assignedCourse;
          setSelectedCourse(c);
        }
      }
    });
    return unsub;
  }, [user, isAdmin]);

  useEffect(() => {
    if (!user?.uid || isAdmin || profile?.showHscGraph !== true) {
      setHscRecords([]);
      return undefined;
    }
    const cached = loadCachedHscResults('users', user.uid);
    if (cached.records.length > 0) setHscRecords(cached.records);
    let cancelled = false;
    fetchHscResultsIncremental('users', user.uid)
      .then(({ records }) => {
        if (!cancelled) setHscRecords(records);
      })
      .catch((err) => {
        console.error('HSC records fetch error:', err);
        if (!cancelled && cached.records.length === 0) setHscRecords([]);
      });
    return () => {
      cancelled = true;
    };
  }, [user?.uid, isAdmin, profile?.showHscGraph]);

  const courses = useMemo(() => {
    if (selectedYear === 'Year 11') return ['Standard', 'Advanced', 'Extension 1'];
    if (selectedYear === 'Year 12') return ['Standard', 'Advanced', 'Extension 1', 'Extension 2'];
    return null;
  }, [selectedYear]);

  const currentRecord = useMemo(() => {
    const docId = courses 
      ? `${selectedYear.replace(' ', '_')}_${selectedCourse}`
      : selectedYear.replace(' ', '_');
    return curriculumRecords.find(r => r.id === docId);
  }, [curriculumRecords, selectedYear, selectedCourse, courses]);

  const displayData = useMemo(() => {
    let data = currentRecord?.chapters || [];
    if (data.length === 0) {
      let fallbackData = CURRICULUM_DATA[selectedYear] || [];
      if (!Array.isArray(fallbackData)) fallbackData = fallbackData[selectedCourse] || [];
      data = fallbackData;
    }
    
    if (!isAdmin && profile?.assignedChapters) {
      data = data.filter(chapter => profile.assignedChapters.includes(chapter.id));
    }
    
    if (!searchQuery) return data;
    return data.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [currentRecord, searchQuery, isAdmin, profile]);

  const countChapterIds = useMemo(() => {
    const ids = new Set(displayData.map((chapter) => chapter.id).filter(Boolean));
    if (isAdmin && showAdminTools) ADMIN_TOOL_COUNT_IDS.forEach((id) => ids.add(id));
    return [...ids];
  }, [displayData, isAdmin, showAdminTools]);

  const countTopicIds = useMemo(() => {
    if (!isAdmin || !showAdminTools) return [];
    const ids = new Set(CHAPTER_SEED_REGISTRY.map((entry) => entry.topicId).filter(Boolean));
    return [...ids];
  }, [isAdmin, showAdminTools]);

  useEffect(() => {
    if (countChapterIds.length === 0) return undefined;
    let cancelled = false;
    const cached = loadCachedQuestionCounts();
    setQuestionCounts((prev) => ({ ...cached.counts, ...prev }));

    const fetchVisibleCounts = async () => {
      try {
        const metaSnap = await getDoc(doc(db, 'sync_meta', 'questions'));
        const remoteVersion = Number(metaSnap.data()?.version || metaSnap.data()?.updatedAt?.toMillis?.() || 0);
        const hasFreshCounts = Date.now() - Number(cached.savedAt || 0) < QUESTION_COUNT_CACHE_TTL_MS
          && (!remoteVersion || Number(cached.version || 0) === remoteVersion)
          && countChapterIds.every((chapterId) => cached.counts[chapterId] !== undefined)
          && countTopicIds.every((topicId) => cached.counts[topicId] !== undefined);
        if (hasFreshCounts && !isMigrating) return;

        const nextCounts = {};
        await Promise.all(countChapterIds.map(async (chapterId) => {
          const countQuery = query(collection(db, 'questions'), where('chapterId', '==', chapterId));
          const snap = await getCountFromServer(countQuery);
          nextCounts[chapterId] = snap.data().count || 0;
        }));
        await Promise.all(countTopicIds.map(async (topicId) => {
          const countQuery = query(collection(db, 'questions'), where('topicId', '==', topicId));
          const snap = await getCountFromServer(countQuery);
          nextCounts[topicId] = snap.data().count || 0;
        }));
        if (cancelled) return;
        const merged = { ...cached.counts, ...nextCounts };
        setQuestionCounts(merged);
        saveCachedQuestionCounts(merged, remoteVersion);
      } catch (err) {
        console.error("Error fetching question counts:", err);
      }
    };

    fetchVisibleCounts();
    return () => {
      cancelled = true;
    };
  }, [isAdmin, countChapterIds, countTopicIds, isMigrating]);

  const calculateHscBand = (pct) => {
    if (pct >= 90) return { label: 'Band 6', className: 'band-6', color: '#f59e0b' };
    if (pct >= 80) return { label: 'Band 5', className: 'band-5', color: '#6366f1' };
    if (pct >= 70) return { label: 'Band 4', className: 'band-4', color: '#0ea5e9' };
    return { label: 'Band 3 & below', className: 'band-low', color: '#94a3b8' };
  };

  const renderStudentHscChart = () => {
    if (profile?.showHscGraph !== true) return null;
    const points = [...hscRecords]
      .filter((record) => record.examDate && Number(record.total) > 0)
      .sort((a, b) => String(a.examDate).localeCompare(String(b.examDate)))
      .map((record) => ({
        ...record,
        percentage: Number(record.percentage ?? ((Number(record.score) / Number(record.total)) * 100)),
      }));
    if (points.length === 0) return null;

    const width = 520;
    const height = 96;
    const padX = 16;
    const padY = 16;
    const minScore = Math.max(0, Math.min(75, ...points.map((p) => p.percentage)) - 5);
    const maxScore = Math.min(100, Math.max(95, ...points.map((p) => p.percentage)) + 5);
    const range = Math.max(1, maxScore - minScore);
    const xFor = (idx) => points.length === 1
      ? width / 2
      : padX + (idx * (width - padX * 2)) / (points.length - 1);
    const yFor = (value) => padY + ((maxScore - value) / range) * (height - padY * 2);
    const path = points.map((point, idx) => `${idx === 0 ? 'M' : 'L'} ${xFor(idx)} ${yFor(point.percentage)}`).join(' ');
    const areaPath = points.length <= 1 ? '' : `${path} L ${xFor(points.length - 1)} ${height} L ${xFor(0)} ${height} Z`;
    const latest = points[points.length - 1];

    const avg = points.reduce((acc, p) => acc + p.percentage, 0) / points.length;
    const trend = latest.percentage - avg;
    const isUp = trend >= 0;

    const pct = latest.percentage;
    let milestoneProgress = 0;
    let milestoneText = '';

    if (pct >= 90) {
      milestoneText = 'Mastery Achieved';
      milestoneProgress = 100;
    } else if (pct >= 80) {
      const distanceToNext = 90 - pct;
      milestoneProgress = (pct - 80) * 10;
      milestoneText = `${distanceToNext.toFixed(1)}% to Band 6`;
    } else if (pct >= 70) {
      const distanceToNext = 80 - pct;
      milestoneProgress = (pct - 70) * 10;
      milestoneText = `${distanceToNext.toFixed(1)}% to Band 5`;
    } else {
      const distanceToNext = 70 - pct;
      milestoneProgress = Math.max(0, Math.min(100, ((pct - 50) / 20) * 100));
      milestoneText = `${distanceToNext.toFixed(1)}% to Band 4`;
    }

    return (
      <>
        <div
          className="hsc-dashboard-card"
          onClick={() => setHscModalOpen(true)}
        >
          <div className="hsc-dashboard-card__grid">
            <div className="hsc-dashboard-card__left">
              <div className="hsc-label-container">
                <span className="hsc-pulse-dot" />
                HSC Progress
              </div>
              <div className="hsc-score-row">
                <div className="hsc-big-score">{latest.percentage.toFixed(1)}%</div>
                <div className={`hsc-trend-badge ${isUp ? 'up' : 'down'}`}>
                  {isUp ? <TrendingUp size={12} /> : <TrendingUp size={12} style={{ transform: 'rotate(180deg)' }} />}
                  {isUp ? '+' : ''}{trend.toFixed(1)}%
                </div>
              </div>
              <div className={`hsc-band-badge ${calculateHscBand(latest.percentage).className}`}>
                {calculateHscBand(latest.percentage).label}
              </div>
            </div>

            <div className="hsc-dashboard-card__chart-container" style={{ minWidth: 0 }}>
              <svg viewBox={`0 0 ${width} ${height}`} className="hsc-dashboard-card__chart" role="img" aria-label="HSC score trend">
                <defs>
                  <linearGradient id="studentHscLine" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="studentHscArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.01" />
                  </linearGradient>
                </defs>

                <line
                  x1={padX}
                  x2={width - padX}
                  y1={yFor(90)}
                  y2={yFor(90)}
                  className="hsc-chart-bandline band-6-threshold"
                />
                <text
                  x={padX}
                  y={yFor(90) - 4}
                  className="hsc-chart-threshold-text b6"
                >
                  Band 6 (90%)
                </text>

                <line
                  x1={padX}
                  x2={width - padX}
                  y1={yFor(80)}
                  y2={yFor(80)}
                  className="hsc-chart-bandline band-5-threshold"
                />
                <text
                  x={padX}
                  y={yFor(80) - 4}
                  className="hsc-chart-threshold-text b5"
                >
                  Band 5 (80%)
                </text>

                {areaPath && <path d={areaPath} fill="url(#studentHscArea)" />}
                <path d={path} fill="none" stroke="url(#studentHscLine)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="hsc-sparkline-path" />

                {points.map((point, idx) => {
                  const isLatest = idx === points.length - 1;
                  return (
                    <g key={point.id || `${point.examDate}-${idx}`} className="hsc-node-group">
                      <circle
                        cx={xFor(idx)}
                        cy={yFor(point.percentage)}
                        r="4"
                        fill="#ffffff"
                        stroke="#6366f1"
                        strokeWidth="2.5"
                        className="hsc-node-outer"
                      />
                      {isLatest && (
                        <circle
                          cx={xFor(idx)}
                          cy={yFor(point.percentage)}
                          r="9"
                          fill="none"
                          stroke="#6366f1"
                          strokeWidth="1.5"
                          className="hsc-pulse-ring-node"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="hsc-dashboard-card__right">
              <div className="hsc-milestone-header">
                <span className="hsc-milestone-title">Milestone Tracker</span>
                <span className="hsc-milestone-value">{milestoneText}</span>
              </div>
              <div className="hsc-progress-track">
                <div className="hsc-progress-fill" style={{ width: `${milestoneProgress}%` }} />
              </div>
              <div className="hsc-card-action-link">
                View detailed history <ChevronRight size={14} />
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {hscModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'grid', placeItems: 'center', padding: 20 }}
            >
              <div onClick={() => setHscModalOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.52)', backdropFilter: 'blur(8px)' }} />
              <motion.div
                initial={{ scale: 0.96, y: 12 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.96, y: 12 }}
                style={{
                  position: 'relative',
                  width: 'min(720px, 100%)',
                  maxHeight: '82vh',
                  overflowY: 'auto',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(167, 139, 250, 0.18)',
                  borderRadius: 28,
                  padding: 28,
                  boxShadow: '0 30px 80px rgba(15,23,42,0.22)'
                }}
              >
                <div className="hsc-modal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#7c3aed', letterSpacing: '0.12em', textTransform: 'uppercase' }}>HSC Papers</div>
                    <h3 style={{ margin: '6px 0 0', color: '#1e1b4b' }}>Exam Records</h3>
                  </div>
                  <button onClick={() => setHscModalOpen(false)} style={{ width: 40, height: 40, borderRadius: 12, border: 'none', background: '#f1f5f9', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <X size={18} />
                  </button>
                </div>

                <div className="hsc-modal-summary-grid">
                  <div className="hsc-modal-summary-widget">
                    <div className="hsc-modal-summary-lbl">Current Band</div>
                    <div className="hsc-modal-summary-val" style={{ color: calculateHscBand(latest.percentage).color }}>
                      {calculateHscBand(latest.percentage).label}
                    </div>
                  </div>
                  <div className="hsc-modal-summary-widget">
                    <div className="hsc-modal-summary-lbl">Overall Average</div>
                    <div className="hsc-modal-summary-val">{avg.toFixed(1)}%</div>
                  </div>
                  <div className="hsc-modal-summary-widget">
                    <div className="hsc-modal-summary-lbl">Exams Taken</div>
                    <div className="hsc-modal-summary-val">{points.length}</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gap: 14 }}>
                  {[...points].reverse().map((record) => (
                    <div key={record.id} className="hsc-paper-row-card">
                      <div className="hsc-row-gauge">
                        <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%' }}>
                          <defs>
                            <linearGradient id={`gaugeGrad-${record.id}`} x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor="#6366f1" />
                              <stop offset="100%" stopColor="#10b981" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#f1f5f9"
                            strokeWidth="3"
                          />
                          <path
                            strokeDasharray={`${record.percentage.toFixed(0)}, 100`}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke={`url(#gaugeGrad-${record.id})`}
                            strokeWidth="3.2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="hsc-row-gauge-pct">{record.percentage.toFixed(0)}%</span>
                      </div>

                      <div className="hsc-paper-main">
                        <div className="hsc-paper-date">{record.examDate}</div>
                        <h4 className="hsc-paper-title">{record.paper}</h4>
                        {record.notes && (
                          <div className="hsc-paper-comment-bubble">
                            {record.notes}
                          </div>
                        )}
                      </div>

                      <div className="hsc-paper-score-col">
                        <div className="hsc-paper-score-num">{Number(record.score)}</div>
                        <div className="hsc-paper-score-tot">/ {Number(record.total)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;

  // Early-return navigation: chapter card → topics page → bank page.
  // These replace the old QuestionBankModal overlay so the user gets a real
  // page transition instead of a modal stack.
  if (selectedTopicForBank) {
    return (
      <QuestionBankPage
        chapter={selectedTopicForBank.chapter}
        topic={selectedTopicForBank.topic}
        onBack={() => setSelectedTopicForBank(null)}
      />
    );
  }
  if (selectedChapterForQuestions) {
    const ch = selectedChapterForQuestions;
    const topics = ch.topics || [];
    return (
      <div className="app-page" style={{ padding: '24px 20px 80px', background: '#f8fafc', minHeight: '100vh' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <button
            onClick={() => setSelectedChapterForQuestions(null)}
            style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', color: '#475569', fontWeight: 700, cursor: 'pointer' }}
          >
            ← Back to chapters
          </button>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>{ch.year || ''}</div>
            <h2 style={{ margin: 0, fontSize: '1.7rem', fontWeight: 900, color: '#1e1b4b' }}>{ch.title}</h2>
            <p style={{ margin: '4px 0 0', color: '#64748b', fontWeight: 600 }}>{topics.length} {topics.length === 1 ? 'topic' : 'topics'}</p>
          </div>
          {topics.length === 0 ? (
            <div style={{ padding: '40px', background: '#fff', borderRadius: '20px', border: '1px dashed #cbd5e1', textAlign: 'center', color: '#94a3b8', fontWeight: 700 }}>
              No topics in this chapter. Use the chapter editor to add some.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
              {topics.map((t, idx) => (
                <button
                  key={t.id || idx}
                  onClick={() => setSelectedTopicForBank({ chapter: ch, topic: t })}
                  style={{ textAlign: 'left', padding: '20px 22px', borderRadius: '20px', border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '8px', boxShadow: '0 4px 14px rgba(0,0,0,0.03)', transition: 'transform 0.15s, box-shadow 0.15s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(99,102,241,0.10)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.03)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.code || `Topic ${idx + 1}`}</span>
                    <ChevronRight size={18} color="#94a3b8" />
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1e1b4b', lineHeight: 1.3 }}>{t.title}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="app-page">
      <div className="app-page__header">
        <div className="app-page__title">
          <h2>Curriculum</h2>
        </div>
      </div>

      {!isAdmin ? (
        profile?.showHscGraph === true ? (
          // HSC-activated students see the past-paper journey by default,
          // with an in-view toggle back to the regular curriculum roadmap.
          <HscJourney
            hscRecords={hscRecords}
            profile={profile}
            curriculumSlot={<LearningPath profile={profile} />}
          />
        ) : (
          <LearningPath profile={profile} />
        )
      ) : (
        <>
          {/* ── Sticky top bar ── */}
          <div className="curriculum-topbar">
            <div className="curriculum-topbar__inner">
              {/* Row 1 — Title + actions */}
              <div className="curriculum-header">
                <div className="curriculum-header__title">
                  <h1>{selectedYear}</h1>
                  {courses && selectedCourse && <span className="curriculum-course-badge">{selectedCourse}</span>}
                  {/* Total question count across all chapters of the year. */}
                  {(() => {
                    const total = displayData.reduce((sum, ch) => sum + (questionCounts[ch.id] || 0), 0);
                    if (total === 0) return null;
                    return (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 10px', borderRadius: '999px', background: '#ede9fe', color: '#5b21b6', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.02em' }}>
                        {total.toLocaleString()} questions
                      </span>
                    );
                  })()}
                </div>
                <div className="curriculum-header__actions">
                  <div className={`curriculum-search${searchOpen || searchQuery ? ' is-open' : ''}`}>
                    <button
                      type="button"
                      onClick={() => setSearchOpen(o => !o)}
                      style={{ border: 'none', background: 'transparent', padding: 0, display: 'flex', cursor: 'pointer' }}
                    >
                      <Search size={16} />
                    </button>
                    {(searchOpen || searchQuery) && (
                      <input
                        type="text"
                        placeholder="Search chapters..."
                        value={searchQuery}
                        autoFocus
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onBlur={() => !searchQuery && setSearchOpen(false)}
                      />
                    )}
                  </div>
                  {isAdmin && (
                    <>
                      <button
                        onClick={() => setShowAdminTools(v => !v)}
                        className="curriculum-icon-btn"
                        title="Admin tools"
                        style={{ background: showAdminTools ? 'rgba(99, 102, 241, 0.18)' : undefined }}
                      >
                        <Layers size={17} />
                      </button>
                      <button
                        onClick={() => setEditingChapter({ mode: 'add', chapter: { title: '', modules: 10 } })}
                        className="curriculum-icon-btn curriculum-icon-btn--primary"
                        title="Add chapter"
                      >
                        <Plus size={17} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Row 2 — Year tabs */}
              {(() => {
                // Pre-compute total seeded questions per year from CHAPTER_SEED_REGISTRY
                const seedCountByYear = CHAPTER_SEED_REGISTRY.reduce((acc, entry) => {
                  const y = entry.year;
                  acc[y] = (acc[y] || 0) + (Array.isArray(entry.seed) ? entry.seed.length : 0);
                  return acc;
                }, {});
                return (
                  <div className="curriculum-year-tabs">
                    {YEARS.map(year => {
                      const count = seedCountByYear[year] || 0;
                      return (
                        <button
                          key={year}
                          onClick={() => {
                            setSelectedYear(year);
                            if (year === 'Year 11' || year === 'Year 12') setSelectedCourse('Standard');
                          }}
                          className={`curriculum-year-tab${selectedYear === year ? ' curriculum-year-tab--active' : ''}`}
                        >
                          {year}
                          {count > 0 && (
                            <span style={{ display: 'block', fontSize: '0.62rem', fontWeight: 700, opacity: 0.7, lineHeight: 1, marginTop: '2px' }}>
                              {count.toLocaleString()} Qs
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                );
              })()}

              {/* Row 3 — Course tabs (Year 11/12 only) */}
              {courses && (
                <div className="curriculum-course-tabs" style={{ marginBottom: '12px' }}>
                  {courses.map(course => (
                    <button
                      key={course}
                      onClick={() => setSelectedCourse(course)}
                      className={`curriculum-course-tab${selectedCourse === course ? ' curriculum-course-tab--active' : ''}`}
                    >
                      {course}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── Main content ── */}
          <div className="curriculum-content">
            {/* Admin tools — collapsed by default */}
            {/* Admin tools — collapsed by default */}
            {showAdminTools && (
              <div className="curriculum-admin-panel">
                <div className="admin-panel-header">
                  <div className="admin-panel-title">🛠️ Curriculum Sync Dashboard</div>
                  <div className="admin-tabs">
                    <button
                      className={`admin-tab-btn ${adminActiveTab === 'y11_12' ? 'active' : ''}`}
                      onClick={() => setAdminActiveTab('y11_12')}
                    >
                      Questions Seeding
                    </button>
                    <button 
                      className={`admin-tab-btn ${adminActiveTab === 'utils' ? 'active' : ''}`}
                      onClick={() => setAdminActiveTab('utils')}
                    >
                      Utilities
                    </button>
                  </div>
                </div>

                <div className="admin-panel-body">
                  {adminActiveTab === 'y11_12' && (() => {
                    // Helper to render a single seed card
                    const SeedCard = ({ badge, badgeStyle, title, countKey, onSeed, extraCount }) => {
                      const count = extraCount !== undefined
                        ? extraCount
                        : (questionCounts[countKey] || 0);
                      return (
                        <div className="sync-card" style={{ opacity: count ? 0.45 : 1 }}>
                          <div className="sync-card-info">
                            <span className="sync-card-badge" style={badgeStyle}>{badge}</span>
                            <span className="sync-card-title">{title}</span>
                          </div>
                          <div className="sync-card-actions">
                            {count
                              ? <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981' }}>✓ Done</span>
                              : <button onClick={onSeed} disabled={isMigrating} className="sync-btn warning">🌱 Seed</button>
                            }
                          </div>
                        </div>
                      );
                    };

                    // Group CHAPTER_SEED_REGISTRY by year
                    const byYear = CHAPTER_SEED_REGISTRY.reduce((acc, entry) => {
                      const y = entry.year || 'Other';
                      if (!acc[y]) acc[y] = [];
                      acc[y].push(entry);
                      return acc;
                    }, {});

                    const yearOrder = ['Year 12', 'Year 11', 'Year 10', 'Year 9', 'Year 8', 'Year 7', 'Year 6', 'Other'];
                    const yearColors = {
                      'Year 12': { bg: '#8b5cf6', label: '#fff' },
                      'Year 11': { bg: '#6366f1', label: '#fff' },
                      'Year 10': { bg: '#06b6d4', label: '#fff' },
                      'Year 9':  { bg: '#10b981', label: '#fff' },
                      'Year 8':  { bg: '#3b82f6', label: '#fff' },
                      'Year 7':  { bg: '#ec4899', label: '#fff' },
                      'Year 6':  { bg: '#f59e0b', label: '#fff' },
                      'Other':   { bg: '#94a3b8', label: '#fff' },
                    };

                    // Manual cards keyed by year
                    const manualByYear = {
                      'Year 11': [
                        <SeedCard key="y11-1" badge="Y11 CH1" badgeStyle={{ background: '#6366f1', color: '#fff' }} title="Algebra (Ch1)" countKey={null} extraCount={(questionCounts['y11a-1'] || 0) + (questionCounts['y11-1'] || 0)} onSeed={handleSeedAlgebraQuestions} />,
                        <SeedCard key="y11-2" badge="Y11 CH2" badgeStyle={{ background: '#6366f1', color: '#fff' }} title="Surds & Indices (Ch2)" countKey={null} extraCount={(questionCounts['y11a-2'] || 0) + (questionCounts['y11-2'] || 0)} onSeed={handleSeedSurdsQuestions} />,
                        <SeedCard key="y11-5" badge="Y11 CH5" badgeStyle={{ background: '#6366f1', color: '#fff' }} title="Transformations (Ch5)" countKey="y11a-5" onSeed={handleSeedY11Ch5Questions} />,
                      ],
                      'Year 9': [
                        <SeedCard key="y9-2" badge="Y9 CH2" badgeStyle={{ background: '#10b981', color: '#fff' }} title="Pythagoras (Ch2)" countKey="y9-2" onSeed={handleSeedY9Ch2Questions} />,
                      ],
                      'Year 6': [
                        <SeedCard key="y6-wn" badge="Y6 WN" badgeStyle={{ background: '#f59e0b', color: '#fff' }} title="Whole Numbers" countKey="y6-wn" onSeed={handleSeedWholeNumbersQuestions} />,
                        <SeedCard key="y6-frac" badge="Y6 Frac" badgeStyle={{ background: '#f59e0b', color: '#fff' }} title="Fractions" countKey="y6-frac" onSeed={handleSeedFractionsQuestions} />,
                      ],
                    };

                    const toggleYear = (year) =>
                      setExpandedSeedYears((prev) => ({ ...prev, [year]: !prev[year] }));

                    return (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {yearOrder.map((year) => {
                          const registryCards = (byYear[year] || []).map((entry) => {
                            const count = questionCounts[entry.topicId];
                            return (
                              <div className="sync-card" key={`${entry.chapterId}-${entry.topicId}`} style={{ opacity: count ? 0.45 : 1 }}>
                                <div className="sync-card-info">
                                  <span className="sync-card-badge" style={{ background: yearColors[year]?.bg, color: yearColors[year]?.label }}>
                                    {(entry.badgeLabel || entry.chapterId).toUpperCase()}
                                  </span>
                                  <span className="sync-card-title">{entry.label}</span>
                                </div>
                                <div className="sync-card-actions">
                                  {count && <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981', marginRight: '8px' }}>✓ Done</span>}
                                  <button onClick={() => handleSeedChapter(entry)} disabled={isMigrating} className="sync-btn warning">🌱 Seed</button>
                                </div>
                              </div>
                            );
                          });

                          const manualCards = manualByYear[year] || [];
                          const allCards = [...manualCards, ...registryCards];
                          if (allCards.length === 0) return null;

                          const doneCount = (byYear[year] || []).filter((entry) => questionCounts[entry.topicId]).length;
                          const isOpen = expandedSeedYears[year] ?? false;

                          return (
                            <div key={year} style={{ border: '1px solid #e2e8f0', borderRadius: '14px', overflow: 'hidden' }}>
                              <button
                                onClick={() => toggleYear(year)}
                                style={{
                                  width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                                  padding: '14px 18px', background: isOpen ? '#faf5ff' : '#fff',
                                  border: 'none', cursor: 'pointer', textAlign: 'left',
                                  borderBottom: isOpen ? '1px solid #e2e8f0' : 'none',
                                }}
                              >
                                <span style={{ background: yearColors[year]?.bg, color: '#fff', fontWeight: 900, fontSize: '0.75rem', padding: '4px 12px', borderRadius: '999px', flexShrink: 0 }}>{year}</span>
                                <span style={{ fontWeight: 700, fontSize: '0.82rem', color: '#475569' }}>{allCards.length} sets</span>
                                <span style={{ marginLeft: 'auto', fontSize: '0.72rem', fontWeight: 700, color: doneCount > 0 ? '#10b981' : '#94a3b8' }}>
                                  {doneCount > 0 ? `${doneCount} seeded` : 'not seeded'}
                                </span>
                                <span style={{ fontSize: '0.85rem', color: '#94a3b8', flexShrink: 0 }}>{isOpen ? '▲' : '▼'}</span>
                              </button>
                              {isOpen && (
                                <div className="admin-sync-grid" style={{ padding: '16px' }}>
                                  {allCards}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}

                  {adminActiveTab === 'utils' && (
                    <div className="admin-sync-grid">
                      {/* Add Curve Q */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge generic">UTILS</span>
                          <span className="sync-card-title">Add Curve Fitting Questions</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={handleSeedCurveQuestion} disabled={isMigrating} className="sync-btn success">
                            ➕ Add Curve Q
                          </button>
                        </div>
                      </div>

                      {/* Sync Selected Year */}
                      {((['Year 11', 'Year 12'].includes(selectedYear) && CURRICULUM_DATA[selectedYear]?.[selectedCourse]) || Array.isArray(CURRICULUM_DATA[selectedYear])) && (
                        <div className="sync-card">
                          <div className="sync-card-info">
                            <span className="sync-card-badge generic">YEAR SYNC</span>
                            <span className="sync-card-title">Sync entire {selectedYear} ({['Year 11', 'Year 12'].includes(selectedYear) ? selectedCourse : 'Core'})</span>
                          </div>
                          <div className="sync-card-actions">
                            <button onClick={handleSyncSelectedYear} className="sync-btn primary-grad">
                              🔄 Sync {selectedYear}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="chapters-grid">
              {displayData.length > 0 ? displayData.map((chapter, chapterIndex) => {
                const p = chapter.modules > 0 ? Math.round(((chapter.completed || 0) / chapter.modules) * 100) : 0;
                return (
                  <div key={chapter.id} className="chapter-card" onClick={() => setSelectedChapterForQuestions(chapter)}>
                    <div className="chapter-card__head">
                      <div className="chapter-card__icon"><BookText size={18} /></div>
                      <div className="chapter-card__edits">
                        <button className="chapter-card__edit-btn" onClick={(e) => { e.stopPropagation(); setEditingChapter({ mode: 'edit', chapter }); }}><Edit2 size={13} /></button>
                        <button className="chapter-card__edit-btn chapter-card__delete-btn" onClick={(e) => { e.stopPropagation(); handleDeleteChapter(chapter.id); }}><Trash2 size={13} /></button>
                      </div>
                    </div>

                    <div>
                      <p className="chapter-card__number-badge">Chapter {chapterIndex + 1}</p>
                      <h3 className="chapter-card__title">{chapter.title}</h3>
                      <p className="chapter-card__meta">
                        {chapter.topics?.length ? `${chapter.topics.length} topics` : 'Core unit'}
                        {questionCounts[chapter.id] > 0 && (
                          <span className="chapter-card__meta-pill"> · {questionCounts[chapter.id]} questions</span>
                        )}
                      </p>
                    </div>

                    <div className="chapter-card__progress-row">
                      <div className="chapter-card__progress-label">
                        <span>Progress</span><span>{p}%</span>
                      </div>
                      <div className="chapter-card__progress-bar">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${p}%` }} className="chapter-card__progress-fill" />
                      </div>
                    </div>
                  </div>
                );
              }) : (
                <div className="curriculum-empty">No chapters found for this selection.</div>
              )}
            </div>
          </div>
        </>
      )}

      <AnimatePresence>
        {editingChapter && (
          <div className="app-modal" style={{ zIndex: 1000 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeEditingChapterModal} className="app-modal__backdrop" />
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              className="app-panel app-modal__card"
              style={{ maxWidth: '580px', width: '92%', padding: 0, overflow: 'hidden', borderRadius: '28px' }}
            >
              <div style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', padding: '28px 28px 24px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.75, marginBottom: '4px' }}>Chapter Editor</div>
                  <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>{editingChapter.mode === 'add' ? 'New Chapter' : 'Edit Chapter'}</h3>
                </div>
                <button type="button" onClick={closeEditingChapterModal} style={{ background: 'rgba(255,255,255,0.18)', border: 'none', borderRadius: '50%', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
                  <X size={18} />
                </button>
              </div>
              <form onSubmit={handleSaveChapter} style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Chapter Title</label>
                    <input required className="app-input" value={editingChapter.chapter.title} onChange={e => setEditingChapter({ ...editingChapter, chapter: { ...editingChapter.chapter, title: e.target.value } })} placeholder="e.g. Calculus: Differentiation" style={{ padding: '13px 16px', borderRadius: '13px', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Number of Modules</label>
                    <input required type="number" className="app-input" value={editingChapter.chapter.modules} onChange={e => setEditingChapter({ ...editingChapter, chapter: { ...editingChapter.chapter, modules: parseInt(e.target.value) } })} style={{ padding: '13px 16px', borderRadius: '13px', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '18px', marginTop: '4px' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                    Subtopics ({editingChapter.chapter.topics?.length || 0})
                  </label>
                  
                  {/* Scrollable Subtopics List */}
                  {(editingChapter.chapter.topics && editingChapter.chapter.topics.length > 0) ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '180px', overflowY: 'auto', marginBottom: '14px', paddingRight: '4px' }}>
                      {editingChapter.chapter.topics.map((sub, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                            <span style={{ background: '#e0e7ff', color: '#4f46e5', fontWeight: 800, fontSize: '0.75rem', padding: '2px 8px', borderRadius: '6px' }}>
                              {sub.code}
                            </span>
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {sub.title}
                            </span>
                            {sub.page && (
                              <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 500 }}>
                                (p. {sub.page})
                              </span>
                            )}
                          </div>
                          <div style={{ display: 'flex', gap: '4px' }}>
                            <button type="button" onClick={() => handleEditSubtopicClick(index, sub)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '4px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                              <Edit2 size={13} />
                            </button>
                            <button type="button" onClick={() => handleDeleteSubtopic(index)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ padding: '14px', background: '#f8fafc', borderRadius: '12px', border: '1px dashed #cbd5e1', textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '14px' }}>
                      No subtopics added yet.
                    </div>
                  )}

                  {/* Inline Add/Edit Subtopic Form */}
                  <div style={{ background: '#f1f5f9', padding: '12px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {editingSubtopicIndex >= 0 ? 'Edit Subtopic' : 'Add New Subtopic'}
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <input 
                        placeholder="Code" 
                        value={subtopicForm.code} 
                        onChange={e => setSubtopicForm({ ...subtopicForm, code: e.target.value })} 
                        style={{ width: '65px', padding: '8px 10px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#fff', fontSize: '0.85rem', fontWeight: 700, color: '#334155' }} 
                      />
                      <input 
                        placeholder="Subtopic Title" 
                        value={subtopicForm.title} 
                        onChange={e => setSubtopicForm({ ...subtopicForm, title: e.target.value })} 
                        style={{ flex: 1, padding: '8px 10px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#fff', fontSize: '0.85rem', fontWeight: 500, color: '#334155' }} 
                      />
                      <input 
                        type="number" 
                        placeholder="Page" 
                        value={subtopicForm.page} 
                        onChange={e => setSubtopicForm({ ...subtopicForm, page: e.target.value })} 
                        style={{ width: '55px', padding: '8px 10px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#fff', fontSize: '0.85rem', fontWeight: 500, color: '#334155' }} 
                      />
                      <button 
                        type="button" 
                        onClick={handleAddOrUpdateSubtopic} 
                        style={{ 
                          padding: '8px 12px', 
                          background: editingSubtopicIndex >= 0 ? '#10b981' : '#6366f1', 
                          color: '#fff', 
                          border: 'none', 
                          borderRadius: '8px', 
                          cursor: 'pointer', 
                          fontWeight: 700, 
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        {editingSubtopicIndex >= 0 ? 'Save' : <Plus size={14} />}
                      </button>
                      {editingSubtopicIndex >= 0 && (
                        <button 
                          type="button" 
                          onClick={() => { setEditingSubtopicIndex(-1); setSubtopicForm({ code: '', title: '', page: '' }); }} 
                          style={{ padding: '8px 10px', background: '#cbd5e1', color: '#475569', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, fontSize: '0.8rem' }}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <button type="submit" className="app-button app-button--primary" style={{ width: '100%', padding: '14px', borderRadius: '14px', fontWeight: 800, fontSize: '0.95rem', marginTop: '4px' }}>
                  <Save size={16} /> Save Chapter
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Chapter-card click no longer opens a modal here — it triggers the
          early-return at the top of this component which renders the topics
          page, then the student-style QuestionBankPage on topic select. */}
    </div>
  );
};

export default Curriculum;
