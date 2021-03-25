import React from 'react';
import Cookies from 'js-cookie';
// import 'isomorphic-fetch';
import { VercelRequest, VercelResponse } from '@vercel/node';


export default (request: VercelRequest, response: VercelResponse) => {
    const { username } = request.body; 

    getInitialProps(username).then(data => {
        return response.json(data);
    })
}

export const getInitialProps: any = async(username) => {

    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()  

    return { username: data.login, profileIMG: data.avatar_url, name: data.name }

}