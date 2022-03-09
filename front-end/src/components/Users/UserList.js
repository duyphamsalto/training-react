import React from 'react';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './user.scss';
import { useEffect } from 'react';
import { API } from '../../configs/constant';
import { fetchAsGet } from '../../services/api';
import Progress from '../commons/Progress';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let current = true;
    setIsLoading(true);
    fetchData(current);

    return () => { current = false; };
  }, []);

  async function fetchData(current) {
    const res = await fetchAsGet(API.USER.GET);
    if (current && res.isOk) {
      setUsers(res.data.data);
      setTotalPage(res.data.total);
    }
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading && <Progress />}
      <table className='table table-striped table-hover table-bordered table-responsive'>
        <thead>
          <tr>
            <th scope="col" className=''>#</th>
            <th scope="col" className=''>User Name</th>
            <th scope="col" className=''>Email</th>
            <th scope="col" className=''>Status</th>
            <th scope="col" className='text-center user-action'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.map((item, idx) =>
              <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>Waiting</td>
                <td className='d-flex justify-content-around'>
                  <button type="button" className="btn btn-outline-success btn-sm mx-2">Publish</button>
                  <button type="button" className="btn btn-outline-info btn-sm mx-2">Edit</button>
                  <button type="button" className="btn btn-outline-danger btn-sm mx-2">Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>

      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <Pagination count={totalPage} />
      </Stack>
    </div>
  );
}

const data = [
  {
    "id": 1,
    "name": "Admin",
    "email": "admin@gmail.com",
    "email_verified_at": "2022-03-03T17:11:16.000000Z",
    "created_at": "2022-03-03T17:11:16.000000Z",
    "updated_at": "2022-03-03T17:11:16.000000Z"
  },
  {
    "id": 2,
    "name": "Elvie O'Conner",
    "email": "grover.lebsack@hahn.biz",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 3,
    "name": "Mr. Jocelyn White",
    "email": "dagmar.kirlin@gmail.com",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 4,
    "name": "Jimmy Rodriguez",
    "email": "ledner.anne@keeling.net",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 5,
    "name": "Ara Adams",
    "email": "egoyette@goodwin.com",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 6,
    "name": "Lamont Quitzon",
    "email": "clemmie.haley@nader.com",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 7,
    "name": "Ms. Abbey McKenzie DVM",
    "email": "lowell91@will.net",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 8,
    "name": "Julius Feeney I",
    "email": "bergnaum.kirstin@beatty.com",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 9,
    "name": "Kiara Thompson",
    "email": "jacobi.wanda@damore.com",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 10,
    "name": "Prof. Tess Metz",
    "email": "archibald47@runolfsson.info",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 11,
    "name": "Adelle Dooley",
    "email": "nquigley@heidenreich.org",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 12,
    "name": "Macie Rosenbaum",
    "email": "elwin14@oberbrunner.net",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 13,
    "name": "Mrs. Lorine Price I",
    "email": "sammie.gibson@gmail.com",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 14,
    "name": "Prof. Hilma Abbott",
    "email": "vandervort.fermin@eichmann.biz",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 15,
    "name": "Ewald Feeney",
    "email": "alittle@gmail.com",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 16,
    "name": "Ewald Feeney",
    "email": "alittle@gmail.com",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 17,
    "name": "Ewald Feeney",
    "email": "alittle@gmail.com",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 18,
    "name": "Ewald Feeney",
    "email": "alittle@gmail.com",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  },
  {
    "id": 19,
    "name": "Ewald Feeney",
    "email": "alittle@gmail.com",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  }, {
    "id": 20,
    "name": "Ewald Feeney",
    "email": "alittle@gmail.com",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  }, {
    "id": 21,
    "name": "Ewald Feeney",
    "email": "alittle@gmail.com",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  }, {
    "id": 22,
    "name": "Ewald Feeney",
    "email": "alittle@gmail.com",
    "email_verified_at": "2022-03-06T14:45:41.000000Z",
    "created_at": "2022-03-06T14:45:41.000000Z",
    "updated_at": "2022-03-06T14:45:41.000000Z"
  }
];
