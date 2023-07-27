import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { PostContext } from '../PostContext/Context';
import './style.css';

const CreatePost = () => {
    const { textarea, CrearPost, GuardarPost } = useContext(PostContext);

    return (
        <>
            <Form className='container mt-4'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='fs-2'>¿Que piensas hoy?</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name="textarea" 
                        value={textarea}
                        className='ResizeTextarea'
                        onChange={(event) => CrearPost(event.target.value)} />
                </Form.Group>

                <Button onClick={GuardarPost} variant="dark">Enviar</Button>{''}
            </Form>
        </>

    );
}

export { CreatePost };