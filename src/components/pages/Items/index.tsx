import React, { useEffect } from 'react';
import DefaultPageLayout from '../../layouts/DefaultPageLayout';
import * as selectors from '../../../store/item/selectors';
import * as authSelectors from '../../../store/auth/selectors';
import { getAllItemsRequest } from '../../../store/item/actions';
import { connect } from 'react-redux';
import Loading from '../../shared/Loading';
import ItemLists from './components/ItemLists';
import routes from "../../../config/routes";
import ListsHeader from "../../shared/ListsHeader";

const Items = ({ isLoading, getAllItemsRequest, loggedUserId }: any) => {
  useEffect(() => {
    getAllItemsRequest(loggedUserId);
  }, [getAllItemsRequest, loggedUserId]);

  return (
    <DefaultPageLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <ListsHeader title='My Items' link={routes.addNewItem}/>
          <ItemLists />
        </React.Fragment>
      )}
    </DefaultPageLayout>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoading: selectors.fetchingAllItems(state),
    loggedUserId: authSelectors.userIdSelector(state)
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAllItemsRequest: (id: string) => dispatch(getAllItemsRequest(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Items);
