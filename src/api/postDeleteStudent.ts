import axios from 'axios';
export async function postDeleteStudent(id: string, first_name: string, last_name: string) {
    
    const res = await axios.get(`http://backend-develop-ifx-admin.eu-de-3.icp.infineon.com/query/delete-student`, {
    params:{"username":localStorage.getItem("username"), "id": id, "first_name": first_name, "last_name": last_name}
    })
    
    return res.data;
}
