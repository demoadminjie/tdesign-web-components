import { Component } from 'omi';

import '../index';
export default class TagInputAuto extends Component {
  tags = ['Vue', 'React'];

  render() {
    let that = this;

    const onChange = (val, context) => {
      that.tags = val;
      that.update();
    };

    return (
      <div style={{ width: '100%' }}>
        <t-tag-input value={this.tags} onChange={onChange} autoWidth clearable />
      </div>
    );
  }
}
