import axios from "axios"
import Swal from "sweetalert2";
export const update = async(id,nameProduct)=>{
    try {
        const response = await axios.put(`http://localhost:3000/api/products/${id}`, {
            nameProduct
        });
        Swal.fire({
            title:response.data.msg,
            icon: "success"
          });
    } catch (error) {
        console.log(error)
    }
}