import axios from 'axios';

const fetchQuestions = async () => {
  try {
    const response = await axios.get('https://api.exemplo.com/perguntas');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar perguntas:', error);
  }
};

export { fetchQuestions };