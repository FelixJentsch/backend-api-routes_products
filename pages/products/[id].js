import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>Error loading products</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {data.name}</p>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
    </div>
  );
}
