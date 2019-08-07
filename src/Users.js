import React, { useEffect, useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Users() {

  //componentDidMount
  useEffect(() => {
    fetchDatas()
  }, [])

  const [items, setItems] = useState([])

  const fetchDatas = async () => {
    let items = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get')
    items = await items.json()

    setItems(items.items)
    console.log('users', items)
  }

  return (
    <div>
      <h1>Users Page</h1>
      <div className='grid'>
        {items.map(item => {
          return <div key={item.itemid}>
            <Link to={`/users/${item.itemid}`}>
              {`${item.name}`}
            </Link>
              <img src={item.item.image}/>
          </div>
        })}
      </div>
    </div>
  );
}

export default Users;
