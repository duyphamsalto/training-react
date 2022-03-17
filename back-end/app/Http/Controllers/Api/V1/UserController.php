<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\Store;
use App\Http\Requests\User\Update;
use App\Services\UserService;

class UserController extends Controller
{
    private UserService $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $data = $this->userService->getList();
        return response()->json($data);
    }

    /**
     * @param Store $request
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function store(Store $request)
    {
        return $this->userService->store($request->validated());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function edit($id)
    {
        return $this->userService->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Update $request
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function update(Update $request, $id)
    {
        return $this->userService->update($id, $request->validated());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return bool
     */
    public function destroy($id)
    {
        return $this->userService->destroy($id);
    }
}
