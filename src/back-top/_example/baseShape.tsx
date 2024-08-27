import 'tdesign-web-components/space';
import 'tdesign-web-components/back-top';

import { Component } from 'omi';

export default class BackTop extends Component {
  render() {
    const style = {
      position: 'relative',
      insetInlineEnd: 0,
      insetBlockEnd: 0,
    };
    return (
      <t-space direction="vertical" size={32}>
        <t-space size={24}>
          <t-back-top
            style={style}
            visibleHeight={0}
            shape="circle"
            offset={['24px', '300px']}
            container={() => document}
          />
          <t-back-top style={style} visibleHeight={0} offset={['124px', '300px']} container={() => document} />
        </t-space>
        <t-space size={24}>
          <t-back-top
            style={style}
            visibleHeight={0}
            shape="circle"
            theme="primary"
            offset={['24px', '300px']}
            container={() => document}
          />
          <t-back-top
            style={style}
            visibleHeight={0}
            theme="primary"
            offset={['124px', '300px']}
            container={() => document}
          />
        </t-space>
        <t-space size={24}>
          <t-back-top
            style={style}
            visibleHeight={0}
            shape="circle"
            theme="dark"
            offset={['24px', '300px']}
            container={() => document}
          />
          <t-back-top
            style={style}
            visibleHeight={0}
            theme="dark"
            offset={['124px', '300px']}
            container={() => document}
          />
        </t-space>
      </t-space>
    );
  }
}
