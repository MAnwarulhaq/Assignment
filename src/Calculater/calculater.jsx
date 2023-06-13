import "./cal.css"
import { useState } from "react";




const Calculater = () => {

    const [result, setresult] = useState("");
    const clickhandler = () => (
        setresult(result.concat(event.target.value))
    )
    const ClearDisplay = () => {
        setresult("")
    }
    const output = () => {
        setresult(eval(result).toString())
    }

    return (
        <div className="StyleCalculater">
            <div className="cal">
                <input type="text" placeholder="0" value={result} className="inputfield" />
                <input type="button" value="7" className="button" onClick={clickhandler} />
                <input type="button" value="8" className="button" onClick={clickhandler} />
                <input type="button" value="9" className="button" onClick={clickhandler} />
                <input type="button" value="+" className="button" onClick={clickhandler} />
                <input type="button" value="4" className="button" onClick={clickhandler} />
                <input type="button" value="5" className="button" onClick={clickhandler} />
                <input type="button" value="6" className="button" onClick={clickhandler} />
                <input type="button" value="-" className="button" onClick={clickhandler} />
                <input type="button" value="1" className="button" onClick={clickhandler} />
                <input type="button" value="2" className="button" onClick={clickhandler} />
                <input type="button" value="3" className="button" onClick={clickhandler} />
                <input type="button" value="*" className="button" onClick={clickhandler} />
                <input type="button" value="." className="button" onClick={clickhandler} />
                <input type="button" value="0" className="button" onClick={clickhandler} />
                <input type="button" value="=" className="button" onClick={output} />
                <input type="button" value="/" className="button" onClick={clickhandler} />
                <input type="button" value="Clear" className="button1" onClick={ClearDisplay} />
            </div>
        </div>

    )
}
export default Calculater;