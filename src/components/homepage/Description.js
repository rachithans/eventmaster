import React from "react";
import { Card } from "react-bootstrap";

function Description(){
    return(
        <>
            <Card  className="mt-4" text="light" bg="dark"style={{ height: '50vh' }}>
                <Card.Body >
                    <Card.Title><h3>Welcome to EventMaster</h3></Card.Title>
                    <Card.Subtitle className="mb-2 text-warning">The new way to book events</Card.Subtitle>
                    {/* Text taken from lorem ipsum */}
                    <Card.Text className="pt-3 fs-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac sapien accumsan, tincidunt sem a, tincidunt mi. Cras tristique odio commodo lacus bibendum finibus. Curabitur rhoncus ut felis a semper. Aliquam rutrum mattis ante a ultrices. Fusce porta aliquam libero at blandit. Ut sapien risus, efficitur vitae dolor eu, aliquam rutrum magna. 
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Description;