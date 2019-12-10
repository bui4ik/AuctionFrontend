export const createItem = (loggedUserId: string, values: any) => ({
  name: values.name,
  description: values.description,
  price: values.price,
  forAuction: values.forAuction,
  userId: loggedUserId,
  itemImage: values.image
});

export const createAuction = (loggedUserId: string, values: any) => {
  const endTime = Date.now() + Number(values.duration)*3600000;
  return ({
    title: `Auction for ${values.name}`,
    startPrice: values.startPrice,
    minBid: values.minBid,
    hostId: loggedUserId,
    endTime: endTime,
  })
};
