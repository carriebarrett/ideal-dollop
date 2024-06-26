import Shift from '../models/Shift'
import dayjs from 'dayjs';

export const SampleShift: Shift = {
  id: 1,
  date: dayjs('2022-04-25').set('hour', 5).set('minute', 55),
  title: 'AP Calculus Test Review',
  student: 'Sadie Abraham',
  description: 'I need help studying for my AP Calculus test this Friday'
}

export const SampleShiftList = [
  SampleShift,
  {
    id: 2,
    date: dayjs('2022-05-26').set('hour', 14).set('minute', 35),
    title: 'AP Statistics Exam Review',
    student: 'Steve Jobs',
    description: 'I need help studying for my stats test'
  },
  {
    id: 3,
    date: dayjs('2022-06-28T12:25:00.000Z'),
    title: 'Algebra 2 Test Corrections',
    student: 'Jane Doe',
    description: 'I can do test corrections to improve my grade'
  }
]