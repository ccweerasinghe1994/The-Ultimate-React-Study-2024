import {FC, ReactNode, useState} from "react";

const messages: string[] = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {

    const [step, setStep] = useState<number>(1);
    const [isOpened, setIsOpened] = useState<boolean>(true);

    const handleNext = () => {
        if (step === 3) {
            return;
        }
        setStep((s) => s + 1);
    };
    const handlePrevious = () => {
        if (step === 1) {
            return;
        }
        setStep((s) => s - 1);
    };

    return (
        <>
            <div className="close" onClick={() => setIsOpened((prevState) => !prevState)}>&times;</div>
            {
                isOpened ? <div className={'steps'}>
                    <div className="numbers">
                        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
                        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
                        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
                    </div>
                    <StepPage step={step}>
                        {messages[step - 1]}
                    </StepPage>
                    <div className="buttons">
                        <Button onClick={handlePrevious} backgroundColor="#7950f2"
                                textColor="#fff">🫲 Previous</Button>
                        <Button onClick={handleNext}
                                backgroundColor="#7950f2"
                                textColor="#fff">Next 🫱</Button>

                    </div>
                </div> : ''
            }

        </>
    )
}

type PropsButton = {
    children: ReactNode;
    onClick: () => void;
    backgroundColor: string;
    textColor: string;
}
const Button: FC<PropsButton> = ({children, textColor, backgroundColor, onClick}) => {
    return <button onClick={onClick} style={{
        backgroundColor: backgroundColor,
        color: textColor,
    }}>{children}
    </button>

}
type PropsStep = {
    step: number;
    children: ReactNode;
}

const StepPage: FC<PropsStep> = ({children, step}) => {
    return (
        <div className="message">
            <h3>
                step {step}
            </h3>
            <div>
                {children}
            </div>
        </div>
    )
}

export default App
