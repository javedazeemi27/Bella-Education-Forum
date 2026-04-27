import { Shield, BookOpen, GraduationCap, Code, Briefcase, Palette, Microscope, Calculator } from 'lucide-react';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Course {
  id: string;
  title: string;
  category: string;
  overview: string;
  instructor: string;
  difficulty: Difficulty;
  icon: any;
  duration: string;
  lessons: number;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
}

export const CATEGORIES = [
  'Science',
  'Mathematics',
  'Computer Science',
  'Business',
  'Arts'
];

export const COURSES: Course[] = [
  {
    id: 'phy-101',
    title: 'Advanced Classical Mechanics',
    category: 'Science',
    overview: 'A comprehensive guide to Newton\'s laws, universal gravitation, and Lagrangian dynamics.',
    instructor: 'Dr. Sarah Ahmed',
    difficulty: 'Advanced',
    icon: Microscope,
    duration: '12 Weeks',
    lessons: 24,
  },
  {
    id: 'cs-202',
    title: 'Full-Stack Web Development',
    category: 'Computer Science',
    overview: 'Master React, Node.js, and modern database management from scratch.',
    instructor: 'John Doe',
    difficulty: 'Intermediate',
    icon: Code,
    duration: '16 Weeks',
    lessons: 48,
  },
  {
    id: 'math-105',
    title: 'Calculus III: Vector Analysis',
    category: 'Mathematics',
    overview: 'Exploring multivariable calculus, line integrals, and multi-dimensional geometry.',
    instructor: 'Prof. Michael Chen',
    difficulty: 'Advanced',
    icon: Calculator,
    duration: '10 Weeks',
    lessons: 30,
  },
  {
    id: 'biz-301',
    title: 'Strategic Marketing Management',
    category: 'Business',
    overview: 'Learn to build and execute global marketing strategies for modern enterprises.',
    instructor: 'Elena Rodriguez',
    difficulty: 'Intermediate',
    icon: Briefcase,
    duration: '8 Weeks',
    lessons: 20,
  },
  {
    id: 'arts-101',
    title: 'Introduction to Modern Art',
    category: 'Arts',
    overview: 'A journey through the significant art movements of the 20th and 21st centuries.',
    instructor: 'Isabella Vance',
    difficulty: 'Beginner',
    icon: Palette,
    duration: '6 Weeks',
    lessons: 12,
  },
];

export const TESTIMONIALS = [
  {
    name: 'Ali Khan',
    role: 'CS Student',
    quote: 'This platform made complex algorithms so easy to understand. The Urdu support is a lifesaver!',
  },
  {
    name: 'Sana Zehra',
    role: 'Medical Aspirant',
    quote: 'The Biology resources here are of top quality. It\'s helping me prepare for my entry tests brilliantly.',
  },
  {
    name: 'Zia Ahmed',
    role: 'Business Major',
    quote: 'High-quality education accessible anywhere. Truly empowering for students like me.',
  },
];
