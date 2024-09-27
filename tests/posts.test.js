const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const { dbConnection } = require('../config/config');
const app = require('../index'); 
const Post = require('../models/Post'); 

beforeAll(async () => {
    await dbConnection();
});

afterAll(async () => {
    await Post.deleteMany({});
    await mongoose.connection.close(); // Cierra la conexión de Mongoose
});

describe('POST /create', () => {
    it('Should create a new post', async () => {
        const newPost = {
            title: 'Test post',
            body: 'This is a test post'
        };

        const response = await request(app)
            .post('/posts/create')
            .send(newPost); 

        
        expect(response.statusCode).toBe(201);

        expect(response.body.title).toBe(newPost.title);
        expect(response.body.body).toBe(newPost.body);
    });
});
