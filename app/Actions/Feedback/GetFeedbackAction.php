<?php

declare (strict_types = 1);

namespace App\Actions\Feedback;
use Illuminate\Http\Request;
use App\Repositories\Feedback\FeedbackRepositoryInterface;

final class GetFeedbackAction
{
    private $feedbackRepository;

    public function __construct(FeedbackRepositoryInterface $feedbackRepository)
    {
        $this->feedbackRepository = $feedbackRepository;
    }

    public function execute()
    {
        return $this->feedbackRepository->getFeedback();
    }
}