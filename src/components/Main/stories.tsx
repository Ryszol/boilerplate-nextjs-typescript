import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

type Props = {
  title: string
  description: string
}

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado!',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story<Props> = ({ title, description }) => (
  <Main title={title} description={description} />
)
/* Basic.args = {
  title: 'React Avançado!',
  description: 'TypeScript, ReactJS, NextJS e Styled Components'
} */

export const Secondary: Story<Props> = ({ title, description }) => (
  <Main title={title} description={description} />
)
