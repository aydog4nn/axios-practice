import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
function CurrencyPage() {
    const BASE_URL = "https://v6.exchangerate-api.com/v6/";
    const apiKey = "d8eca44e8612655cf38531b2";
    const [fromCurreny, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [amount, setAmount] = useState(0);
    const [result, setResult] = useState(0);

    const exchange = async () => {
        const response = await axios.get(
            `${BASE_URL}${apiKey}/latest/${fromCurreny}`
        );
        setResult((response.data.conversion_rates[toCurrency] * amount).toFixed(2));

        
    };

    return (
        <div
            style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                gap: "30px",
                marginTop: "50px",
            }}
        >
            <input
                type="number"
                name="fromCurrency"
                id="fromCurrency"
                defaultValue={amount}
                style={{
                    padding: "10px",
                }}
                onChange={(e) => setAmount(e.target.value)}
            />
            <select
                name="fromCurrency"
                id="fromCurrencySelect"
                style={{
                    padding: "7px",
                }}
                value={fromCurreny}
                onChange={(e) => setFromCurrency(e.target.value)}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
            </select>
            <FaAnglesRight
                style={{
                    fontSize: "20",
                    cursor: "pointer",
                    border: "1px solid white",
                    padding: "10px",
                    borderRadius: "50",
                }}
                onClick={exchange}
            />
            <select
                name="toCurrency"
                id="toCurrencySelect"
                style={{
                    padding: "7px",
                }}
                defaultValue={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
            </select>
            <input
                type="number"
                name="toCurrency"
                id="toCurrency"
                value={result}
                style={{
                    padding: "10px",
                }}
                onChange={(e) => setResult(e.target.value)}
            />
        </div>
    );
}

export default CurrencyPage;
