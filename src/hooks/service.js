import axios from "axios";

const SendMessage = async ({form}) => {
    try {
        const formData = new FormData(form.current);
        let res = await axios.post('https://spesna-backend.onrender.com/send',formData);
        return res;
    } catch (er){
        // alert(er.response.data.msg);
        console.log(er)
    }
};

export default SendMessage
