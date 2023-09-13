import { useState } from "react";
import "./input.css";
import forms from "../assets/formulas";

function Input({ Formulas }) {

    const [togle, setTogle] = useState(false);
    const [text, setText] = useState("Fahrenheit");
    const [cant, setCant] = useState("0");


    const fn = (num) => {
        let exp =  /^0\d+/;
        let formula;
        if (Formulas === "Temperaturas") {
            formula = forms[text][0];
        }
        const x = num === "" ? 0 : num;
        if (`${num}`.startsWith("00") || exp.test(num)) return "Formato no valido";
        const form = formula.replace("x", `${x}`);
        return eval(form);
    };

    let active = togle === true ? "select-menu active" : "select-menu";

    return (
        <>
            <p style={{ margin: "5vh", fontSize: "20px" }}>Formula de celsius a {text}: <br /> {forms[text][0].replace("x", "°C")}</p>
            <p style={{ margin: "5vh", fontSize: "20px" }}>resultado: {fn(cant)}</p>

            
            <div className="items">
                <input type='number' name="Cantidad" id="num" className="input" onChange={(e) => setCant(e.target.value)} />
                <div className={active}>
                    <div className="select-btn" onClick={() => setTogle(!togle)}>
                        <span className="sBtn-text">{text}</span>
                    </div>
                    <ul className="options">
                        <button className="option" onClick={() => setText("Fahrenheit")}>
                            <span className="option-text" >Fahrenheit</span>
                        </button>
                        <button className="option" onClick={() => setText("Kelvin")}>
                            <span className="option-text">Kelvin</span>
                        </button>
                        <button className="option" onClick={() => setText("Rankine")}>
                            <span className="option-text">Rankine</span>
                        </button>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Input;