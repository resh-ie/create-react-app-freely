import { yupResolver } from '@hookform/resolvers/yup';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';

import Textfield from '../../components/Textfield/Textfield';
import TextFieldSchema from '../../schema/TextfieldSchema';

export default {
  title: 'Components/Textfield',
  component: Textfield,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof Textfield>;

const Template: ComponentStory<typeof Textfield> = (args) => {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: 'all', resolver: yupResolver(TextFieldSchema) });
  return (
    <div className='tsr-form'>
      <div className='tsr-form_body'>
        <Textfield {...args} register={register} error={errors.name?.message} />
      </div>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Textfield',
  value: 'Textfield value',
  name: 'name',
};
