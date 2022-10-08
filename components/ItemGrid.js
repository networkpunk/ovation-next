import Link from "next/link";
import Image from "next/image";

const ItemCard = ({ item }) => {
  return (
    <Link href={`/nft/${encodeURIComponent(item.id)}`}>
      <a className="w-full bg-purple-100 hover:bg-purple-200 rounded-sm shadow-md hover:shadow-lg lg:max-w-sm">
        <img
          className="object-cover w-full p-2 pb-0"
          src={item.image}
          alt="image"
        />
        <div className="p-4">
          <h4 className="font-semibold text-sm text-purple-900">{item.name}</h4>
        </div>
      </a>
    </Link>
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
