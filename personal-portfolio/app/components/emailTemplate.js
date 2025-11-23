export const EmailTemplate = ({name, email,subject, message}) => {
    return(
        <div>
            <p>
                <span>Name: </span>
                <strong>{name}</strong>
            </p>
            <p>
                <span>Email: </span>
                <strong>{email}</strong>
            </p>
            
            <p>
                <span>Subject: </span>
                <strong>{subject}</strong>
            </p>
            <p>
                <span>Message: </span>
                <strong>{message}</strong>
            </p>
        </div>
    )
}