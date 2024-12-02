import React from 'react';
import Script from 'next/script';

const Tableau = () => {
  return (
    <div className='flex flex-wrap'>
      {/* Load the Tableau Embedding API v3 as a module */}
      <Script
        type="module"
        src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"
        strategy="beforeInteractive"
      />

      {/* Embed the Tableau visualization using <tableau-viz> */}
      <tableau-viz
        id="tableauViz"
        src="https://public.tableau.com/views/TotalSalesFINAL/Sheet3?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
        hide-tabs
        style={{ width: '50%', height: '800px' }} // Ensure it has proper dimensions
      ></tableau-viz>

      {/* Load the Tableau Embedding API v3 as a module */}
      <Script
        type="module"
        src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"
        strategy="beforeInteractive"
      />

      {/* Embed the Tableau visualization using <tableau-viz> */}
      <tableau-viz
        id="tableauViz"
        src="https://public.tableau.com/views/TATAOrderbyMonth/Sheet1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
        hide-tabs
        style={{ width: '50%', height: '800px' }} // Ensure it has proper dimensions
      ></tableau-viz>
    </div>
  );
};

export default Tableau;