import './Tag';

import { Component, tag } from 'omi';

import { StyledProps } from '../common';
import { TagInputValue, TdTagInputProps } from './type';

export interface TagInputProps extends TdTagInputProps, StyledProps {}

@tag('t-tag-input')
export default class TagInput extends Component<TagInputProps> {
  static css = `
    /* Add your custom styles here */
  `;

  static defaultProps = {
    placeholder: '请输入',
  };

  isFocused = false;

  inputValue: string = '';

  value: TagInputValue = [];

  label = this.props.label || '';

  static get properties() {
    return {
      value: Array,
    };
  }

  addTag(value: string) {
    this.value.push(value);
    // this.props?.onChange &&
    //   this.props?.onChange(this.value, {
    //     trigger: 'enter',
    //     index: this.value.length - 1,
    //     item: value,
    //   });
    this.fire('change', this.value);
    this.update();
  }

  removeTag(index: number) {
    this.value.splice(index, 1);
    this.fire('change', this.value);
    this.update();
  }

  onInputChange = (e: Event) => {
    this.inputValue = (e.target as HTMLInputElement).value;
  };

  onInputEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      this.addTag(this.inputValue);
      this.inputValue = '';
      this.update();
    }
  };

  onTagRemove = (index: number) => {
    this.removeTag(index);
  };

  onInputPaste = (e: ClipboardEvent) => {
    this.props.onPaste && this.props.onPaste(e);
  };

  render(props: TagInputProps) {
    this.value = props.value || props.defaultValue || this.value;
    return (
      <div class="t-input__wrap t-tag-input">
        <div class="t-input t-input--prefix">
          {this.label && <div class="t-tag-input__prefix">{this.label}</div>}
          {console.log(
            'value',
            this.value,
            'props.value',
            props.value,
            'props.defaultValue',
            props.defaultValue,
            'this.value',
            this.value,
          )}
          {(props.value || this.value).map((tag, index) => (
            <t-tag text={tag} onClose={() => this.onTagRemove(index)} />
          ))}
          <input
            class="t-input__inner"
            type="text"
            value={this.inputValue}
            onInput={this.onInputChange}
            onKeyPress={this.onInputEnter}
            onPaste={this.onInputPaste}
            placeholder={this.value.length === 0 && props.placeholder}
          />
        </div>
      </div>
    );
  }
}
