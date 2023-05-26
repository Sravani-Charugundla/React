import React, { useState } from 'react';
import productsData from './products.json'
import Dropdown from './components/dropdown';



const App = () => {
	const [users, setUsers] = useState("");
  const handleChange = (event) => {
		const value = event.target.value;
		setUsers(value);
	};

	// const handleChange = (e) => {
	// 	const username = e.target.value;
  //   setUsers(username);
  //   console.log();
  //   console.log("ko");
  //   if(users!="")
  //   {
  //     console.log("k");
  //     console.log(users);

  //     <Dropdown ord={users}/>
  //   }
    
	// 	// fetch(`/products.json?s=${username}`)
	// 	// 	.then((res) => res.json())
	// 	// 	.then(setUsers)
	// 	// 	.catch(console.error);
	// };
  const drop = ()=> {
    
   
  }

	return (
		<div>
			<label htmlFor="username">
				Enter username
				<input
					id="username"
					type="text"
					list="users"
					onChange={handleChange}
				/>
			</label>
			<datalist id="users">
				{productsData.map((user) => (
					<option value={user.username} key={user.username}>
						{user.username}
					</option>
				))}
			</datalist>
      {console.log(users)}
      {users && <Dropdown ord={users}/>}
		</div>
	);

};

export default App;