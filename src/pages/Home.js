import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

export default function Home(){
  const [search,setSearch] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <input 
        className="border p-2 mb-4 w-full"
        placeholder="Search product..."
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="grid grid-cols-3 gap-4">
        {filtered.map(p => <ProductCard key={p.id} product={p}/>)}
      </div>
    </div>
  );
}
