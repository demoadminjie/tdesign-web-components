import { css, globalCSS } from 'omi';

// 为了做主题切换
import styles from '../../_common/style/web/components/tag-input/_index.less';
import inputStyles from '../../_common/style/web/components/input/_index.less';
import tagStyles from '../../_common/style/web/components/tag/_index.less';

export const styleSheet = css`
  ${styles}
  ${inputStyles}
  ${tagStyles}
`;

globalCSS(styleSheet);
