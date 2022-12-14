import { createContext, useState, useEffect} from "react";
import axios from "axios";




function DataProvider() {
    const participantesData= async () => {
        const locationData = 
            "https://raw.githubusercontent.com/Cleytonleiva/archiverodata/main/archiveroMock.json"
        const data = Object.values(locationData)
        const random = Math.floor(Math.random() * (2 + 1));
        return axios.get(data[random]);

    };

    return { participantesData }
}

const contextParticipantes = createContext();

export {contextParticipantes, DataProvider}

