const Greeting = (props) => {
  return (
    <div>
      <h3>{`Name: ${props.name}, age: ${props.age}`}</h3>
      <p>Designation {props.children}</p>
    </div>
  );
};

export default Greeting;
