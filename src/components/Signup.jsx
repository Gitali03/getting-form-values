export default function Signup() {
  return (
    <form>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started🚀</p>
      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>
      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
          />
        </div>
      </div>
      <hr />


      <div className="control-row">
        <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name"/>
        </div>
        <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name"/>
        </div>
      </div>
    </form>
  );
}
