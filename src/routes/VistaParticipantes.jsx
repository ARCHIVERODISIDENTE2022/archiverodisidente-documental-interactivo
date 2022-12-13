import {React, useContext, useEffect, useState} from "react";
import { ListaParticipantes } from "../components/ListaParticipantes";
import { contextParticipantes } from "../context/DataProvider";

const VistaParticipantes = () => {
    const context = useContext(contextParticipantes);
    const [participante, setParticipante] = useState([]);

    useEffect( () => {
        const loadData = async () => {
            setParticipante(true);
            const result = await context.participantesData();
            setParticipante(result.data);
            console.log(response.data)
    
            loadData()
        }
    }, []);


    return(
        <>
                <ListaParticipantes participante = {participante} />
        </>
    )
};

export default VistaParticipantes