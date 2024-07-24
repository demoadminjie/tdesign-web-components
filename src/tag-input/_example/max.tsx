import { Component } from 'omi';

import '../index';
// import '../../message';

export default class TagInputLimit extends Component {
  tags = [];

  render() {
    let that = this;

    const onEnter = (value, { inputValue }) => {
      that.tags = value;
      that.update();
      if (value.length >= 3 && inputValue) {
        //待message组件作者完善MessagePlugin
        alert('最多只能输入 3 个标签!');
        // MessagePlugin.warning('最多只能输入 3 个标签!');
      }
    };

    const onChange = (value, { context }) => {
      that.tags = value;
      that.update();
    };

    return (
      <div style={{ width: '100%' }}>
        <t-tag-input
          value={this.tags}
          placeholder="最多只能输入 3 个标签"
          max={3}
          onEnter={onEnter}
          onChange={onChange}
        />
      </div>
    );
  }
}
