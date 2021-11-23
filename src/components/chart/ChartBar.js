import "./ChartBar.css";

const ChartBar = (props) => {
//   console.log(props.value);
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    // console.log(props.maxValue);
    barFillHeight = Math.round((100 * props.value) / props.maxValue) + "%";
    console.log(barFillHeight);
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
      </div>

      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
