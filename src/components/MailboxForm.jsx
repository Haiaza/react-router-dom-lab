export default function MailboxForm () {

    
    
    const handleSubmit = (event) => {
        event.preventDefault(); 
        // form submission logic here
    }


    return(

        


        <div>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxHolder"></label>
                <h3>Enter a Boxholder name:</h3>
                <input type="text" placeholder="Boxholder name"/>

                <label htmlFor="boxSize"></label>
                <select name="boxSize" id="boxSize">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
            <form action=""></form>
        </div>
    )
}