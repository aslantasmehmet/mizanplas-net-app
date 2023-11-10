import axios from 'axios';

export default class SubscriberEmailService{
    add(){
        return axios.post(
            "http://localhost:8080/api/email/add"
        )
    }
}