import { Link } from 'react-router-dom';

export default function MailboxList({ mailboxes }) {
    return (
        <div>
            <h1>Mailbox List</h1>
            {mailboxes.length === 0 ? (
                <p>No mailboxes yet.</p>
            ) : (
                <ul>
                    {mailboxes.map((mailbox, index) => (
                        <li key={index}>
                            <Link to={`/mailboxes/${mailbox.boxNumber}`}>
                                Box {mailbox.boxNumber}: {mailbox.boxHolder} ({mailbox.boxSize})
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}