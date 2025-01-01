'use server'

import PostModel from '../models/postModel.js';
import connectDB from '@/config/database.js';

// this function gets all the posts from the database
export async function getPosts(){
    //try to get it
    try {
        await connectDB(); //connect to the database
        const posts = await PostModel.find({}); //find all the posts and store it in the posts variable
        if (!posts.length) { //if there are no posts, return the string "no posts found"
            return { msg: 'No posts found' };
        } 
        return { posts };
    } catch (error) { //print the error if it fails
        return { errMsg: error.message }
    }
}

export default getPosts;