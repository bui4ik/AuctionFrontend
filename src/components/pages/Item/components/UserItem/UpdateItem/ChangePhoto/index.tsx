import React, { useState } from 'react';
import * as S from '../../../../../AddItem/AddItemForm/styles';
import ItemImageFile from '../../../../../AddItem/AddItemForm/ItemImageFile';
import * as ac from '../../../../../../../store/item/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const ChangePhoto = ({ setErrors, match, updateItemImage }: any) => {
  const [image, setImage]: any = useState('');

  const fileSelectHandler = (event: any) => {
    setImage(event.target.files[0]);
  };

  const onItemImageUpdate = () => {
    if (!image) {
      return setErrors(['No photo chosen']);
    }
    updateItemImage(match.params.id, image);
  };

  return (
    <S.ChangePhotoContainer>
      <ItemImageFile fileSelectHandler={fileSelectHandler} />
      <S.FormButton onClick={onItemImageUpdate}>Change photo</S.FormButton>
    </S.ChangePhotoContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateItemImage: (id: string, image: any) => dispatch(ac.updateItemImageRequest(id, image)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(ChangePhoto));
