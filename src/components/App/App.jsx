import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import "./App.module.css";

import userData from "../../data/userData.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <hr />
      <FriendList friends={friends} />
      <hr />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
