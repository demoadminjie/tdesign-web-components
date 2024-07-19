import { Component } from 'omi';

import '../index';
import '../../space';

export default class TagInputTheme extends Component {
  tags = ['Vue', 'React', 'Miniprogram'];

  render() {
    let that = this;

    const setTags = (value, { inputValue }) => {
      that.tags = value;
      that.update();
    };

    return (
      <t-space direction="vertical" style={{ width: '80%' }}>
        <t-tag-input value={this.tags} onChange={setTags} tagProps={{ theme: 'primary' }} />
        <t-tag-input value={this.tags} onChange={setTags} tagProps={{ theme: 'success' }} />
        <t-tag-input value={this.tags} onChange={setTags} tagProps={{ theme: 'warning' }} />
        <t-tag-input value={this.tags} onChange={setTags} tagProps={{ theme: 'danger' }} />
      </t-space>
    );
  }
}
