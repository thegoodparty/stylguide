import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '../components/ui/calendar'
import { useState } from 'react'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Calendar>

const DefaultCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}

const MultipleCalendar = () => {
  const [date, setDate] = useState<Date[] | undefined>([
    new Date(),
    new Date(new Date().setDate(new Date().getDate() + 3)),
  ])
  return (
    <Calendar
      mode="multiple"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}

const RangeCalendar = () => {
  const [date, setDate] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 7)),
  })
  return (
    <Calendar
      mode="range"
      selected={date}
      onSelect={(range) => {
        if (range) {
          setDate({
            from: range.from,
            to: range.to,
          })
        }
      }}
      className="rounded-md border"
    />
  )
}

const DisabledDaysCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={(date) => date < new Date()}
      className="rounded-md border"
    />
  )
}

const CustomStylesCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border bg-card text-card-foreground shadow"
    />
  )
}

export const Default: Story = {
  render: () => <DefaultCalendar />,
}

export const WithMultiple: Story = {
  render: () => <MultipleCalendar />,
}

export const WithRange: Story = {
  render: () => <RangeCalendar />,
}

export const WithDisabledDays: Story = {
  render: () => <DisabledDaysCalendar />,
}

export const WithCustomStyles: Story = {
  render: () => <CustomStylesCalendar />,
} 