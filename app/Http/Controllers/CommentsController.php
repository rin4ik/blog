<?php

namespace App\Http\Controllers;

use App\Comment;
use Symfony\Component\HttpFoundation\Request;

class CommentsController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'message' => 'required'
        ]);
        $comment = new Comment;
        $comment->text = $request->get('message');
        $comment->user_id = auth()->user()->id;
        $comment->post_id = $request->get('post_id');
        $comment->save();
        return redirect()->back()->with('status', 'Ваш комментарий добавлен!');
    }
}
