import { Fragment } from "react/jsx-runtime";
function ListGroup() {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  return (
    <Fragment>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
