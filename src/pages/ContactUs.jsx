import Navbar from "../components/Navbar/navbar";
import "./ContactUs.css"; // Import the CSS file

export default function ContactUs() {
  return (
    <body>
      <Navbar />
      <div className="container">
        <h1>We'd love to hear from you!</h1>
        <p>Don't hesitate to reach out for any queries or suggestions you want to share.</p>
        <div className="contact-box">
          <div className="contact-left">
            <h3>Send your request</h3>
            <form>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder="Your Full Name" />
                </div>

                <div className="input-group">
                  <label htmlFor="">Phone</label>
                  <input type="text" placeholder="Your Cell Phone number" />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder="name@example.com" />
                </div>

                <div className="input-group">
                  <label htmlFor="">Subject</label>
                  <input type="text" placeholder="Optional" />
                </div>
              </div>



              <label>Queries</label>
              <textarea rows={5} placeholder="Your Queries"></textarea>


              <button type="submit">Submit</button>


            </form>
          </div>
          <div className="contact-right">
            <h3>Reach Us</h3>
            <table>
              <tr>
                <td>Email</td>
                <td>corporate@adspro.co.in</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>91+ 9748978886 <br />91+ 9804758468</td>
              </tr>
              <tr>
                <td>Address</td>
                <td> 
                  <a href="https://maps.app.goo.gl/2SAE152sdawjxTS96">178, Canal St,Sreebhumi,Lake Town<br />
                South Dumdum<br />Kolkata 700048</a></td>
              </tr>
            </table>


          </div>

        </div>
      </div>
    </body>
  );
}
