const messages: string[] = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {

    const step = 3;

    const handleNext = () => {
    };
    const handlePrevious = () => {
    };

    return (
        <div className={'steps'}>
            <div className="numbers">
                <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
                <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
                <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
            </div>
            <div className="message">
                step {step}:{messages[step]}
            </div>
            <div className="buttons">
                <button onClick={handlePrevious} style={{
                    backgroundColor: "#7950f2",
                    color: "#fff",
                }}>Previous
                </button>
                <button onClick={handleNext} style={{
                    backgroundColor: "#7950f2",
                    color: "#fff",
                }}>Next
                </button>
            </div>
        </div>
    )
}

export default App
