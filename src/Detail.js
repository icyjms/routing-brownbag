import React, { useEffect, useState } from 'react';
import './App.css';

function Detail({match, history}) {

  //componentDidMount
  useEffect(() => {
    fetchData()
  }, [])

  const [item, setItem] = useState({
    images:{}
  })

  const fetchData = async () => {
    let item = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`)
    item = await item.json()

    setItem(item)
    console.log('user', item)
  }

  const back = () => {
    history.goBack()
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <h3>Description: {item.description}</h3>
      <img src={item.images.information}/><br/>
      <button onClick={() => back()}>Go Back</button>
    </div>
  );
}

export default Detail;
