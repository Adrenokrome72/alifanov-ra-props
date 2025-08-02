import React from 'react';
import ListingItem from './ListingItem';
import { itemsJsonString } from '../../data/items';

export interface ListingItemData {
  listing_id: number;
  url: string;
  MainImage?: { 
    url_570xN?: string;
  };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

// Парсинг данных с помощью JSON.parse
const parseItems = (): ListingItemData[] => {
  try {
    return JSON.parse(itemsJsonString);
  } catch (error) {
    console.error('Error parsing items JSON:', error);
    return [];
  }
};

const defaultItems = parseItems();

interface ListingProps {
  items?: ListingItemData[];
}

const Listing: React.FC<ListingProps> = ({ items = defaultItems }) => (
  <div className="item-list">
    {items.map(item => (
      <ListingItem key={item.listing_id} item={item} />
    ))}
  </div>
);

export default Listing;