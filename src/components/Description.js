import React, { useState, Fragment } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

const Description = () => {

    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <Button onClick={() => setOpen(!open)} aria-controls="description" aria-expanded={open}>What is this about</Button>
            <Collapse in={open}>
                <div id="description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </Collapse>
        </Fragment>
    );
}

export default Description;
