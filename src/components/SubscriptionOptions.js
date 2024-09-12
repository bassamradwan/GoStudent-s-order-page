function SubscriptionOptions({ subscriptions, selectedSubscription, onChange }) {
    return (
      <div className="subscription-options">
        {Object.keys(subscriptions).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            className={selectedSubscription === key ? "selected" : ""}
          >
            {key}
          </button>
        ))}
      </div>
    );
  }
  
  export default SubscriptionOptions;
  