<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements('post_id');
            $table->integer('cate_id')->unsigned()->index();
            $table->string('post_title')->index();
            $table->string('post_slug')->index()->index();
            $table->string('post_desc', 500)->nullable();
            $table->longText('post_content')->nullable();
            $table->boolean('post_status')->unsigned()->default(0);
            $table->integer('image_id')->index();
            $table->integer('created_by')->nullable();
            $table->integer('modified_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
