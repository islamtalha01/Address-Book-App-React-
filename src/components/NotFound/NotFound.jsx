import React from "react";
import inLineStyles from "../../inLineStyles";
const NotFound = () => {
  const {styles}=inLineStyles()
  return (
    <div
      className={styles.notFound}
    >
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
