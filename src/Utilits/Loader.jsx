import React, { useState } from 'react'
import HashLoader from "react-spinners/HashLoader";

function Loader() {
  let [loading, setLoading] = useState(true);

  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <>
      <div className="sweet-loading">
        <HashLoader className='loader'
          color='#ffff'
          loading={loading} cssOverride={override}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  )
}

export default Loader