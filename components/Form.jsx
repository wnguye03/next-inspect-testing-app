import React from 'react'

const Form = () => {
  // reconfigure to be able to use hooks
  return (
    <section>
      <form action="" onSubmit={()=> {}}>
        <input placeholder='first name' value={inputValue} onChange={handleInputChange}/>
        {/* <input placeholder='last name'/> */}
      </form>
    </section>
  )
}

export default Form
