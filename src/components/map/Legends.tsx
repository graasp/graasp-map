interface LegendProps {
  title: string;
  color: string;
}
type Props = {
  legends: LegendProps[];
};
const Legends = ({ legends }: Props): JSX.Element => (
  <div className="legend">
    {legends.map(({ title, color }: LegendProps) => (
      <div key={title} className="legend-item d-flex">
        <div className="legend-icon" style={{ backgroundColor: color }} />
        {title}
      </div>
    ))}
  </div>
);

export default Legends;
