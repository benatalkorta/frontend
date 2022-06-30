import axios from 'axios';
export async function getTableDetails(body: { question: string; }) {
    const { question, ...rest } = body;
    const params = new URLSearchParams(rest as Record<string, string>);
    console.log(rest, params);

    const res = await axios.get(`http://backend-develop-ifx-admin.eu-de-3.icp.infineon.com/query/execute-query/${body.question}`, {
        params:{"username":localStorage.getItem("username"), ...rest}
    })
    return res.data;
}
