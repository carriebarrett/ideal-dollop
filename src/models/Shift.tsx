import dayjs, { Dayjs } from 'dayjs';

export default interface Shift {
  id: number,
  date: Dayjs
  title: string,
  student: string,
  description: string
}