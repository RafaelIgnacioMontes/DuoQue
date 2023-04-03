import { useState } from 'react'
import axios from 'axios'
import Client from '../services/api'
const FriendList = ({ summoner }) => {
  const [friendList, setFriendList] = useState()

  const getFriends = async () => {
    let response = Client.get(
      `http://localhost:3001/server/friendlist/addFriend/${summoner.id}/friend/${friend.id}`
    )
    console.log(response)
  }

  return (
    <div>
      <div></div>
    </div>
  )
}

export default FriendList
