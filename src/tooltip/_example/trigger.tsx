import 'tdesign-web-components/button';
import 'tdesign-web-components/tooltip';
import 'tdesign-web-components/space';
import 'tdesign-web-components/input';

export default function Cumstomize() {
  return (
    <t-space>
      <t-tooltip content="文字提示仅展示文本内容">
        <t-button variant="outline">悬浮时触发（默认）</t-button>
      </t-tooltip>
      <t-tooltip content="文字提示仅展示文本内容" trigger="focus">
        <t-input placeholder="获得焦点时触发" />
      </t-tooltip>
      <t-tooltip content="文字提示仅展示文本内容" trigger="click">
        <t-button variant="outline">点击时触发</t-button>
      </t-tooltip>
      <t-tooltip content="文字提示仅展示文本内容" trigger="context-menu">
        <t-button variant="outline">右击时触发</t-button>
      </t-tooltip>
    </t-space>
  );
}
