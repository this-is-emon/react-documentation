// eslint-disable-next-line no-unused-vars

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

function FunctionInComponent() {
  return <h1>To Do List for {formatDate(today)}</h1>;
}

export default FunctionInComponent;
