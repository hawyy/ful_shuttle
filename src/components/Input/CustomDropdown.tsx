import React, {useState} from 'react'
import {UseFormRegister} from 'react-hook-form'

interface Option {
  value: string
  label: string
}
interface DropdownProps {
  options: Option[]
  placeholder?: string
  name: string
  register: UseFormRegister<any>
}

const CustomDropdown = ({
  options,
  placeholder,
  name,
  register
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value)
  }

  return (
    <select
      {...register(name)}
      className='flex flex-col w-full max-w-md mx-auto my-3
          px-4 py-2 border
         border-gray-300 rounded-lg shadow-sm focus:outline-none 
         focus:ring-2 focus:ring-main-blue focus:border-transparent bg-white
      '
      value={selectedOption}
      onChange={handleChange}
    >
      {placeholder && (
        <option value='' className='text-gray-700 text-sm font-bold mb-2'>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default CustomDropdown
