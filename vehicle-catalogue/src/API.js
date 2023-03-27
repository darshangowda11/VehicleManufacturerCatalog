import axios from "axios"
const url = " https://vpic.nhtsa.dot.gov/api/"

export const getAllManufactureres = async () => {
    try {
        const response = await axios.get(url +"vehicles/getallmanufacturers?format=json")
        console.log(response.data.Results)
        return response.data.Results;
    }

    catch (error) {
        console.error(error)
    }
}

export const getManufacturerDetails = async (manufacturerId) => {
    try {
        const response = await axios.get(url+`vehicles/getmanufacturerdetails/${manufacturerId}`)
        console.log(response.data.Results)
        return response.data.Results[0]
    }

    catch (error) {
        console.error(error)
    }
}


//dataformat "Results":[{"Country":"UNITED STATES (USA)","Mfr_CommonName":"Tesla","Mfr_ID":955,"Mfr_Name":"TESLA, INC.","VehicleTypes":[{"IsPrimary":true,"Name":"Passenger Car"},{"IsPrimary":false,"Name":"Truck "},{"IsPrimary":false,"Name":"Multipurpose Passenger Vehicle (MPV)"}]}