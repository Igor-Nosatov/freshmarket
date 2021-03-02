<?php
namespace App\Repositories\Blog;

use App\Entity\Post;
use App\Repositories\Blog\BlogRepositoryInterface;

class BlogRepository  implements BlogRepositoryInterface
{
    public function showPosts()
    {
       return Post::orderBy('name', 'asc')->get();
    } 
    public function showPostByTitle($title)
    {
      return Post::where('title',$title)->first();
    }
}

