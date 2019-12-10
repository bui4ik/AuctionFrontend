import React, { useEffect } from 'react';
import DefaultPageLayout from '../../layouts/DefaultPageLayout';
import * as selectors from '../../../store/auctions/selectors';
import { getUserAuctionsRequest } from '../../../store/auctions/actions';
import { connect } from 'react-redux';
import Loading from '../../shared/Loading';
import routes from '../../../config/routes';
import ListsHeader from '../../shared/ListsHeader';
import AuctionsList from './components/AuctionsList';

const Auctions = ({ isLoading, getUserAuctions, activeAuctions, completedAuctions }: any) => {
  useEffect(() => {
    getUserAuctions();
  }, [getUserAuctions]);

  return (
    <DefaultPageLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <ListsHeader title="My Auctions" link={routes.createAuction} />
          <AuctionsList
            auctions={activeAuctions}
            title="Active"
            noItemsText="No active auctions yet"
          />
          <AuctionsList
            auctions={completedAuctions}
            title="Completed"
            noItemsText="No completed auctions yet"
          />
        </React.Fragment>
      )}
    </DefaultPageLayout>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoading: selectors.fetchingUserAuctionsSelector(state),
    activeAuctions: selectors.activeAuctionsSelector(state),
    completedAuctions: selectors.completedAuctionsSelector(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUserAuctions: () => dispatch(getUserAuctionsRequest()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auctions);
