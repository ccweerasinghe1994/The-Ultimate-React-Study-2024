import {FC} from "react";


type PropsErrorMessage = {
    error: string | null;
}

const ErrorMessage: FC<PropsErrorMessage> = ({error}) => {
    return (

        <p className={'error'}>
            <span>🚫</span>{error}
        </p>

    )
}

export default ErrorMessage;