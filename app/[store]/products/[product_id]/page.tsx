interface Props {
	params: { product_id: string };
}

const ProductDetailPage = ({ params: { product_id } }: Props) => {
	return <div>{product_id}</div>;
};
export default ProductDetailPage;
