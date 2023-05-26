import React from 'react'

const List = () => {
return (
	<div className='List'>
	<h1>Lists</h1>
	<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text" id="">First and last name</span>
  </div>
  <input type="text" class="form-control"/>
  <input type="text" class="form-control"/>
</div>
	<h2>You are inside the List Component</h2>
	{/* <h4>URL: localhost:3000/courses/list</h4> */}
	</div>
)
}

export default List
