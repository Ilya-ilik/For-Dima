import React from 'react'; //это строка пишется во всех файлах так как ссылается на сам реакт библиотеку
import './MyPosts.css' //в этой строке написан путь импорта настроек css,такой адресс значит что файл находиться в той же папки что и этот 
import PostOne from './PostOne/PostOne';//в это строке мы импортируем компонетну PostOne в этот файл 

// Ниже находится код компоненты MyPosts которая возвращает разметку JSX
const MyPosts = () => {
    return  <div className='content'> {/* return это ключевое слово с помощью которого происходит возврат разметки, content это класс css */}

    <div className='item-MyPosts'>
       <PostOne message='Hi, how are you?' likesCount='0'/>  {/* в этой строке находится наша компонента PostOne с содержащимся в ней пропсами*/}
    </div>

    </div>
} 

export default MyPosts; // эта строка экспортирует нашу компоненту MyPosts из этого файла 