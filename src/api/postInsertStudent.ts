import axios from 'axios';
export async function postInsertStudent(first_name: string, last_name: string, id: string) {
   
    const res = await axios.get(`http://backend-develop-ifx-admin.eu-de-3.icp.infineon.com/query/insert-student`, {
    params:{"username":localStorage.getItem("username"), "id": id, "first_name": first_name, "last_name": last_name}
    })
    
    return res.data;
}
