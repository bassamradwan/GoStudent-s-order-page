import { useContext, useState } from "react";
import "react-phone-input-2/lib/style.css";
import "./App.css";
import { LanguageContext } from "./context/LanguageContext";
import Header from "./components/header";
import ContactForm from "./components/ContactForm";
import SubscriptionOptions from "./components/SubscriptionOptions";
import OrderOverview from "./components/orderOverview";



function App() {
  const [selectedSubscription, setSelectedSubscription] = useState("6 Months");
  const [price, setPrice] = useState(28.4);
  const [discount, setDiscount] = useState(4);
  const { direction } = useContext(LanguageContext);

  const subscriptions = {
    "6 Months": { price: 29.6, discount: 4 },
    "9 Months": { price: 40.0, discount: 6 },
    "12 Months": { price: 50.0, discount: 8 },
    "18 Months": { price: 60.0, discount: 10 },
    "24 Months": { price: 70.0, discount: 12 },
    "36 Months": { price: 80.0, discount: 14 },
  };

  const handleSubscriptionChange = (key) => {
    setSelectedSubscription(key);
    const { price, discount } = subscriptions[key];
    setPrice(price);
    setDiscount(discount);
  };

  return (
    <div className="app-container" style={{ direction: direction }}>
      <Header />
      <div className="form-container">
        <form>
          <ContactForm 
          />
          <div className="order-overview">
          <h3>Order Overview</h3>
          <SubscriptionOptions
            subscriptions={subscriptions}
            selectedSubscription={selectedSubscription}
            onChange={handleSubscriptionChange}
          />
          <OrderOverview
            selectedSubscription={selectedSubscription}
            price={price}
            discount={discount}
          />
          <button type="submit" className="order-button" >Order Now</button>
          </div>
        
        </form>
      </div>
    </div>
  );
}

export default App;
