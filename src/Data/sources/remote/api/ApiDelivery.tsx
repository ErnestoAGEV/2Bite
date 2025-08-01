import axios from "axios"

const ApiDelivery = axios.create ({

    baseURL:'http://10.0.0.106:3000/api',
    headers: {
        'Content-type': 'application/json',
    }
})


const ApiDeliveryForImage = axios.create ({

    baseURL:'http://10.0.0.106:3000/api',
    headers: {
        'Content-type': 'multipart/form-data',
        'accept': 'application/json',
    }
})

export { ApiDelivery, ApiDeliveryForImage }