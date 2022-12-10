import React from "react";
import Button from "react-bootstrap/Button";
import "./styles.css";

function Count(props) {
  const { myName, age, children } = props;
  const [count, setCount] = React.useState(0);
  const onClickAdd = () => {
    setCount(count + 1);
  };

  const onClickSub = () => {
    setCount(count - 1);
  };

  return (
    <div className="">
      <h1 className="colorBlue">number of times clicked - {count} </h1>
      <h1>{myName}</h1>
      <h1>{age}</h1>
      <Button onClick={onClickAdd} variant="outline-success">
        +
      </Button>
      <br />
      <Button onClick={onClickSub} variant="outline-danger">
        -
      </Button>
      {children}
    </div>
  );
}

export default Count;
