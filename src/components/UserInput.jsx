import { useState } from 'react';

export default function UserInput({ onChange, userInputValue }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required
                           value={userInputValue.initialInvestment}
                           onChange={(event) =>
                               onChange(event.target.value,'initialInvestment')} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required
                    value={userInputValue.annualInvestment}
                    onChange={(event) =>
                        onChange(event.target.value,'annualInvestment')} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required
                    value={userInputValue.expectedReturn}
                    onChange={(event) =>
                        onChange(event.target.value,'expectedReturn')} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required
                    value={userInputValue.duration}
                    onChange={(event) =>
                        onChange(event.target.value,'duration')} />
                </p>
            </div>
        </section>
    )
}