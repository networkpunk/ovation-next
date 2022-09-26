const ItemCard = ({ item }) => {
  return (
    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
      <img className="object-cover w-full" src={item.image} alt="image" />
      <div className="p-4">
        <h4 className="font-bold">{item.name}</h4>
      </div>
    </div>
  );
};

export default function ItemGrid({ metaData }) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {metaData.map((items) => (
        <ItemCard item={items} key={items.id} />
      ))}
    </div>
  );
}
