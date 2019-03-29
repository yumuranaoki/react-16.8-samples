import * as React from 'react';

interface Form {
  value: string,
  onChange: (e: any) => void,
}

const useForm = (size: number) => {
  const form: Form[] = [];
  for (let i=0; i < size; i++) {
    const [value, setValue] = React.useState("");
    form.push({value, onChange: (e: any) => setValue(e.target.value)})
  }

  const handleSubmit = () => {
    const content: string[] = [];
    form.forEach((i: Form) => {
      content.push(i.value);
    })
    console.log(content)
  }

  return {form, handleSubmit: () => handleSubmit()}
}

const Form: React.FC<{}> = () => {
  const {form, handleSubmit} = useForm(2)

  return (
    <div>
      <input {...form[0]} placeholder='name'></input>
      <input {...form[1]} placeholder='email'></input>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Form;