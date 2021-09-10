const rootElement = document.getElementById("shoppingcard");

function App() {
  return (
    <div>
      <ShoppingList name="Billy" />
      <Star />
    </div>
  );
}

ReactDOM.render(<App />, rootElement);
