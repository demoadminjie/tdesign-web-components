import { Component } from 'omi';

import '../index';
import '../../space';

export default class TagInputExcess extends Component {
  tags1 = ['Vue', 'React'];

  render() {
    let that = this;
    const onChange = (val, context) => {
      that.tags1 = val;
      that.update();
      console.log(val, context);
    };

    return (
      <t-space direction="vertical" style={{ width: '80%' }}>
        <t-tag-input
          value={this.tags1}
          onChange={onChange}
          clearable
          excessTagsDisplayType="scroll"
          // onEnter={onTagInputEnter}
          placeholder="请输入"
        />
        <t-tag-input
          value={this.tags1}
          onChange={onChange}
          clearable
          excessTagsDisplayType="break-line"
          // onEnter={onTagInputEnter}
          placeholder="请输入"
        />
      </t-space>
    );
  }
}
