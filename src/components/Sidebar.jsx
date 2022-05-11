import React from 'react'
import { ListGroup } from 'react-bootstrap';

function Sidebar() {
    const rooms = ["first room", "second room", "third room"];
    return (
        <>
            <h2>Available rooms</h2>
            <ListGroup>
                {rooms.map((room, idx) => (
                    <ListGroup.Item key={idx}>{idx}</ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
}

export default Sidebar
