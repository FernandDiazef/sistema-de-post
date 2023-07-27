import React, { createContext, useState } from 'react';

const useLocalStorage = (itemName, incialValue) => {

    const localStorageItem = localStorage.getItem(itemName);

    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(incialValue));
        parsedItem = incialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = useState(parsedItem);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));

        setItem([...newItem])
    }

    return [item, saveItem];
}

const PostContext = createContext();

const PostProvider = ({ children }) => {

    const [textarea, setTextarea] = useState();
    const [publicaciones, setPublicaciones] = useState(JSON.parse(localStorage.getItem('patito-v1')) || []);
    //const [publicaciones, savePublicaciones] = useLocalStorage('patito-v1',[]);

    const CrearPost = (text) => {
        setTextarea(text);
    }
    const GuardarPost = () => {
        const id = Math.random().toString(36).slice(2, 7);
        setPublicaciones([...publicaciones, { id, text: textarea, isCheck: false, num: 0 }])

        localStorage.setItem('patito-v1', JSON.stringify([...publicaciones, { id, text: textarea, isCheck: false, num: 0 }]));

        // savePublicaciones([...publicaciones, {id,text: textarea, isCheck: false, num: 0}]);
    }

    const Likes = (id) => {
        const pub = [...publicaciones];
        const index = pub.findIndex(item => item.id === id);
        pub[index].isCheck = true;
        pub[index].num++;
        setPublicaciones([...pub])
        localStorage.setItem('patito-v1', JSON.stringify([...pub]));
        //savePublicaciones([...pub]);
    }

    const DeleteItem = (id) => {
        const pub = [...publicaciones];
        const index = pub.findIndex(item => item.id === id);
        pub.splice(index, 1);
        setPublicaciones([...pub]);
        localStorage.setItem('patito-v1', JSON.stringify([...pub]));
        // savePublicaciones(pub);
    }

    return (
        <PostContext.Provider value={{
            textarea,
            CrearPost,
            publicaciones,
            setPublicaciones,
            GuardarPost,
            Likes,
            DeleteItem,
        }}>
            {children}
        </PostContext.Provider>
    );
}

export { PostProvider, PostContext, useLocalStorage };