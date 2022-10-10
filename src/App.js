import Wrapper from "./components/UI/Wrapper/Wrapper";
import styles from "./App.css";
import ThankYou from "./components/Thank You Component/ThankYou";
import star from "./images/icon-star.svg";
import Button from "./components/UI/Button/Button";
import Rating from "./components/Rating/Rating";
import { useState } from "react";

function App() {
  const [rating, setRating] = useState("");
  const [thankYouCard, setThankYourCard] = useState(false);
  const [formSubmition, setFormSubmition] = useState(true);
  const [submitionValidation, setSubmitionValidation] = useState(false);

  const selectedRating = (val) => {
    setRating(val);
    setSubmitionValidation(false);
  };

  const sumitHandler = (e) => {
    e.preventDefault();
    if (rating === "") {
      setSubmitionValidation(true);
      return;
    }
    setThankYourCard(true);
    setFormSubmition(false);
  };
  return (
    <>
      {submitionValidation && <section>Please select a rating</section>}
      <Wrapper>
        {formSubmition && (
          <form onSubmit={sumitHandler}>
            <div className={styles.star}>
              <img src={star} alt="star" />
            </div>
            <h1>How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <Rating onSelection={selectedRating} onActive={rating} />
            <Button>SUBMIT</Button>
          </form>
        )}
        {thankYouCard && <ThankYou value={rating} />}
      </Wrapper>
    </>
  );
}

export default App;
