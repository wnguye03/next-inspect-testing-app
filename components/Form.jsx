import React from 'react'

const Form = (handleSubmit) => {
  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <input placeholder='first name'/>
        <input placeholder='last name'/>
      </form>
    </section>
  )
}

export default Form
