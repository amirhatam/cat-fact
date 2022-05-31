import React from 'react'

export default function GoogleMap() {

    return (
        <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
        >
            <iframe
                src="https://maps.google.com/maps?width=1000&amp;height=700&amp;hl=en&amp;q=Paris%2C%20France+(Titre)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed"
                title="This is a unique title"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
            />
        </div>
    )
}
