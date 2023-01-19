import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import Statistics from "./Statistics/Statistics";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import user from "./folaund-json/user.json";
import friends from "./folaund-json/friends.json";
import data from "./folaund-json/data.json";
import transactions from "./folaund-json/transactions.json";



export const App = () => {
  return (
  <div>
      <>
       
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
      <Statistics title="Upload stats" stats={data} />
     

      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
    

   
      </>
      </div>
  );
};

      
