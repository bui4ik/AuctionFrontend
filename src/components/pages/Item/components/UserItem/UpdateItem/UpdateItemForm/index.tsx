import React, { useState } from "react";
import { Form } from 'react-final-form';
import * as S from '../../../../../AddItem/AddItemForm/styles';
import ItemNameInput from '../../../../../AddItem/AddItemForm/ItemNameInput';
import ItemPriceInput from '../../../../../AddItem/AddItemForm/ItemPriceInput';
import ItemDescTextArea from '../../../../../AddItem/AddItemForm/ItemDescTextArea';
import ForAuctionCheckBox from '../../../../../AddItem/AddItemForm/ForAuctionCheckBox';
import { updateItemValidation } from '../../../../../../../utils/validation';
import * as selectors from '../../../../../../../store/item/selectors';
import * as ac from '../../../../../../../store/item/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Loading from '../../../../../../shared/Loading';
import StartPriceInput from "../../../../../AddItem/AddItemForm/StartPriceInput";
import MinimalBidInput from "../../../../../AddItem/AddItemForm/MinBidInput";

const UpdateItemForm = ({
  errors,
  setErrors,
  updateItem,
  match,
  item: { name, description, price, forAuction, auction },
  updatingItem,
}: any) => {
  const [checked, setChecked] = useState(forAuction);
  const onSubmit = (values: any) => {
    if (errors.length > 0) setErrors([]);
    const isErrorsExists = updateItemValidation(values);
    if (isErrorsExists) {
      const newErrors = Object.values(isErrorsExists).map((el: any) => el[0]);
      setErrors(newErrors);
      return;
    }
    updateItem(match.params.id, values);
  };

  return (
    <div>
      {updatingItem ? (
        <Loading />
      ) : (
        <Form
          onSubmit={onSubmit}
          initialValues={{
            name: name,
            price: price,
            description: description,
            forAuction: forAuction,
            startPrice: auction[0] && auction[0].startPrice,
            minBid: auction[0] &&  auction[0].minBid
          }}
          render={({ handleSubmit, submitting, pristine }) => (
            <S.FormWrapper onSubmit={handleSubmit}>
              <ItemNameInput />
              <ItemPriceInput />
              <ItemDescTextArea />
              <ForAuctionCheckBox checked={checked} setChecked={setChecked}/>
              { checked ? <React.Fragment>
                <StartPriceInput/>
                <MinimalBidInput/>
              </React.Fragment> : null}
              <S.FormButton type="submit" disabled={submitting || pristine}>
                Update Item
              </S.FormButton>
            </S.FormWrapper>
          )}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    updatingItem: selectors.updatingItemSelector(state),
    item: selectors.detailedItemSelector(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateItem: (id: string, item: any) => dispatch(ac.updateItemRequest(id, item)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(UpdateItemForm));
