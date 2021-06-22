import {useState} from 'react';
const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'fill in a valid email',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
    message: 'password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter'
  },
  number: {
    regex: /^\d+$/,
    message: 'How to number',
  }
  
}
const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  function validate(value){
    if(type === false) return true;
    if(value.length === 0){
      setError('fill in a value in the field');
      return false;
    }else if(types[type] && !types[type].regex.test(value)){
      setError(types[type].message);
      return false;
    }else{
      setError(null);
      return true;
    }
  }
  function onChange({target}){
    if(error) validate(target.value); 
    setValue(target.value);
  }
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm
