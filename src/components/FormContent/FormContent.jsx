import React, { useRef, useEffect } from 'react'
import { Form } from 'react-router-dom'
import './FormContent.css'
const FormContent = ({ headerTitle, buttonName, newId }) => {
  const focusRef = useRef()

  useEffect(() => {
    focusRef.current.focus()
  })
  return (
    <div className='note'>
      <Form
        className='form'
        method='post'
      >
        <h2>{headerTitle}</h2>
        <div className='form-input'>
          <input
            type='text'
            name='newName'
            id='newName'
            placeholder='First name and last name... '
            required
            ref={focusRef}
          />
        </div>
        <div className='form-input'>
          <input
            type='tel'
            name='newPhone'
            id='newPhone'
            placeholder='Phone number... '
            pattern='[0-9]{3}[0-9]{3}[0-9]{3}'
            required
          />
        </div>
        <div className='date-wrapper'>
          <div className='form-input'>
            <label htmlFor='dateStart'>Car rental date</label>
            <input
              type='date'
              name='dateStart'
              id='dateStart'
              placeholder='dateStart '
              required
            />
          </div>
          <div className='form-input'>
            <label htmlFor='dateEnd'>Car return date</label>
            <input
              type='date'
              name='dateEnd'
              id='dateEnd'
              placeholder='dateEnd '
              required
            />
          </div>
        </div>
        <div className='form-input'>
          <input
            type='text'
            name='newCity'
            id='newCity'
            placeholder='City of rental and return... '
            required
          />
        </div>

        <input
          type='hidden'
          name='newId'
          value={newId}
        />

        <div className='form-input'>
          <button
            type='submit'
            className='btn btn-dark'
          >
            {buttonName}
          </button>
        </div>
      </Form>
    </div>
  )
}

export default FormContent
