import { Component } from 'omi';

import '../index';
import '../../space';
import '../../popup';

export default class TagInputDiy extends Component {
  tags = ['StudentA', 'StudentB', 'StudentC'];

  render() {
    let that = this;

    const setTags = (value, { inputValue }) => {
      that.tags = value;
      that.update();
    };

    return (
      <t-space direction="vertical" style={{ width: '80%' }}>
        <t-tag-input
          value={this.tags}
          onChange={setTags}
          clearable
          minCollapsedNum={2}
          tag={({ value }) => (
            <div style={{ display: 'flex' }}>
              <img
                src="https://tdesign.gtimg.com/site/avatar.jpg"
                style={{ maxWidth: '18px', maxHeight: '18px', borderRadius: '50%', verticalAlign: 'text-top' }}
              />
              {value}
            </div>
          )}
        ></t-tag-input>

        <t-tag-input
          value={this.tags}
          onChange={setTags}
          valueDisplay={({ value, onClose }) =>
            value.map((item, index) => (
              <t-tag key={item} closable style={{ marginRight: '4px' }} onClose={() => onClose(index)}>
                <div style={{ display: 'flex' }}>
                  <img
                    src="https://tdesign.gtimg.com/site/avatar.jpg"
                    style={{ maxWidth: '18px', maxHeight: '18px', borderRadius: '50%', verticalAlign: 'text-top' }}
                  />
                  {item}
                </div>
              </t-tag>
            ))
          }
          clearable
        ></t-tag-input>
      </t-space>
    );
  }
}
