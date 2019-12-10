import React from 'react';
import { Avatar, Empty, List, Typography } from 'antd';
import ListTitle from '../../../../shared/ListTitle';
import { NavLink } from 'react-router-dom';
import * as selectors from "../../../../../store/auth/selectors";
import { connect } from "react-redux";
const { Text } = Typography;

const ListItem = ({ items, title, noItemsText, loggedUserId }: any) => {
  return (
    <List
      header={<ListTitle title={title} />}
      itemLayout="horizontal"
      locale={{
        emptyText: (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span>{noItemsText}</span>} />
        ),
      }}
      dataSource={items}
      renderItem={(item: any) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar size="large" src={'http://localhost:3030/' + item.itemImage}/>}
            title={
              <React.Fragment>
                <NavLink to={`/item/${item._id}`}>{item.name}</NavLink>
                { loggedUserId === item.userId && <Text code>Your item</Text>}
              </React.Fragment>
            }
            description={<span>{item.description}</span>}
          />
        </List.Item>
      )}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    loggedUserId: selectors.userIdSelector(state),
  };
};

export default connect(
  mapStateToProps,
)(ListItem);
