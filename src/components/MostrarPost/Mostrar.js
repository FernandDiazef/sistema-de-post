import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { PostContext } from '../PostContext/Context';
import './style.css'

const MostrarPost = ({ pub }) => {
    const { Likes, DeleteItem } = useContext(PostContext);

    return (
        <div className='container mt-5 mb-5'>
            <Card className='shadow border border-dark'>
                <Card.Body className='bg-warning-subtle fs-5'>{pub.text}</Card.Body>
                <Card.Footer
                    className='d-flex justify-content-center bg-dark bg-gradient'>
                    <Button type='button' className={`bg-transparent border-0 hover`} onClick={() => Likes(pub.id)}>
                    {
                    pub.isCheck === false ? 
                    <i className={`bi bi-heart checkDefault hover fs-4 `}></i>
                    :
                    <i className={`bi bi-heartbreak-fill checkActive hover2 fs-4`}>
                        {pub.num}
                    </i>}
                    </Button>
                    <Button className={`bg-transparent border-0`} >
                        <i className="fs-4 bi bi-emoji-kiss hoverDelete" onClick={() => DeleteItem(pub.id)}></i>
                    </Button>

                    {/* <span className='fs-3'>{pub.num}</span> */}
                </Card.Footer>
            </Card>
        </div >
    );
}

export { MostrarPost };