const { response, request } = require('express');

const indexAction = (req = request, res = response) => {

    const { query } = req;
    const { q, nombre, apellido = 'No lastname'} = query;

    res.json(
        { 
            message: 'Soy un get desde el controller',
            result: `${q} ${nombre} ${apellido}`
        }
    );
}

const createAction = (req, res = response) => {

    const { body } = req;

    res.status(201).json(
        { 
            message: 'Soy un post desde el controller',
            body
        }
    );
}

const updateAction = (req, res = response) => {

    const { params, body } = req;
    const { id } = params;

    res.json(
        { 
            message: 'Soy un put desde el controller',
            body,
            id
        }
    );
}

const deleteAction = (req, res = response) => {
    res.json({ message: 'Soy un delete desde el controller' });
}

module.exports = {
    indexAction,
    createAction,
    updateAction,
    deleteAction
}
