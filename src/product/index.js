import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();

  return <h1>제품상세페이지{id}</h1>;
}

export default ProductPage;
