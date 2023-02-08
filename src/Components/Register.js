import React from 'react'

export default function Register() {
  return (
    <div className='container card p-3 mt-2 register-container'>
      <form>
        <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' className='form-control' />
        </div>
      </form>
    </div>
  )
}
