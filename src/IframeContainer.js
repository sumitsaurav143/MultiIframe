// IframeContainer.js
import React, { useState } from 'react';

const IframeContainer = () => {
    //const [url, setUrl] = useState('https://sumitsinha152.blogspot.com/2020/09/philips-off-campus-freshers-recruitment.html');
    const [url, setUrl] = useState('');
    const numbersArray = Array.from({ length: 50 }, (_, index) => index + 1);
    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const openIframes = () => {
        // Render iframes for each URL
        return numbersArray.map((i) => (
            <>
                <h5><b>Frame-{i}</b></h5>
                <iframe
                    key={`iframe-${i}`}
                    src={url}
                    width="100%"
                    height="400"
                    style={{ margin: '10px', border: '1px solid #ccc' }}
                />
            </>
        ));
    };


    return (
        <div>
            <label>
                Enter URL:
                <input type="text" value={url} onChange={handleUrlChange} />
            </label>
            <button onClick={openIframes}>Open Iframes</button>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>{openIframes()}</div>
        </div>
    );
};

export default IframeContainer;
