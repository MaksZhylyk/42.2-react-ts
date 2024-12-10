import { ProductionItemWrapper } from "./styles";

function ProductItem({ product }: any) {
  return (
    <ProductionItemWrapper>
      <div>{product}</div>
    </ProductionItemWrapper>
  );
}
