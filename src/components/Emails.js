import Email from "./Email"

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)

const Emails = (props) => {

    let filteredEmails = props.emails
    if (props.hideRead) filteredEmails = getReadEmails(filteredEmails)

    if (props.currentTab === 'starred')
        filteredEmails = getStarredEmails(filteredEmails)

    return <main className="emails">
        <ul>
            {filteredEmails.map((email, index) => (
                <Email key={index} email={email}
                setEmails={props.setEmails}
                    setSelectedEmail={props.setSelectedEmail} />
            ))}
        </ul>
    </main>
}

export default Emails