import React from "react";
import * as S from "../../../../../AddItem/AddItemForm/styles";
import Loading from "../../../../../../shared/Loading";
import { Avatar } from "antd";
import * as selectors from "../../../../../../../store/item/selectors";
import { connect } from "react-redux";

const ItemImage = ({updatingItemImage, item: {itemImage}}: any) => (
  <S.ImageContainer>
    {updatingItemImage ? (
      <S.PhotoLoaderContainer>
        <Loading />
      </S.PhotoLoaderContainer>
    ) : (
      <div>
        {itemImage && (
          <Avatar shape="square" size={350} src={'http://localhost:3030/' + itemImage} />
        )}
      </div>
    )}
  </S.ImageContainer>
);

const mapStateToProps = (state: any) => {
  return {
    updatingItemImage: selectors.updatingItemImageSelector(state),
    item: selectors.detailedItemSelector(state),
  };
};

export default connect(
  mapStateToProps,
)(ItemImage);
