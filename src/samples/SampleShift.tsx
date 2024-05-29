import Shift from '../models/Shift'
import dayjs from 'dayjs';

export const SampleShift: Shift = {
  id: 1,
  date: dayjs().set('date', 25).set('month', 1).set('year', 2024).set('hour', 5).set('minute', 55),
  title: 'AP Calculus Test Review',
  student: 'Sadie Abraham',
  description: 'I need help studying for my AP Calculus test this Friday'
}

export const SampleShiftList = [
  SampleShift,
  {
    id: 2,
    date: dayjs('2019-01-26').set('hour', 14).set('minute', 35),
    title: 'AP Statistics Exam Review',
    student: 'Steve Jobs',
    description: 'I need help studying for my stats test'
  },
  {
    id: 3,
    date: dayjs('2019-01-28').set('hour', 12).set('minute', 15),
    title: 'Algebra 2 Test Corrections',
    student: 'Jane Doe',
    description: 'I can do test corrections to improve my grade'
  }
]