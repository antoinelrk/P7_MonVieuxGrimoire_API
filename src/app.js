import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Database from './core/Database.js'
import Router from './core/Router.js'
import Model from './core/Model.js'
import Middleware from './core/Middleware.js'

dotenv.config()
const env = process.env

const webServer = express()
webServer.use(cors())
webServer.use(express.json())

const db = Database.connect({
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    host: env.DB_HOST,
    dbName: env.DB_NAME
})

// Middleware.initialize(webServer)
Router.initialize(webServer, env.APP_PORT)
Model.initialize(db)

const getDb = () => mongoose
const getRouter = () => Router
const getWebserver = () => webServer
const getEnv = () => env

export default {
    getDb,
    getRouter,
    getWebserver,
    getEnv
}