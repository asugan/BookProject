import React, { useState } from "react";

const Postpage = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.first.value,
      authorId: event.target.last.value,
      content: event.target.content.value,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/post";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);

    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };

  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />

        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />

        <label htmlFor="last">Last Name</label>
        <textarea id="last" name="content" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Postpage;
