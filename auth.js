// utils/auth.js
import fs from 'fs';
import path from 'path';

const usersFilePath = path.join(__dirname, '../data/users.txt');

// Função para ler usuários do arquivo
const readUsers = () => {
  try {
    const data = fs.readFileSync(usersFilePath, 'utf8');
    return data.split('\n').filter(line => line.trim() !== '').map(line => {
      const [name, email, password] = line.split(':');
      return { name, email, password };
    });
  } catch (err) {
    return [];
  }
};

// Função para salvar um novo usuário
const saveUser = (name, email, password) => {
  const userLine = `${name}:${email}:${password}\n`;
  fs.appendFileSync(usersFilePath, userLine, 'utf8');
};

// Função para verificar o login
const checkLogin = (email, password) => {
  const users = readUsers();
  return users.find(user => user.email === email && user.password === password);
};

export { readUsers, saveUser, checkLogin };