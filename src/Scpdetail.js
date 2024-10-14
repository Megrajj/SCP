import React from 'react';
import { useParams } from 'react-router-dom'; // Import hook to access URL parameters
import { scp as scpData } from './scp'; // Import the SCP data

function Scpdetail() {
    const { item } = useParams(); // Get the 'item' from the URL parameters

    // Find the SCP item that matches the given Item name
    const scpItem = scpData.find(itemData => itemData.Item === item);

    // If no item is found, display a not found message
    if (!scpItem) {
        return <div>Item not found</div>;
    }

    // Render the details of the SCP item
    return (
        <div className="scp-detail">
            <h2>{scpItem.Item}</h2> {/* Display the SCP Item name */}
            <h3>Object Class: {scpItem.Object}</h3> {/* Display Object Class */}
            {scpItem.Image && ( // Conditional rendering for image
                <div className="image-container"> {/* Center the image */}
                    <img 
                        src={scpItem.Image} 
                        alt={`Image for ${scpItem.Item}`} 
                        className="scp-image" // Class for responsive image
                    />
                </div>
            )}
            <h3>Procedures:</h3>
            <p dangerouslySetInnerHTML={{ __html: scpItem.Procedures }} /> {/* Display Procedures */}
            <h3>Description:</h3>
            <p dangerouslySetInnerHTML={{ __html: scpItem.Description }} /> {/* Display Description */}
            {scpItem.Reference && ( // Conditional rendering for Reference section
                <>
                    <h3>Reference:</h3>
                    <p dangerouslySetInnerHTML={{ __html: scpItem.Reference }} /> {/* Display Reference */}
                </>
            )}
            {scpItem.Chronological && ( // Conditional rendering for Chronological section
                <>
                    <h3>Chronological:</h3>
                    <p dangerouslySetInnerHTML={{ __html: scpItem.Chronological }} /> {/* Display Chronological Records */}
                </>
            )}
            {scpItem.Additional && ( // Conditional rendering for Additional Info
                <>
                    <h3>Additional Information:</h3>
                    <p dangerouslySetInnerHTML={{ __html: scpItem.Additional }} /> {/* Display Additional Info */}
                </>
            )}
        </div>
    );
}

export default Scpdetail;
