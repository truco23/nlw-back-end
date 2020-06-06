import express from 'express';
import path from 'path';

export const urlUpload = '/uploads';
export const staticConfigUpload = express.static(path.resolve(__dirname, '..', '..', 'uploads'))


