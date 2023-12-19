import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

function Products() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Error loading products</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} {product.currency}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
