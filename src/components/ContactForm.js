import { useState } from "react";
import PhoneInput from "react-phone-input-2";

function ContactForm({}) {
  const [formData, setFormData] = useState({
    phone: "",
    contactPhone: "",
    email: "",
    name: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
    cardHolder:"",
    cardNumber:"",
  });

  const handleInputChange = (e, inputName = null) => {
    if (inputName) {
      setFormData({ ...formData, [inputName]: e });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="form-section">
      <h2>Registration & Booking at GoStudent</h2>
      <h6>The leading platform for online tutoring</h6>
      <label>Login Phone Number</label>
      <PhoneInput
        country="eg"
        name="phone"
        value={formData.phone}
        onChange={(value) => handleInputChange(value, "phone")}
        inputStyle={inputStyle}
        required
      />

<label>Contact Phone Number</label>
      <PhoneInput
        country="us"
        name="contactPhone"
        value={formData.contactPhone}
        onChange={(value) => handleInputChange(value, "contactPhone")}
        inputStyle={inputStyle}
        required
      />

      <label>Contact Email Address</label>
      <input
        type="email"
        name="email"
        placeholder=""
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <label>Contact Name</label>
      <input
        type="text"
        name="name"
        placeholder=""
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <label>Billing Address</label>

      <div>
        <div className="address-container">
          <input
            type="text"
            name="address"
            placeholder="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <input type="text" placeholder="Nr" style={{ width: "20%" }} />
        </div>
        <div className="address-container">
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            required
          />

          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Country
            </option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
      </div>

      <select name="sessions" required>
        <option value="8 Sessions">8 Sessions</option>
        <option value="12 Sessions">12 Sessions</option>
        <option value="16 Sessions">16 Sessions</option>
      </select>
      <label>Select Payment Method</label>
      <div className="payment-method">
        <div className="payment">
          <input type="radio" name="payment" value="SEPA" required />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcdXOSU-Gfe0LODwZuKQiPAyVyhzMXU5x5w&s"
            alt="SEPA"
            width={50}
            style={{ margin: "10px 10px 0 10px" }}
          />
        </div>
        <hr />
        <div className="payment">
          <input type="radio" name="payment" value="VISA" required />
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/020/336/392/small/visa-logo-visa-icon-free-free-vector.jpg"
            alt="Visa"
            width={40}
            style={{ margin: "5px 5px 0 0" }}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbVLJSLXBFuMkPep4EnIVzSunBaSrZaeYkg&s"
            alt="SEPA"
            width={30}
            style={{ margin: "5px 5px 0 0" }}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy4TibK0U4B2NOJw5BN1LKoaRvEnmCheGDfYIdIqvjXrb4Nd9ZlLUxpg-HZXl87wJuCf0&usqp=CAU"
            alt="Visa"
            width={30}
            style={{ margin: "5px 5px 0 0" }}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32YdzkAVLX4cTAEkVMhpRieY_fWGf59VMRw&s"
            alt="Visa"
            width={22}
            style={{ margin: "5px 5px 0 0" }}
          />
        </div>
        <input
            type="text"
            name="cardHolder"
            placeholder="Card Holder"
            value={formData.address}
            onChange={handleInputChange}
            required
            style={{width: '90%',margin:'10px'}}
          />
           <input
            type="text"
            name="cardNambur"
            placeholder="Card Nambur"
            value={formData.address}
            onChange={handleInputChange}
            required
            style={{width: '90%',margin:'10px'}}
          />
         </div>
    </div>
  );
}

const inputStyle = {
  height: "10%",
  width: "100%",
  backgroundColor: " #e3e3e3",
  border: "1px solid #ddd",
  color: "#555",
};

export default ContactForm;
