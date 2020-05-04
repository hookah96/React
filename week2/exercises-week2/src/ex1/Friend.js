import React, { useState, useEffect } from "react";
import Button from "./Button.js";
import FriendProfile from "./FriendProfile.js";

function Friend() {
  const [friend, setFriend] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getFriend = async () => {
    const response = await fetch("https://www.randomuser.me/api?results=1");
    const data = await response.json();
    const [item] = data.results;
    setFriend(item);
    setIsLoading(false);
  };

  useEffect(() => {
    getFriend();
  }, []);

  return (
    <div>
      <FriendProfile
        firstName={friend.name && friend.name.first}
        lastName={friend.name && friend.name.last}
        addressNumber={friend.location && friend.location.street.number}
        streetName={friend.location && friend.location.street.name}
        city={friend.location && friend.location.city}
        state={friend.location && friend.location.state}
        country={friend.location && friend.location.country}
        email={friend.email}
        phoneNumber={friend.cell}
      />
      {isLoading ? <h4>Loading...</h4> : <Button getFriend={getFriend} />}
    </div>
  );
}

export default Friend;
