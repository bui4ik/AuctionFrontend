import { axiosInstance } from '../axiosInstance';

export const createNewAuction = async ({
  title,
  startPrice,
  minBid,
  itemId,
  startTime,
  endTime,
}: any) => {
  return await axiosInstance.post('./api/auctions', {
    title,
    startPrice,
    minBid,
    itemId,
    startTime,
    endTime,
  });
};

export const getUserAuctions = async () => {
  return await axiosInstance.get('./api/auctions')
};

export const getAuction = async (id: any) => {
  return await axiosInstance.get(`./api/auctions/${id}`)
};
