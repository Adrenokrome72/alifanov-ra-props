import React from 'react';

interface ListingItemProps {
  item: {
    listing_id: number;
    url: string;
    MainImage: { url_570xN: string };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
  };
}

const ListingItem: React.FC<ListingItemProps> = ({ item }) => {
  const formatTitle = (title: string) => {
    return title.length > 50 ? `${title.substring(0, 50)}…` : title;
  };

  const formatPrice = (price: string, code: string) => {
    switch (code) {
      case 'USD': return `$${price}`;
      case 'EUR': return `€${price}`;
      default: return `${price} ${code}`;
    }
  };

  const getQuantityLevel = (quantity: number) => {
    if (quantity <= 10) return 'level-low';
    if (quantity <= 20) return 'level-medium';
    return 'level-high';
  };

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt={item.title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{formatTitle(item.title)}</p>
        <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
        <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>
          {item.quantity} left
        </p>
      </div>
    </div>
  );
};

export default ListingItem;