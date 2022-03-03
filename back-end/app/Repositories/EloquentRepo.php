<?php

namespace App\Repositories;

abstract class EloquentRepo
{
    /**
     * @var \Illuminate\Database\Eloquent\Model | \Illuminate\Database\Eloquent\Builder
     */
    protected $model;

    /**
     * EloquentRepository constructor.
     */
    public function __construct()
    {
        $this->setModel();
    }

    /**
     * get model
     * @return string
     */
    abstract public function getModel();

    /**
     * Set model
     */
    public function setModel()
    {
        $this->model = app()->make($this->getModel());
    }

    /**
     * Get All
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll()
    {
        return $this->model->all();
    }

    /**
     * Get one
     *
     * @param string $id
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function find($id)
    {
        return $this->model->find($id);
    }

    /**
     * Find a model by its primary key or throw an exception.
     *
     * @param string $id
     * @return \Illuminate\Database\Eloquent\Model
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function findOrFail($id)
    {
        return $this->model->findOrFail($id);
    }

    /**
     * Create
     *
     * @param array $attributes
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function create(array $attributes)
    {
        return $this->model->create($attributes);
    }

    /**
     * Insert multi records
     *
     * @param array $values
     * @return bool
     */
    public function insert(array $values)
    {
        return $this->model->insert($values);
    }

    /**
     * Update
     *
     * @param string $id
     * @param array $attributes
     * @return bool|mixed
     */
    public function update($id, array $attributes)
    {
        $result = $this->find($id);

        if ($result) {
            $result->update($attributes);
            return $result;
        }

        return false;
    }

    /**
     * Delete
     *
     * @param string $id
     * @return bool
     */
    public function delete($id)
    {
        $result = $this->find($id);

        if ($result) {
            try {
                $result->delete();
                return true;
            } catch (\Exception $e) {
                report($e);
                return false;
            }
        }

        return false;
    }

    /**
     * Get the number of models to return per page.
     *
     * @return int
     */
    public function getPerPage()
    {
        return $this->model->getPerPage();
    }

    /**
     * Getter for each filter
     *
     * @param string $field
     * @param string $value
     * @param string $operator
     * @return array
     */
    public function getFilter($field, $value, $operator = '=')
    {
        return compact('field', 'operator', 'value');
    }

    /**
     * Get the table associated with the model.
     *
     * @return string
     */
    public function getTable()
    {
        return $this->model->getTable();
    }

    /**
     * Handle dynamic method calls into the repository.
     *
     * @param string $method
     * @param array $parameters
     * @return mixed
     */
    public function __call($method, $parameters)
    {
        return $this->model->newQuery()->$method(...$parameters);
    }
}
