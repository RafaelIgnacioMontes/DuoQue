import Search from '../components/Search'
import FriendList from '../components/FriendList'
const Home = ({ friendList, summoner }) => {
  return (
    <div className="homepapa">
      <div className="greaterHomeDiv">
        <Search />
      </div>
      <div className="friendListDad">
        <FriendList friendList={friendList} summoner={summoner} />
      </div>
    </div>
  )
}

export default Home
