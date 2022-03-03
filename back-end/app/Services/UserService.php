<?php

namespace App\Services;

use App\Repositories\UserRepo;

/**
 * Class UserService
 * @package App\Services
 */
class UserService
{
    private UserRepo $repo;

    public function __construct(UserRepo $repo)
    {
        $this->repo = $repo;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAll()
    {
        return $this->repo->getAll();
    }

    /**
     * @param $attributes
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function create($attributes)
    {
        return $this->repo->create($attributes);
    }

    /**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function findOrFail($id)
    {
        return $this->repo->findOrFail($id);
    }
}
