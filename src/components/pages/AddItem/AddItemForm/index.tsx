import React, { useState } from 'react';
import { Form } from 'react-final-form';
import * as S from './styles';
import { addItemValidation } from '../../../../utils/validation';
import { withRouter } from 'react-router';
import * as selectors from '../../../../store/item/selectors';
import * as authSelectors from '../../../../store/auth/selectors';
import { addItemRequest, addAuctionItemRequest } from '../../../../store/item/actions';
import { connect } from 'react-redux';
import { createItem, createAuction } from "../../../../utils/addItem";
import { IAddItem } from "../../../../interfaces";
import ItemNameInput from './ItemNameInput';
import ItemPriceInput from './ItemPriceInput';
import ItemDescTextArea from './ItemDescTextArea';
import ItemImageFile from './ItemImageFile';
import ForAuctionCheckBox from "./ForAuctionCheckBox";
import StartPriceInput from "./StartPriceInput";
import MinimalBidInput from "./MinBidInput";
import AuctionDurationInput from "./AuctionDurationInput";


const AddItemForm = ({ history, addItem, loggedUserId, addAuctionItem }: any) => {
  const [errors, setErrors] = useState<string[]>([]);
  const [image, setImage] = useState('');
  const [checked, setChecked] = useState(false);

  const onSubmit = (values: IAddItem) => {
    if (errors.length > 0) setErrors([]);
    values.image = image;
    const isErrorsExists = addItemValidation(values);
    if (isErrorsExists) {
      const newErrors = Object.values(isErrorsExists).map((el: any) => el[0]);
      setErrors(newErrors);
      return;
    }
    const newItem = createItem(loggedUserId, values);
    if (values.startPrice && values.minBid && values.duration) {
      const newAuction = createAuction(loggedUserId, values);
      newItem.forAuction = true;
      return addAuctionItem(newItem, newAuction, history);
    }
    addItem(values, history);
    console.log(values)
  };
  const fileSelectHandler = (event: any) => {
    setImage(event.target.files[0]);
  };

  return (
    <React.Fragment>
      {errors &&
        errors.map((error: any) => (
          <S.ErrorMessage message={error} type="error" key={errors.indexOf(error)} />
        ))}
      <Form
        onSubmit={onSubmit}
        initialValues={{forAuction: false}}
        render={({ handleSubmit, submitting, pristine }) => (
          <S.FormWrapper onSubmit={handleSubmit}>
            <ItemNameInput />
            <ItemPriceInput />
            <ItemDescTextArea />
            <ForAuctionCheckBox checked={checked} setChecked={setChecked}/>
            <ItemImageFile fileSelectHandler={fileSelectHandler} />
            { checked ? <React.Fragment>
              <StartPriceInput/>
              <MinimalBidInput/>
              <AuctionDurationInput/>
            </React.Fragment> : null}
            <S.FormButton type="submit" disabled={submitting || pristine}>
              Submit
            </S.FormButton>
          </S.FormWrapper>
        )}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    creatingNewItem: selectors.isLoadingSelector(state),
    loggedUserId: authSelectors.userIdSelector(state)
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItem: (item: string, history: any) => dispatch(addItemRequest(item, history)),
    addAuctionItem: (newItem: any, newAuction: any, history: any) => dispatch(addAuctionItemRequest(newItem, newAuction, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(AddItemForm));
