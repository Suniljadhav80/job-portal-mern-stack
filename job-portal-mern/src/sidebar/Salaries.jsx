import Button from "./Button";
import Inputs from "./Inputs";
const Salaries = ({handleChange, handleClick}) => {
    return (
        <>
        <h3 className="py-1 px-1 font-semibold text-primary">Salary</h3>
        {/* Buttons - Hourly/Monthly/Yearly */}
        <div className="flex justify-center">
            <Button onClickHnadler={handleClick} value="Hourly" title="Hourly" />
            <Button onClickHnadler={handleClick} value="Monthly" title="Monthly" />
            <Button onClickHnadler={handleClick} value="Yearly" title="Yearly" />
        </div>
        <div className="mt-4">
            <Inputs handleChange ={handleChange} value="" title = "Any" name = "test" />
            <Inputs handleChange ={handleChange} value="30" title = "< 30000k" name = "test" />
            <Inputs handleChange ={handleChange} value="50" title = "< 50000k" name = "test" />
            <Inputs handleChange ={handleChange} value="80" title = "< 80000k" name = "test" />
            <Inputs handleChange ={handleChange} value="100" title = "< 100000k" name = "test" />
        </div>
        
        </>
    )
    
}

export default  Salaries;