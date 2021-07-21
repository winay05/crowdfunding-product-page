import Stats from "./Stats";

const calcWidth = (active, total) => (active * 100) / total;

const StatsCard = ({
  raisedMoney,
  data: { daysLeft, targetMoney },
  backers,
}) => {
  const values = [
    {
      stat: `$${raisedMoney}`,
      text: `of $${targetMoney} backed`,
    },
    {
      stat: backers,
      text: "total backers",
    },
    {
      stat: daysLeft,
      text: "days left",
    },
  ];
  return (
    <div className="card" id="stats">
      <Stats values={values} />

      <div className="progress-bar mt-2">
        <div
          style={{
            width: `${calcWidth(raisedMoney, targetMoney)}%`,
          }}
          className="progress-bar progress-bar-inner"
        ></div>
      </div>
    </div>
  );
};
export default StatsCard;
