import 'tdesign-web-components/button';
import 'tdesign-web-components/tooltip';
import 'tdesign-web-components/space';

export default function Cumstomize() {
  return (
    <t-space>
      <t-tooltip content="文字提示仅展示文本内容">
        <t-button theme="default">default</t-button>
      </t-tooltip>
      <t-tooltip content="文字提示仅展示文本内容" theme="primary">
        <t-button theme="primary">primary</t-button>
      </t-tooltip>
      <t-tooltip content="文字提示仅展示文本内容" theme="success">
        <t-button theme="success">success</t-button>
      </t-tooltip>
      <t-tooltip content="文字提示仅展示文本内容" theme="danger">
        <t-button theme="danger">danger</t-button>
      </t-tooltip>
      <t-tooltip content="文字提示仅展示文本内容" theme="warning">
        <t-button theme="warning">warning</t-button>
      </t-tooltip>
      <t-tooltip content="文字提示仅展示文本内容" theme="light">
        <t-button variant="outline">light</t-button>
      </t-tooltip>
    </t-space>
  );
}
