interface TextfieldProps {
  label: string;
  value: string;
  onChange: () => void;
}

const Textfield = (props: TextfieldProps) => {
  const { label, value, onChange, ...rest } = props;
  return (
    <div className='textfield'>
      <label className='textfield__label'>{label}</label>
      <input
        className='textfield__input'
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default Textfield;
