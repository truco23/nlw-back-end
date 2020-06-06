import express from 'express';
import path from 'path';
import { variables } from '../helpers/variables';

export const staticConfigUpload = express.static(path.resolve(__dirname, '..', '..', `${variables.urlUpload}`))


