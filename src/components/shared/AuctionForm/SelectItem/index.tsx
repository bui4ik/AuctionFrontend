import React, { Component} from "react";
import { Form, Select } from "antd";
import * as selectors from "../../../../store/item/selectors";
import { connect } from "react-redux";
const { Option } = Select;

class SelectItem extends Component<any>{

  render(){
    const { getFieldDecorator, isFieldTouched, getFieldError } = this.props.form;
    const { items } = this.props;
    const itemError = isFieldTouched('item') && getFieldError('item');
    return (
      <Form.Item label='Auction item' validateStatus={ itemError ? 'error' : ''} help={itemError || ''}>
        {getFieldDecorator('item', {
          rules: [{required: true}],
        })(
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select an item"
            optionFilterProp="children"
            filterOption={(input, option: any) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {items.map((item: any) => <Option value={item._id} key={item._id}>{item.name}</Option>)}
          </Select>
        )}
      </Form.Item>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    items: selectors.notOnAuctionItemsSelector(state)
  };
};

export default connect(
  mapStateToProps,
)(SelectItem);
