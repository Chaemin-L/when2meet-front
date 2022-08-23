import React from 'react';
import { NavLink } from 'react-router-dom';

const menu = [
    {
        url: '',
        text: '나의 약속'
    },
    {
        url: 'profile',
        text: '내 정보'
    },
    {
        url: 'intro',
        text: '서비스 소개'
    },
];

function TabItem({ to, children }) {

    return (
        <NavLink to={to}>{ children }</NavLink>
    )
};

export default function TabList() {
    return (
        <div>
            {menu.map((item, index) => <TabItem key={index} to={item.url}>{item.text}</TabItem>)}
        </div>
    )
};