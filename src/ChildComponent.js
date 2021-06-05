function ChildComponent(props) {
  const name = props.name;
  const age = props.age;
  return (
    <h3>
      나는 {name}입니다. {age}살 쳐먹었다
    </h3>
  );
}

export default ChildComponent;
