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

  constructor() {
    super();
    this.props = {
      value: [],
      ...this.props,
    };
  }

  static defaultProps = {
    placeholder: '请输入',
  };

  isFocused = false;

  inputValue: string = '';

  value: TagInputValue = [];

  addTag(value: string) {
    this.value.push(value);
    this.update();
  }

  removeTag(index: number) {
    this.value.splice(index, 1);
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

  render(props: TagInputProps) {
    return (
      <div class="t-input__wrap t-tag-input">
        <div class="t-input t-input--prefix">
          {this.value.map((tag, index) => (
            <t-tag text={tag} onClose={() => this.onTagRemove(index)} />
          ))}
          <input
            class="t-input__inner"
            type="text"
            value={this.inputValue}
            onInput={this.onInputChange}
            onKeyPress={this.onInputEnter}
            placeholder={this.value.length === 0 && props.placeholder}
          />
        </div>
      </div>
    );
  }
}
