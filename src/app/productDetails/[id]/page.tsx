import { MyParams } from "@/app/lib/definitions";

export default function page(params: MyParams) {
  const productId = params.id;
  return <div>Product details</div>;
}
