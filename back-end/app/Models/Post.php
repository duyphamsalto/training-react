<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Post
 * @property integer $post_id
 * @property string $post_title
 * @property string $post_slug
 * @property string $cate_id
 * @property string $post_desc
 * @property integer $post_status
 * @property string $post_content
 * @property integer $created_by
 * @property integer $modified_by
 * @property HasOne image
 * @package App\Models
 */
class Post extends Model
{
    use HasFactory, SoftDeletes;
    protected $primaryKey = 'post_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'post_id',
        'post_title',
        'post_slug',
        'post_desc',
        'post_content',
        'post_status',
        'cate_id',
        'image_id',
        'created_by',
        'modified_by',
    ];

    /**
     * Attributes to exclude from the Audit.
     *
     * @var array
     */
    protected $auditExclude = [
        'post_view',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'post_status' => 'boolean',
        'post_focus' => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->post_slug = Str::slug($model->post_title);
            $model->created_by = auth()->id();
            $model->modified_by = auth()->id();
        });

        static::updating(function ($model) {
            $model->modified_by = auth()->id();
        });
    }

    /**
     * @return HasOne
     */
    public function cate()
    {
        return $this->hasOne('App\Models\Category', 'id', 'cate_id');
    }

    /**
     * @return HasOne
     */
    public function image()
    {
        return $this->hasOne('App\Models\Image', 'id', 'image_id');
    }

    /**
     * @return HasOne
     */
    public function user()
    {
        return $this->hasOne('App\Models\User', 'id', 'created_by');
    }
}
