import React from 'react';
import { BrowserRouter as Router, Route, Link, useParams, Routes} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [data, setData] = useState({
    id: '',
    name: '',
    email: '',
    address:''
  });

  const navigate = useNavigate();

  const handleSubmit = () => {

    navigate(`/users/${data.id}/${data.name}/${data.email}/${data.address}`);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <input type="text" id="input" placeholder="id" value={data.id} onChange={(e) => setData({...data, id: e.target.value})}></input>
      <br/>
      <br/>
      <input type="text" id="input" placeholder="Name" value={data.name} onChange={(f) => setData({...data, name: f.target.value})}></input>
      <br/>
      <br/>
      <input type="text" id="input" placeholder="email" value={data.email} onChange={(g) => setData({...data, email: g.target.value})}></input>
      <br/>
      <br/>
      <input type="text" id="input" placeholder="Address" value={data.address} onChange={(h) => setData({...data, address: h.target.value})}></input>
      <button onClick={handleSubmit}>Submit</button>

      <Routes>
        <Route exact path="/users" element={<UserList/>} />
        <Route path="/users/:id/:name/:email/:address" element={<UserDetail/>} />
      </Routes>
    </div>
  );
}

function UserList() {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        <li>
          <Link to="/users/1/John/john@example.com/komapally">User 1</Link>
        </li>
        <li>
          <Link to="/users/2/Jane/jane@example.com/ECIL">User 2</Link>
        </li>
        <li>
          <Link to="/users/3/Bob/bob@example.com/KPHB">User 3</Link>
        </li>
      </ul>
    </div>
  );
}

function UserDetail() {
  const { id, name, email,address } = useParams();

  return (
    <div>
      <h2>User Detail</h2>
      <p>User ID: {id}</p>
      <p>User Name: {name}</p>
      <p>User Email: {email}</p>
      <p>User Email: {address}</p>
    </div>
  );
}

export default App;
