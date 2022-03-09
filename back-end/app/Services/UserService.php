<?php

namespace App\Services;

use App\Repositories\UserRepo;

/**
 * Class UserService
 * @package App\Services
 */
class UserService
{

    private UserRepo $userRepo;

    public function __construct(UserRepo $userRepo)
    {
        $this->userRepo = $userRepo;
    }

    /**
     * @param $email
     * @return \Illuminate\Database\Eloquent\Model|object|null
     */
    public function getByEmail($email)
    {
        return $this->userRepo->getByEmail($email);
    }

    /**
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function getList()
    {
        return $this->userRepo->getList();
    }

    /**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function findOrFail($id)
    {
        return $this->userRepo->findOrFail($id);
    }
}
