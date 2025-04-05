import users from "../Models/users.models.js"

export const getAllUsers = (req, res) => {
    res.json(users)
};

export const getUserById = (req, res) => {
    const user = users.find(u => u.id == parseInt(req.params.id));
    if (!user) return res.status(404).json({message: `Não foi encontrado o usuário com ID: ${req.params.id}`});
    res.json(user);
};

export const createUser = (req, res) => {
    const newUser = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email
    };

    users.push(newUser);
    res.status(201).json(newUser)
};

export const updateUser = (req, res) => {
    const user = users.find(u => u.id == parseInt(req.params.id));
    if (!user) return res.status(404).json({message: `Não foi encontrado o usuário com ID: ${req.params.id}`});

    user.name = req.body.name || user.name
    user.email = req.body.email || user.email

    res.json(user);
}

export const deleteUser = (req, res) => {
    const index = users.findIndex(u => u.id == parseInt(req.params.id));
    if (index === -1) return res.status(404).json({message: `Não foi encontrado o usuário com ID: ${req.params.id}`});

    users.splice(index, 1);
    res.status(204).send();
}