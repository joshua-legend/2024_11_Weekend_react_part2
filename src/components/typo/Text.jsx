const Text = ({ color, name }) => {
  return (
    <span style={{ fontSize: "20px", color: color || "black" }}>
      {name || "Guest"}
    </span>
  );
};

export default Text;
