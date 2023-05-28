import User from '../models/User.js'

const index = (request, response) => {
    console.log(User.get())
    response.send({
        message: `test`,
        status: 200
    })
}

const about = (request, response) => {
    response.send({
        message: `about`,
        status: 404
    })
}

export default {
    index,
    about
}