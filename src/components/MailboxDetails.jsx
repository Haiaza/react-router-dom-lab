import { useParams } from 'react-router-dom';

export default function MailboxDetails({ mailboxes }) {
    const { mailboxId } = useParams();
    const mailbox = mailboxes.find(box => box.boxNumber === parseInt(mailboxId));

    if (!mailbox) {
        return <div>Mailbox not found</div>;
    }

    return (
        <div>
            <h1>Mailbox {mailbox.boxNumber}</h1>
            <p>Box Holder: {mailbox.boxHolder}</p>
            <p>Box Size: {mailbox.boxSize}</p>
        </div>
    );
}