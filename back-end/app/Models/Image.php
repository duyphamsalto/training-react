<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Media
 * @package App\Models
 */
class Image extends Model
{
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'image_title',
        'image_desc',
        'image_url',
        'image_status',
        'deleted_at',
        'created_by',
        'created_at',
        'updated_at'
    ];
}
