import * as yup from 'yup';

const TextFieldSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
});

export default TextFieldSchema;
