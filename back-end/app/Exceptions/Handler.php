<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     *
     * @param  mixed  $request
     * @param  ValidationException  $exception
     */
    protected function invalidJson($request, ValidationException $exception)
    {
        return response()->json([
            'message' => $exception->getMessage(),
            'errors' => $this->transformErrors($exception),

        ], $exception->status);
    }

    /**
     * @param  ValidationException  $exception
     * @return array
     */
    private function transformErrors(ValidationException $exception)
    {
        $error = new \stdClass();
        foreach ($exception->errors() as $field => $message) {
            $error->{$field} = $message[0];
        }

        return $error;
    }
}
