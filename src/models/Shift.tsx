import dayjs, { Dayjs } from 'dayjs';

export default interface Shift {
  id: number,
  date: Dayjs,
  description: string,
  student: string,
  title: string
}

interface RawShift {
  id: number,
  date: string,
  description: string,
  student: string,
  title: string
}

function toShift(rawShift: RawShift): Shift {
  return {
    ...rawShift,
    date: dayjs(rawShift.date)
  }
}

export function isShift(value: unknown): value is RawShift {
  if (!value || typeof value !== 'object') {
    return false
  }

  const object = value as Record<string, unknown>

  return (
    typeof object.id == 'number' &&
    typeof object.date == 'string' &&
    typeof object.description == 'string' &&
    typeof object.student == 'string' &&
    typeof object.title == 'string'
  )
}

export function isShiftArray(value: unknown): value is RawShift[] {
  return Array.isArray(value) && value.every(isShift)
}

export async function getShifts(): Promise<Shift[]> {
  const request = await fetch('http://localhost:3001/shifts')
  const data = await request.json()

  if (!isShiftArray(data)) {
    throw new Error('Invalid data: array with shifts expected')
  }

  const shifts = data.map(toShift)
  return shifts
}