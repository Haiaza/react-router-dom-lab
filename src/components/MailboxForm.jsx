import { useState } from 'react';

export default function MailboxForm ({ addMailbox }) {

    const [boxHolder, setBoxHolder] = useState('');
    const [boxSize, setBoxSize] = useState('small');
    
    const handleSubmit = (event) => {
        event.preventDefault(); 
        // form submission logic here'

        const newMailbox = { boxHolder, boxSize };

        addMailbox(newMailbox);
}


return(

    


    <div>
        <h1>New Mailbox</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="boxHolder">Boxholder name</label>
            <input
                id="boxHolder"
                type="text"
                placeholder="Boxholder name"
                value={boxHolder}
                onChange={(e) => setBoxHolder(e.target.value)}
                required
            />
    
        <label htmlFor="boxSize">Box Size</label>
        <select
            id ="boxSize"
            name="boxSize"
            value={boxSize}
            onChange={(e) => setBoxSize(e.target.value)}
            >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>

        <input type="submit" value="Submit" />
        </form>
    </div>
)
}