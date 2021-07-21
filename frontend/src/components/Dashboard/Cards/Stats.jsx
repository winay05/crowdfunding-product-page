const Stats = ({ values }) => (
  <div className="row">
    {values.map((el, idx) => (
      <>
        <div className="col-12 col-sm-3">
          <h4>{el.stat}</h4>
          <p>{el.text}</p>
        </div>
        {idx < values.length - 1 && <div className="divider mb-2" />}
      </>
    ))}
  </div>
);
export default Stats;
