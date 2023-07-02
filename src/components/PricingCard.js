import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

const PricingCard = () => {
  return(
    <div className="pricing">
      <div className="card-pricing">
        <div className="card">
          <h3>Basic</h3>
          <span className="bar"></span>
          <p className="btc">$100</p>
          <p> - 3Days -</p>
          <p> - 5Pages -</p>
          <p> - featured -</p>
          <p> - Responsive Design -</p>
          <Link to="/contact" className="btn">purchase now</Link>
        </div>
        <div className="card">
          <h3>Basic</h3>
          <span className="bar"></span>
          <p className="btc">$100</p>
          <p> - 3Days -</p>
          <p> - 5Pages -</p>
          <p> - featured -</p>
          <p> - Responsive Design -</p>
          <Link to="/contact" className="btn">purchase now</Link>
        </div>
        <div className="card">
          <h3>Basic</h3>
          <span className="bar"></span>
          <p className="btc">$300</p>
          <p> - 3Days -</p>
          <p> - 5Pages -</p>
          <p> - featured -</p>
          <p> - Responsive Design -</p>
          <Link to="/contact" className="btn">purchase now</Link>
        </div>
      </div>
    </div>

  )
};

export default PricingCard;
