export default function DressShorten(props) {
  return (
    <label>
      {props.title}
      <select value={props.value} onChange={props.onChange}>
        <option value="0">0%</option>
        <option value="3">3%</option>
        <option value="4">4%</option>
        <option value="5">5%</option>
        <option value="6">6%</option>
      </select>
    </label>
  );
}
