import axios from "axios";

export async function buscarDados(props) {
    try {
        const dados = await axios.get(`http://127.0.0.1:5000/${props}`);
        if (dados.data.length > 0) {
            return dados.data;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}