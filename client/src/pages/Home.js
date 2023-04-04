import Search from '../components/Search'
import FriendList from '../components/FriendList'
const Home = ({ friendList }) => {
  return (
    <div className="homepapa">
      <div className="greaterHomeDiv">
        <Search />
      </div>
      <div className="friendListDad">
        <FriendList friendList={friendList} />
      </div>
    </div>
  )
}

export default Home
