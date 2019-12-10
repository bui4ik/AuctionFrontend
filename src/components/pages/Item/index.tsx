import React, { useEffect } from 'react';
import DefaultPageLayout from '../../layouts/DefaultPageLayout';
import { Typography } from 'antd';
import * as authSelector from '../../../store/auth/selectors';
import * as selectors from '../../../store/item/selectors';
import { getItemRequest } from '../../../store/item/actions';
import { connect } from 'react-redux';
import Loading from '../../shared/Loading';
import ForeignItem from './components/ForeignItem';
import UserItem from './components/UserItem';
const { Title } = Typography;

const Item = ({ getItem, match, isLoading, item: { name, userId }, loggedUserId }: any) => {
  useEffect(() => {
    getItem(match.params.id);
  }, [getItem, match.params.id]);
  return (
    <DefaultPageLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Title level={2}>{name}</Title>
          {userId === loggedUserId ? <UserItem /> : <ForeignItem />}
        </React.Fragment>
      )}
    </DefaultPageLayout>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoading: selectors.fetchingItemSelector(state),
    item: selectors.detailedItemSelector(state),
    loggedUserId: authSelector.userIdSelector(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getItem: (id: string) => dispatch(getItemRequest(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Item);
