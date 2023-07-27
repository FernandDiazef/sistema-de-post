import React, { useContext, useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { MostrarPost } from '../MostrarPost/Mostrar';
import { PostContext } from '../PostContext/Context';

const PaginationTable = () => {

    const { publicaciones } = useContext(PostContext);

    const [active, setActive] = useState(1)
    const [post, setPost] = useState([])

    //let active = 1;
    const limite = 3;

    useEffect(() => {
        cargarPostPage(active);
    }, [publicaciones])

    const limiteDePaginas = Math.ceil(publicaciones.length / limite);

    let items = [];

    for (let number = 1; number <= limiteDePaginas; number++) {
        items.push(
            <Pagination.Item onClick={() => cargarPostPage(number)} key={number} active={active === number}>
                {number}
            </Pagination.Item>,
        );
    }

    const cargarPostPage = (value) => {
        const publicacionesPagination = [];

        let start = (value - 1) * limite;
        let final = start + limite;
        for (let i = start; i <= final - 1; i++) {

            if (publicaciones[i] !== undefined) {
                publicacionesPagination.push(publicaciones[i]);
            }
        }

        setPost(publicacionesPagination)
        if(publicaciones === undefined){
            setActive()
        }
        setActive(value)
    }

    return (
        <>
            {post.map((element, index) => (
                <MostrarPost
                    key={index}
                    pub={element}
                />
            ))}
            <Pagination>{items}</Pagination>
        </>
    );
}

export { PaginationTable };