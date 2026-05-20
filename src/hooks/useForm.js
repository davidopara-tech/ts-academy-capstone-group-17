import { useState } from 'react'

function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  const reset = () => setValues(initialValues)

  return { values, setValues, handleChange, reset }
}

export default useForm