import { TextField } from '@mui/material';

interface TextfieldProps {
  label?: string;
  value: string;
  register: any;
  error?: any;
  name: string;
  className?: string;
}

const Textfield = (props: TextfieldProps) => {
  const { label, name, value, error, className, register, ...rest } = props;
  return (
    <TextField
      className={className}
      label={label}
      id={name}
      defaultValue={value}
      {...register(name)}
      {...rest}
      fullWidth
      error={error ? true : false}
      helperText={error ? error : null}
    />
  );
};

export default Textfield;
