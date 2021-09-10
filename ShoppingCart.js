function ShoppingList({ name }) {
  const listItem = ["Instagram", "WhatsApp", "Oculus"];
  return (
    <div className="shopping-list">
      <h1>Shopping List for {name}</h1>
      <ul>
        {listItem.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
