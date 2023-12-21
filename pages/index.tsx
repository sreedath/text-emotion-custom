import React, { useEffect, useState } from "react";

const Index = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(to right, #5170FF, #FF66C4)",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        color: "black",
      }}
    >
      {/* {isBrowser && <About/>} */}
      <h1 style={{ color: "black", textDecoration: "underline" }}>
        For go to homepage
      </h1>
      <h3>
        Append <i>&quot;/emotion-detection&quot;</i>
      </h3>
      <h5>in the current working link</h5>
    </div>
  );
};

export default Index;
