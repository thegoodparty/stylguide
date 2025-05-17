import type { Meta, StoryObj } from '@storybook/react'
import { ChartContainer, ChartLegend, ChartTooltip } from '../components/ui/chart'

const meta: Meta<typeof ChartContainer> = {
  title: 'Components/Chart',
  component: ChartContainer,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ChartContainer>

const config = {
  series: [
    {
      label: 'Series 1',
      data: [1, 2, 3, 4, 5],
    },
  ],
  xAxis: {
    categories: ['A', 'B', 'C', 'D', 'E'],
  },
}

export const Default: Story = {
  render: () => (
    <ChartContainer config={config}>
      <ChartLegend />
      <ChartTooltip />
    </ChartContainer>
  ),
} 