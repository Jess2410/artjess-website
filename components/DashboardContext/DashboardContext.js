import React, {createContext, useState} from "react";
import fulldata from "../Analytics/context/fullData";

export const DashboardContext = createContext();

const DashboardContextProvider = props => {

    const [dataChart, setDataChart] = useState(fulldata['2020']);
    const [yearData, setYearData] = useState('2020');

    const changeYear = el => {
        setDataChart(el.target.value);
        setYearData(fulldata[el.target.value]);
    }

    return(
        <DashboardContext.Provider value={{changeYear, dataChart, yearData}}>
            {props.children}
        </DashboardContext.Provider>
    )
}
export default DashboardContextProvider;