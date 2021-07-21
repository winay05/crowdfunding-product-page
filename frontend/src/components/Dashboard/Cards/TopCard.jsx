import PledgeModal from "../../PledgeModal/PledgeModal";

const TopCard = (props) => (
  <div className="card" id="top-card">
    <img
      className="product-logo"
      src="logo-mastercraft.svg"
      alt="product logo"
    />
    <h3>{props?.data?.title}</h3>
    <p>{props?.data?.subtitle}</p>
    <div className="actions mt-3">
      <PledgeModal
        products={props.products}
        text="Back this project"
        submitPledge={props.submitPledge}
        raisedMoney={props.raisedMoney}
        backers={props.backers}
      />

      <button
        className="show-hover"
        id="bookmark"
        style={
          props.bookmarked
            ? { backgroundColor: "#f2f3f4", color: "darkcyan" }
            : {}
        }
        onClick={props.bookmark}
      >
        <img
          style={
            props.bookmarked
              ? { backgroundColor: "darkcyan" }
              : { backgroundColor: "inherit" }
          }
          src="bookmark.png"
          alt=""
        />
        <span id="bookmark-text">
          {props?.bookmarked === true ? "Bookmarked" : "Bookmark"}
        </span>
      </button>
    </div>
  </div>
);

export default TopCard;
