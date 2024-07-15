import 'tdesign-web-components/input';
import 'tdesign-web-components/space';

import { Component } from 'omi';

export default class InputBase extends Component {
  value1 = '';

  value2 = 'Welcome to TDesign';

  render() {
    return (
      <t-space direction="vertical" style={{ width: 500 }}>
        <t-input
          placeholder="请输入内容（无默认值）"
          onChange={(value) => {
            this.value1 = value;
            console.log(value);
          }}
        />
        <t-input
          value={this.value2}
          placeholder="请输入内容（无边框）"
          onChange={(value) => {
            console.log(value);
            this.value2 = value;
          }}
          onEnter={(value) => {
            console.log(value);
          }}
          borderless={true}
        />
      </t-space>
    );
  }
}
