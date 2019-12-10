import React from 'react';
import * as selectors from '../../../../../store/item/selectors';
import { connect } from 'react-redux';
import ListItem from "../List";

const ItemLists = ({ activeItems,  onAuctionItems, soldItems, boughtItems }: any) => {
  return (
    <React.Fragment>
    <ListItem items={activeItems} title='Active' noItemsText='No active items yet'/>
    <ListItem items={onAuctionItems} title='On auction' noItemsText='No items on auction yet'/>
    <ListItem items={soldItems} title='Sold' noItemsText='No sold items yet'/>
    <ListItem items={boughtItems} title='Bought' noItemsText='No sold bought yet'/>
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    activeItems: selectors.activeItemsSelector(state),
    onAuctionItems: selectors.onAuctionItemsSelector(state),
    soldItems: selectors.soldItemsSelector(state),
    boughtItems: selectors.boughtItems(state)
  };
};

export default connect(mapStateToProps)(ItemLists);
