import { takeLatest, put, call, all } from 'redux-saga/effects'
import * as requests from '../../api/requests/item'
import * as ac from "./actions";
import { toast } from "react-toastify";

function* getItem({payload} : any) {
  try {
    const response = yield call<any>(requests.getItem, payload);
    yield put(ac.getItemSuccess(response.data))
  } catch (e) {
    yield put(ac.getItemFailure(e))
  }
}

function* getAllItems({payload}: any) {
  try {
    const { data } = yield call<any>(requests.getAllItems, payload);
    yield put(ac.getAllItemsSuccess(data))
  } catch (e) {
    yield put(ac.getAllItemsFailure(e))
  }
}

function* addItem({payload}: any) {
  try {
    const { history, newItem } = payload;
    const response = yield call<any>(requests.addItem, newItem);
    yield put(ac.addItemSuccess(response.data));
    history.push('/items');
  }catch (e) {
    yield put(ac.addItemFailure(e))
  }
}

function* addAuctionItem({payload}: any) {
  try {
    const { history, newAuction } = payload;
    const response = yield call<any>(requests.addAuctionItem, payload);
    yield put(ac.addAuctionItemSuccess(response));
    toast.success(`Auction ${newAuction.title} was successfully bought`);
    history.push('/items');
  } catch (e) {
    yield put(ac.addAuctionItemFailure(e))
  }
}

function* updateItem({payload}: any) {
  try {
    const response = yield call<any>(requests.updateItem, payload);
    yield put(ac.updateItemSuccess(response.data))
  }catch (e) {
    yield put(ac.updateItemFailure(e))
  }
}

function* updateItemImage({payload}: any) {
  try {
    const { data } = yield call<any>(requests.updateItemImage, payload);
    yield put(ac.updateItemImageSuccess(data))
  }catch (e) {
    yield put(ac.updateItemImageFailure(e))
  }
}

function* deleteItem({payload}: any) {
  try {
    const { history } = payload;
    yield call<any>(requests.deleteItem, payload);
    yield put(ac.deleteItemSuccess());
    history.push('/items');
  } catch (e) {
    yield put(ac.deleteItemFailure(e))
  }
}

function* getNotOnAuctionItems() {
  try {
    const response = yield call<any>(requests.getNotOnAuctionItems);
    yield put(ac.getNotOnAuctionItemsSuccess(response.data))
  } catch (e) {
    yield  put(ac.getNotOnAuctionItemsFailure(e))
  }
}

function* buyItem({payload}: any) {
  try {
    const { itemId } = payload.newData;
    console.log(payload.newData);
    yield call<any>(requests.updateItem, payload);
    yield put(ac.buyItemSuccess());
    toast.success(`Item ${itemId} was successfully bought`);
    payload.history.push('/items');
  }catch (e) {
    yield put(ac.buyItemFailure(e))
  }
}

function* getItemsOnSale({payload}: any) {
  try {
    const { data } = yield call<any>(requests.getItemsOnSale, payload);
    yield put(ac.getItemsOnSaleSuccess(data))
  }catch (e) {
    yield put(ac.getItemsOnSaleFailure(e))
  }
}

export default function* () {
  yield all([
    takeLatest(ac.GET_ITEM_REQUEST, getItem),
    takeLatest(ac.GET_ALL_ITEMS_REQUEST, getAllItems),
    takeLatest(ac.ADD_ITEM_REQUEST, addItem),
    takeLatest(ac.UPDATE_ITEM_REQUEST, updateItem),
    takeLatest(ac.UPDATE_ITEM_IMAGE_REQUEST, updateItemImage),
    takeLatest(ac.DELETE_ITEM_REQUEST, deleteItem),
    takeLatest(ac.GET_NOT_ON_AUCTION_ITEMS_REQUEST, getNotOnAuctionItems),
    takeLatest(ac.BUY_ITEM_REQUEST, buyItem),
    takeLatest(ac.ADD_AUCTION_ITEM_REQUEST, addAuctionItem),
    takeLatest(ac.GET_ITEMS_ON_SALE_REQUEST, getItemsOnSale)
  ]);
}
