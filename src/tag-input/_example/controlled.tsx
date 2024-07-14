import 'tdesign-web-components/tag-input';

export default function TagInput() {
  let tags1 = ['Omi', 'Vue', 'React'];
  const tags2 = ['Omi', 'Vue', 'React'];
  const tags3 = ['Omi', 'Vue', 'React'];

  const onTagInputEnter = (value) => {
    console.log('tagInput', value);
  };

  const onChange = (value) => {
    console.log('value1', value);
    tags1 = value;
  };

  const onPaste = (e) => {
    console.log(e);
  };

  return (
    <div style={{ gap: 16, display: 'flex', flexDirection: 'column' }}>
      <t-tag-input value={tags1} onChange={onChange} onPaste={onPaste} onEnter={onTagInputEnter} placeholder="请输入" />
      {console.log('tags2', tags2)}
      <t-tag-input label="Controlled: " value={tags2} placeholder="请输入" />
      <t-tag-input defaultValue={tags3} label="UnControlled: " placeholder="请输入" />
    </div>
  );
}
