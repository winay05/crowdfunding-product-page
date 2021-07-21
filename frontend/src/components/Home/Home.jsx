import Navigation from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";
import "./Home.css";
import data from "../../data/data";
import { Component } from "react";

const navLinks = [
  { name: "About" },
  {
    name: "Discover",
  },
  {
    name: "Get Started",
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      raisedMoney: data[0].raisedMoney,
      backers: data[0].backers,
      products: data[0].products,
      bookmarked: data[0].bookmarked,
    };
  }
  bookmark = () => {
    this.setState({ bookmarked: !this.state.bookmarked });
  };

  calcUpdatedProduct = (product) => {
    let newProducts = [
      { ...product, leftStock: product?.leftStock * 1 - 1 },
      ...this.state.products.filter((el) => el.name !== product?.name),
    ];

    return newProducts;
  };

  submitPledge = (val, product) => {
    if (product) {
      this.setState((state) => {
        return {
          raisedMoney: state.raisedMoney * 1 + val * 1,
          products: this.calcUpdatedProduct(product),
        };
      });
    }
    this.setState((state) => {
      return {
        backers: state.backers * 1 + 1,
      };
    });
  };

  render() {
    return (
      <>
        <div className="header">
          <Navigation className="navbar" navLinks={navLinks} />
        </div>

        <Dashboard
          bookmark={this.bookmark}
          submitPledge={this.submitPledge}
          raisedMoney={this.state.raisedMoney}
          backers={this.state.backers}
          bookmarked={this.state.bookmarked}
          data={data[0]}
          products={this.state.products}
        />
      </>
    );
  }
}
export default Home;
