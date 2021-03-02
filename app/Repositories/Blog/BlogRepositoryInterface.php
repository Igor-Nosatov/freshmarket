<?php
namespace App\Repositories\Blog;

interface BlogRepositoryInterface
{
    public function showPosts();
    public function showPostByTitle($title);
}