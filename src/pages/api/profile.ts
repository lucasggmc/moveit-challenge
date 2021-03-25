import React from 'react';
// import 'isomorphic-fetch';

import { VercelRequest, VercelResponse } from '@vercel/node';

export default (request: VercelRequest, response: VercelResponse) => {
    const { username } = request.body;   

    return response.json(
        getInitialProps(username)
    );
    // return response.json({message: `Hello ${email}` });
}

export const getInitialProps: any = async(username) => {

    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()
    console.log('teste', data)

    return { username: data.login, profileIMG: data.avatar_url }
}