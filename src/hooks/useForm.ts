import {useState} from 'react';

type TUseForm = {
  [name:string]: string;
};

export const useForm = (inputValues:any) => {
  const [form, setValues] = useState<TUseForm>(inputValues);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    setValues({...form, [name]: value});
  };
  return {form, onChange, setValues};
}