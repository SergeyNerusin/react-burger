import {useState} from 'react';

export function useForm(inputValues) {
  const [form, setValues] = useState(inputValues);

  const onChange = (event) => {
    const {value, name} = event.target;
    setValues({...form, [name]: value});
  };
  return {form, onChange, setValues};
}