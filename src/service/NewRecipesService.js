import axios from "axios";

export default class NewRecipesService{
    getRecipes(){
        return axios.get(
            "http://localhost:8080/api/new_recipes/getAll"
        );
    }

    getById(){
        return axios.get(
            "http://localhost:8080/api/new_recipes/getById"
        );
    }

    add(){

        return axios.post(
            "http://localhost:8080/api/new_recipes/add"
        )
    }
}