function OrderOverview({ selectedSubscription, price, discount }) {
  const finalPrice = (price * (1 - discount / 100)).toFixed(2);

  return (
    <div className="price-details">
      <div className="price-row">
        <span>NUMBER OF SESSIONS P.M.</span>
        <span style={{ color: "#2e2e2e" }}>
          {selectedSubscription.split(" ")[0]}
        </span>
      </div>
      <div class="price-row">
        <span class="label">REGULAR PRICE</span>
        <p class="price">
          <s>{price.toFixed(2)}€</s>
        </p>
      </div>

      <div className="price-row">
        <span>Your Price</span>
        <span style={{ color: "#2e2e2e" }}>{finalPrice}€</span>
      </div>
      <div className="price-row">
        <span style={{ color: "green" }}>Discount {discount} %</span>
        <span style={{ color: "green", fontSize: "18px" }}>
          {((price * discount) / 100).toFixed(2)}€
        </span>
      </div>
      <hr />
      <div className="price-row">
        <span>Setup Fee</span>
        <span style={{ color: "#0072ff", fontSize: "18px" }}>0.00€</span>
      </div>
      <div className="price-row">
        <span>Total</span>
        <span style={{ color: "#0072ff", fontSize: "18px" }}>
          {finalPrice}€
        </span>
      </div>
      <div className="terms">
        <label>
          <input type="checkbox" />I accept the{" "}
          <a href="#">Terms & Conditions</a> and understand my{" "}
          <a href="#">right of withdrawal</a>.
        </label>
      </div>
    </div>
  );
}

export default OrderOverview;
