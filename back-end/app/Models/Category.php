<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

/**
 * Class Tag
 * @property integer $id
 * @property string $cate_name
 * @property string $cate_slug
 * @property boolean $cate_status
 * @property integer $created_by
 * @property integer $modified_by
 * @package App\Models
 */
class Category extends Model
{
    use HasFactory, SoftDeletes;

    protected $primaryKey = 'cate_id';

    protected $fillable = [
        'cate_name',
        'cate_slug',
        'cate_status',
        'cate_sort',
        'created_by',
        'modified_by'
    ];

    protected static function boot()
    {
        $userId = auth()->id() ?? 1;
        parent::boot();
        static::creating(function ($model) use ($userId) {
            $model->cate_slug = Str::slug($model->cate_name);
            $model->created_by = $userId;
        });

        static::updating(function ($model) use ($userId) {
            $model->cate_slug = Str::slug($model->cate_name);
            $model->modified_by = $userId;
        });
    }
}
