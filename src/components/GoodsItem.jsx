import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsItem(props) {
  const { mainId, displayName, displayDescription, price, displayAssets } = props;

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription ? displayDescription : displayName}</p>
      </div>
      <div className="card-action">
        <button onClick={() => addToCart({ mainId, displayName, price })} className="btn">
          Купить{' '}
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {price.regularPrice} руб.
        </span>
      </div>
    </div>
  );
}

export default GoodsItem;
