import axios from 'axios';

const baseUrl = "http://localhost:3000/employee";
export const getAllEmployee = () => {
    const promise = new Promise((resolve, reject) => {
        axios.get(baseUrl)
            .then(response => {
                //console.log(response.data);
                resolve(response.data);
            })
            .catch(error => {
                //console.log(error);
                reject(error);
            })

    })

    return promise;
}

//GET
export const getEmployeeById = (id) => {
    //let res = null;

    const promise = new Promise((resolve, reject) => {
        axios.get(baseUrl + "?id=" + id)
            .then(response => {
                //console.log("After Data Return");
                // console.log(response.data);
                resolve(response.data);
                //res = response.data;
            })
            .catch(error => {
                console.log(error);
                reject(error);
            })
    })
    //console.log("Before Data Return");
    //return res;
    return promise;
}

//PATCH/PUT


//POST
export const postEmployee = (data) => {
    axios.post(baseUrl, data)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
}