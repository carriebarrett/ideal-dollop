import Shift from '../models/Shift'

export const SampleShift: Shift = {
  id: 1,
  title: 'AP Calculus Test Review',
  student: 'Sadie Abraham',
  description: 'I need help studying for my AP Calculus test this Friday'
}

export const SampleShiftList = [
  SampleShift,
  {
    id: 2,
    title: 'AP Statistics Exam Review',
    student: 'Steve Jobs',
    description: 'I need help studying for my stats test'
  },
  {
    id: 3,
    title: 'Algebra 2 Test Corrections',
    student: 'Jane Doe',
    description: 'I can do test corrections to improve my grade'
  }
]