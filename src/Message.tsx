function Message() {
  const message = "Hello, this is a message component!";
  if (message) return <h1>{message}</h1>;
  return <h1>No message available</h1>;
}
export default Message;
