import { useEffect, useState } from 'react'
import axios from 'axios'
import Client from '../services/api'
const FriendList = ({ summoner, friendList }) => {
  let summonerId = localStorage.getItem('summonerId')

  const deleteFriend = async (e) => {
    await Client.delete(`/delete/${summonerId}/friend/${friendList.id}`)
  }

  return (
    <div className="bigdaddy">
      <div className="greaterFriendList">
        <div className="Friends">
          <div className="title">Friends:</div>
          <div key={friendList.id}>
            {friendList.map((friend) => (
              <div className="friendlist">
                <div className="name">
                  {friend.summonerName} <box onClick={deleteFriend}>[X]</box>
                </div>
                <div className="level">{friend.summonerLevel}</div>
                <div className="tier">
                  {friend.tier} {friend.rank}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FriendList
