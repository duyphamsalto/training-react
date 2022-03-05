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
        <table>
            <tr className="table-head">
                <th className="check">□</th>
                <th className="title">Title</th>
                <th className="name">User Name</th>
                <th className="email">Email</th>
                <th className="status">Status</th>
                <th className="action">Title</th>
            </tr>
            {columns}
        </table>
    );

}

