import { useForm } from "react-hook-form";
import { useState } from "react";
import CreatableSelect from 'react-select/creatable';
import InputHook from "../assets/UI/InputHook";
const TestJob = () => {
  const [selectSkills, setSelectSkills] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
  //  watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectSkills;
    console.log(data);
  };
  
  const options = [
    {value: 'HTML', label: 'HTML'},
    {value: 'CSS', label: 'CSS'},
    {value: 'Javascript', label: 'Javascript'},
    {value: 'Node Js', label: 'Node Js'},
    {value: 'React Js', label: 'React Js'},
    {value: 'MongoDB', label: 'MongoDB'},
  ]

  return (
    <div className="max-w-screen-2xl mx-auto container lg:px-24 px-4 py-10 ">
      <h1 className="text-blue-900 text-2xl font-semibold">Post A Job</h1>
      {/* form */}
      <div className="bg-[#f0f0f0] px-4 py-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          {/* row -- 1 */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <InputHook
                type = "text"
                classCSS = "create-job-input"
                defaultText="Jr. FrontEnd Developer"
                register={ register}
                inputFeild="jobTitle"
                inputError = {errors}
               />
               {errors.jobTitle && <span className="create-job-error">This field is required</span>}
            </div>
            <div className="lg:w-1/2 w-full">
              123
            </div>
          </div>
           
          <div className="pt-4">
          <input type="submit" className="py-1.5 px-4 bg-blue-800 font-semibold text-white rounded-sm cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestJob;
