// import { FieldError } from 'react-hook-form';

interface TextfieldProps {
  label?: string;
  value: string;
  register: any;
  error?: any;
  name: string;
}

const Textfield = (props: TextfieldProps) => {
  const { label, name, value, error, register, ...rest } = props;
  return (
    <div className='textfield'>
      {label && <label className='textfield__label'>{label}</label>}
      <input
        className='textfield__input'
        aria-invalid={error ? 'true' : 'false'}
        defaultValue={value}
        {...register(name)}
        {...rest}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Textfield;
