<?php

namespace App\Repositories;

use App\Models\User;

class UserRepo extends EloquentRepo
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return User::class;
    }

    /**
     * @param $email
     * @return \Illuminate\Database\Eloquent\Model|object|null
     */
    public function getByEmail($email)
    {
        return $this->model->where('email', $email)->first();
    }

    /**
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function getList()
    {
        return $this->model->paginate();
    }

    /**
     * Build filters include field, operator, value for where query
     *
     * @param array $data
     * @return array
     */
    private function buildFilters($data)
    {
        unset($data['page']);
        $fillAbles = array_flip($this->model->getFillable());
        return collect($data)->map(function ($item, $key) use ($fillAbles) {
            $key = isset($fillAbles[$key]) ? $key : null;
            if ($key === null) {
                return false;
            }
            switch ($key) {
                case 'name':
                    return $this->getFilter($key, addslashes($item) . '%', 'like');
                default:
                    return $this->getFilter($key, $item);
            }
        })->filter()->all();
    }
}
