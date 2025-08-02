import React from 'react';
import { ListingItemData } from './Listing';

const ListingItem: React.FC<{ item: ListingItemData }> = ({ item }) => {
  const formatTitle = (title: string) => 
    title.length > 50 ? `${title.substring(0, 50)}…` : title;

  const formatPrice = (currency: string, price: string) => {
    if (!currency || !price) return 'Price not available';
    
    switch (currency) {
      case 'USD': return `$${price}`;
      case 'EUR': return `€${price}`;
      default: return `${price} ${currency}`;
    }
  };

  const getQuantityClass = (quantity: number) => {
    if (quantity <= 10) return 'level-low';
    if (quantity <= 20) return 'level-medium';
    return 'level-high';
  };

  const hasImage = item.MainImage && item.MainImage.url_570xN;

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url || '#'}>
          {hasImage ? (
            <img src={item.MainImage!.url_570xN} alt={item.title} />
          ) : (
            <div className="no-image">No image available</div>
          )}
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{item.title ? formatTitle(item.title) : 'No title'}</p>
        <p className="item-price">
          {formatPrice(item.currency_code, item.price)}
        </p>
        <p className={`item-quantity ${getQuantityClass(item.quantity)}`}>
          {item.quantity} left
        </p>
      </div>
    </div>
  );
};

export default ListingItem;