// Import dependencies
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

// Create an Express app
const app = express();

// Set up database connection
const sequelize = new Sequelize('farmer_db', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define the Farmer model
const Farmer = sequelize.define('Farmer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Create a route for farmer sign-up
app.post('/sign-up', async (req, res) => {
  try {
    const { name, sex, email, age, location, phone, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new farmer
    const farmer = await Farmer.create({
      name,
      sex,
      email,
      age,
      location,
      phone,
      password: hashedPassword,
    });

    res.status(201).send({ message: 'Farmer created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error creating farmer' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});