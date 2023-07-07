import React from 'react'
import MenuBox from './components/MenuBox';

const Ex06 = () => {

    /* 푸딩 메뉴판을 제작해보자! */

    const menuList = [
        {
            "name" : "카라멜 커스터드 푸딩", 
            "price" : 4000, 
            "content" : "고려시대에 원나라에서 목화씨를 훔쳐온 문익점 선생님을 아시나요?",
            "imgSrc" : "https://cdn.imweb.me/thumbnail/20230412/72ab39bf2c337.jpg"

        } , {
            "name" : "블루베리 푸딩", 
            "price" : 4300,
            "content" : "라즈베리 블루베리가 여름을 맞이하여 다시 돌아왔습니다~", 
            "imgSrc": "https://cdn.imweb.me/thumbnail/20230427/ff04ae058095e.jpg"
        }, {
            "name" : "라즈베리 푸딩", 
            "price" : 4300, 
            "content" : "라즈베리 블루베리가 여름을 맞이하여 다시 돌아왔습니다~", 
            "imgSrc" : "https://cdn.imweb.me/thumbnail/20230427/d2e739dd19f3c.jpg"
        }
    ]

    let name = menuList.map(item => <button key={item.name}>{item.name}</button>)
    console.log(name);
    let price = menuList.map(item => <button key={item.price}>{item.price}</button>)
    console.log(price);
    let content = menuList.map(item => <button key={item.content}>{item.content}</button>)
    console.log(content);
    

  return (
    <div>
        <h1>메뉴판</h1>
        {menuList}
        {menuList.map(item => <MenuBox list={item} key={item.imgSrc} />)}
        {menuList.map(item => <MenuBox list={item} key={item.name} />)}
        {menuList.map(item => <MenuBox list={item} key={item.price} />)}
        {menuList.map(item => <MenuBox list={item} key={item.content} />)}




    </div>
  );
};

export default Ex06

