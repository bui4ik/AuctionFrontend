import React, { useState } from 'react';
import * as ac from '../../../../../store/item/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as S from '../../../AddItem/AddItemForm/styles';
import UpdateItemForm from './UpdateItem/UpdateItemForm';
import ChangePhoto from './UpdateItem/ChangePhoto';
import ItemImage from './UpdateItem/ItemImage';
import SoldItem from './SoldItem'
import * as selectors from "../../../../../store/item/selectors";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

const UserItem = ({ deleteItem, match, history, item: { isSold, forAuction, auction } }: any) => {
  const [errors, setErrors]: any = useState('');

  return (
    <React.Fragment>
      { isSold ?  <SoldItem/> : (
        <React.Fragment>
          {errors &&
          errors.map((error: any) => (
            <S.ErrorMessage message={error} type="error" key={errors.indexOf(error)} />
          ))}
          <S.Content>
            <ItemImage />
            <div>
              <UpdateItemForm errors={errors} setErrors={setErrors} />
              <ChangePhoto setErrors={setErrors} />
              <S.DeleteButton onClick={() => deleteItem(match.params.id, history)}>
                Delete item
              </S.DeleteButton>
              { forAuction && <NavLink to={`/auctionRoom/${auction[0]._id}`}>
                <Button>Auction room</Button>
              </NavLink>}
            </div>
          </S.Content>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    item: selectors.detailedItemSelector(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteItem: (id: string, history: any) => dispatch(ac.deleteItemRequest(id, history)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(UserItem));
