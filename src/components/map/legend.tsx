type Props = {
  legends: any;
};
const Legend = ({ legends }: Props): JSX.Element => (
  <div className="legend">
    {legends.map(({ title, color }: any) => (
      <div key={title} className="legend-item d-flex">
        <div className="legend-icon" style={{ backgroundColor: color }} />
        {title}
      </div>
    ))}
  </div>
);

export default Legend;
