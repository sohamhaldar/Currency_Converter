import {React,useId} from 'react';


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) 
{
   const amountId=useId();//not required btw just used for better optimization
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label  
                htmlFor={amountId}//not required btw used for above written comment reason
                className="text-black/40 mb-2 inline-block">
                   { label}
                </label>
                <input
                    id={amountId}//not required btw used for above written comment reason
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange&&onAmountChange(Number(e.target.value))} 
                    //we check if onAmountCharge is present or not by && wala condition, and sometimes javascript gives string values so we wrap it in Number format
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {
                        currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>
                            {currency}
                        </option>
                        ))
                    }
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;