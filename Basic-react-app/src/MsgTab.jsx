import Message from './MsgBox'

function MsgTab(){
    return (
        <div>
            <Message userName = "Rajeev" textColor = "yellow"></Message>
            <Message userName = "Ram" textColor = "blue"></Message>
        </div>
    );
}

export default MsgTab;