import { axiosInstance } from '../axiosInstance';

export const getItem = async ({ id }: any) => {
  return await axiosInstance.get(`./api/items/${id}`);
};

export const getAllItems = async ({ id }: any) => {
  return await axiosInstance.get(`./api/items/allItems/${id}`);
};

export const getItemsOnSale = async ({page}: any) => {
  return await axiosInstance.get(`./api/items/onSale/${page}`)
};

export const addItem = async ({ name, price, description, image, forAuction }: any) => {
  console.log(name, price, description, image, forAuction);
  const fd = new FormData();
  fd.append('name', name);
  fd.append('price', price);
  fd.append('description', description);
  fd.append('itemImage', image);
  fd.append('forAuction', forAuction);
  return await axiosInstance.post('./api/items/', fd, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const addAuctionItem = async ({newItem, newAuction}: any) => {
  const fd = new FormData();
  fd.append('name', newItem.name);
  fd.append('price', newItem.price);
  fd.append('description', newItem.description);
  fd.append('itemImage', newItem.itemImage);
  fd.append('forAuction', newItem.forAuction);
  fd.append('title', newAuction.title);
  fd.append('startPrice', newAuction.startPrice);
  fd.append('minBid', newAuction.minBid);
  fd.append('hostId', newAuction.hostId);
  fd.append('userId', newAuction.hostId);
  fd.append('endTime', newAuction.endTime);
  return await axiosInstance.post('./api/items/auctionItem/', fd, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
};

export const updateItem = async ({ id, newData }: any) => {
  return axiosInstance.put(`./api/items/${id}`, newData);
};

export const updateItemImage = async ({ id, image }: any) => {
  const fd = new FormData();
  fd.append('itemImage', image);
  return await axiosInstance.put(`./api/items/updatephoto/${id}`, fd, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteItem = async ({ id }: any) => {
  return axiosInstance.delete(`./api/items/${id}`);
};

export const getNotOnAuctionItems = async () => {
  return axiosInstance.get('./api/items/notonauction');
};
