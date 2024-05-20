import {useForm, SubmitHandler} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import CustomInput from '../../components/Input/CustomInputField'
import CustomSelect from '../../components/Input/CustomDropdown'
import CustomDropdown from '../../components/Input/CustomDropdown'

interface IFormInput {
  matricNo: string
  department: string
  gender: string
  password: string
  mobileNumber: string
}

// Define the validation schema
const schema = yup.object().shape({
  matricNo: yup.string().required('Matric is required'),
  department: yup.string().required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
  gender: yup.string().required('Matric is required'),
  mobileNumber: yup.string().required('Matric is required')
})

const RegisterPassanger = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  })

  const genderOptions = [
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'},
    {value: 'other', label: 'Other'}
  ]

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }
  return (
    <div className='min-h-screen flex flex-row justify-between'>
      <section
        className='form-section 
        flex-1 flex flex-col justify-center items-center min-h-[100%] bg-main-blue
        tablet:bg-white
        '
      >
        <div
          className='form-container 
            border-2 p-2 min-w-[95%] bg-white'
        >
          <p className='text-4xl font-bold mb-2 text-main-blue text-center'>
            Sign Up
          </p>
          <form
            action=''
            className='flex flex-col'
            onSubmit={handleSubmit(onSubmit)}
          >
            <CustomInput
              // label='Matric No'
              placeholder='14/30GC110'
              name='matricNo'
              register={register}
            />
            <CustomInput
              // label='Department'
              placeholder='Buisness Admin'
              name='department'
              register={register}
            />

            <CustomDropdown
              options={genderOptions}
              placeholder='Select Gender'
              name='gender'
              register={register}
            />

            <CustomInput
              // label='Mobile Number'
              placeholder='+23450198364'
              name='mobileNumber'
              register={register}
            />

            <CustomInput
              // label='Password'
              placeholder='**********'
              name='password'
              type='password'
              register={register}
            />

            <button type='submit'>Register</button>
          </form>
        </div>
      </section>

      <section
        className='image-section 
        bg-main-blue flex-1 hidden
        tablet:flex
       '
      ></section>
    </div>
  )
}

export default RegisterPassanger
