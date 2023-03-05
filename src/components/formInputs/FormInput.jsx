import React from 'react'

const FormInput = ({type,handleOnchange,name,labelText}) => {
  return (
    <div>
        <label htmlFor={name}>{labelText}</label>
        <input type={type} onChange={handleOnchange} name={name} />
    </div>
  )
}

export default FormInput