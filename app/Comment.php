<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    public function author()
    {
        return $this->belomgsTo(User::class);
    }

    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function allow()
    {
        $this->status = 1;
        $this->save();
    }

    public function disAllow()
    {
        $this->status = 0;
        $this->save();
    }

    public function remove()
    {
        $this->delete();
    }

    public function toggleStatus()
    {
        if ($this->status = 0) {
            return $this->allow();
        }
        return $this->disAllow();
    }
}
