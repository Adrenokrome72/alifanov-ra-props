import React from 'react';
import ListingItem from './ListingItem';

interface ListingItemData {
  listing_id: number;
  url: string;
  MainImage: { url_570xN: string };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

interface ListingProps {
  items: ListingItemData[];
}

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  const validItems = items.filter(item => 
    item.MainImage && item.MainImage.url_570xN
  );

  return (
    <div className="item-list">
      {validItems.map(item => (
        <ListingItem key={item.listing_id} item={item} />
      ))}
    </div>
  );
};

export default Listing;