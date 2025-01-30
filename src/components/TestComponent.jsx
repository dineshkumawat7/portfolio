import React from "react";

const TestComponent = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello, React!</h1>
      <p style={styles.paragraph}>
        This is a simple test component to check if everything is working fine.
      </p>
      <button style={styles.button} onClick={() => alert("Button clicked!")}>
        Click Me
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f8ff",
  },
  heading: {
    color: "#333",
    fontSize: "2rem",
  },
  paragraph: {
    color: "#555",
    fontSize: "1rem",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default TestComponent;
