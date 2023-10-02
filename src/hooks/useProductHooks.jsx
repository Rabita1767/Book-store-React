import { useEffect, useState } from "react";
import axiosInstance from "../util/AxiosInstance";
const UseProductHook = () => {
    const [product, setProduct] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [isbn, setIsbn] = useState("");
    const fetchData = () => {
        axiosInstance.get("/auth/getAll")
            .then(resp => {
                console.log(resp.data.data);
                setProduct(resp.data.data)
            })
            .catch(err => { console.log(err) })

    }
    const getBookData = (isbn) => {
        axiosInstance.get(`/auth/getAll?isbn=${isbn}`)
            .then(resp => {
                console.log(resp.data.data);
                setIsbn(resp.data.data)
            })
            .catch(err => { console.log(err) })

    }
    const searchFunc = (search) => {
        axiosInstance.get(`/auth/getAll?search=${search}`)
            .then(resp => {
                console.log(resp.data.data);
                setSearchData(resp.data.data)
            })
            .catch(err => { console.log(err) })

    }
    return { fetchData, setProduct, product, getBookData, setIsbn, isbn, searchFunc, setSearchData, searchData };

}
export default UseProductHook;