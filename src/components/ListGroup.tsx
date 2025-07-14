function ListGroup() {
  let items = ["Nairobi", "Mombasa", "Eldoret", "Kisumu", "Nakuru"];
  let itemArray = [];

  return (
    <>
      <h1>List</h1>
      {itemArray.length === 0 && <p>Please add some items to the list.</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
