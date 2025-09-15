import React from 'react';

export const Footer = () => {
  const footerStyle = {
    marginTop: "auto",
    width: "100%",
    backgroundColor: "#212529",
    color: "white",
    textAlign: "center",
    padding: "10px 0"
  };

  return (
    <footer style={footerStyle}>
      <p>CopyRight &copy; MytodosList.com</p>
    </footer>
  );
};

export default Footer;