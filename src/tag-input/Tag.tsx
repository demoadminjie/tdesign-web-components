import { Component,tag } from 'omi';

interface TagProps {
  text: string;
  onClose: () => void;
}

@tag('t-tag')
export default class Tag extends Component<TagProps> {
  static css = `
    .tag {
      margin: 1px var(--td-comp-margin-xs) 1px 0;
    }
  `;

  render(props: TagProps) {
    return (
      <div class="tag t-tag t-tag--default t-tag--dark t-size-s">
        <span>{props.text}</span>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          class="t-icon t-icon-close t-tag__icon-close"
          onClick={props.onClose}
        >
          <path
            fill="currentColor"
            d="M7.05 5.64L12 10.59l4.95-4.95 1.41 1.41L13.41 12l4.95 4.95-1.41 1.41L12 13.41l-4.95 4.95-1.41-1.41L10.59 12 5.64 7.05l1.41-1.41z"
          ></path>
        </svg>
      </div>
    );
  }
}
