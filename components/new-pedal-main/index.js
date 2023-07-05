export default function PedalInputMain(props) {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
}
