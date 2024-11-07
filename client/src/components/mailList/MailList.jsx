import "./mailList.css";
import emailjs from "emailjs-com";

const MailList = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kb4esgb",
        "template_9p06jff",
        e.target,
        "c6kbHOegJ4KPNM2C2"
      )
      .then((res) => {
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mail">
      <h1 className="mailTitle">Give Us Your FeedBack</h1>
      <span className="mailDesc">
        Send your queries to us and we will reach out to you.
      </span>
      <div className="mailInputContainer">
        <form onSubmit={onSubmit}>
          <input type="text" name="email" placeholder="Your Email" />
          <input type="text" name="content" placeholder="Your Query's if any" />
          <button type="submit">Click Me</button>
        </form>
      </div>
    </div>
  );
};

export default MailList;
