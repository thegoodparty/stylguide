import type { Meta, StoryObj } from '@storybook/react'
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '../components/ui/form'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Form>

export const Default: Story = {
  render: () => (
    <Form>
      <FormField>
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormDescription>Your email will remain private.</FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit" className="mt-4">Submit</Button>
    </Form>
  ),
} 