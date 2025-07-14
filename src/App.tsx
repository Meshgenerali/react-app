import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Nairobi", "Mombasa", "Eldoret", "Kisumu", "Nakuru"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}
export default App;
