import GoodsItem from './GoodsItem';

function GoodsList(props) {
  const { goods = [], addToCart } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem addToCart={addToCart} key={item.mainId} {...item} />
      ))}
    </div>
  );
}

export default GoodsList;
