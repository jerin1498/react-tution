import React from "react";

function UserData() {
  const [userName, setUserName] = React.useState("happy");

  const onNameChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <h1>{userName}</h1>
      <form action="">
        <input
          onChange={onNameChange}
          type="text"
          placeholder="name"
          value={userName}
        />
      </form>
    </div>
  );
}

export default UserData;
