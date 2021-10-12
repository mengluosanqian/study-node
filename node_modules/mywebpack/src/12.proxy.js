import axios from "axios";
axios.get('api/users').then(resp => {
    console.log(resp);
})