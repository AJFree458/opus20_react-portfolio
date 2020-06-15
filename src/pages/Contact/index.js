import React from "react";

const Contact =() => {
  return (
    <div>
      <main className="flex-shrink-0">
        <div className="container mt-5 p-3 border cardBg">
          <h2 className="border-bottom mb-3 pb-3 text-center font-weight-bold">Contact</h2>
          <form>
            <div className="form-group">
              <label for="formGroupExampleInput">Name</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Joe Poolhall" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="example@email.com" />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Contact;
