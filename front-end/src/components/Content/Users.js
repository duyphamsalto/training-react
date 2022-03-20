import './Users.css';

export default function Users() {
    const column = (
        <tr>
            <td className="check">□</td>
            <td className="title">T</td>
            <td className="name">Text line</td>
            <td className="email">Text line</td>
            <td className="status">Text line</td>
            <td className="action-data">Publish Edit Delete</td>
        </tr>
    );


    let columns = [];
    const t = 10;
    for (let i = 0; i < t; i++) {
        columns.push(column);
    }

    return (
        <div className="back">
            <table>
                <thead>
                    <tr className="table-head">
                        <th className="check">□</th>
                        <th className="title">Title</th>
                        <th className="name-header">User Name</th>
                        <th className="email-header">Email</th>
                        <th className="status-header">Status</th>
                        <th className="action-header">Title</th>
                    </tr>
                </thead>
                <tbody>
                    {columns}
                </tbody>
            </table>
        </div>
    );

}

