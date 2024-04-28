import React from 'react'

const InputHook = ({type, classCSS, defaultText, register, inputFeild}) => {
  return (
    <>
        <label className="block text-primary py-1.5 text-lg">Job Title</label>
              <input
                type={type}
                className={classCSS}
                placeholder={defaultText}
                {...register(inputFeild, { required: true })}
              />
    </>
  )
}

export default InputHook