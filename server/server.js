const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Assuming you've installed bcryptjs

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/sales', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir el modelo de usuario
const User = mongoose.model('User', {
  username: String,
  password: String
});

// Implementar la ruta de inicio de sesión
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Buscar al usuario en la base de datos
    const existingUser = await User.findOne({ username });

    // Verificar si la cuenta existe
    if (!existingUser) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Validar la contraseña (using bcrypt)
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Inicio de sesión exitoso (implement session management here)
    req.session.userId = existingUser._id;
    res.json({ message: 'Inicio de sesión exitoso' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
});




