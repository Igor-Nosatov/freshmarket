<?php

declare (strict_types = 1);

namespace App\Actions\Feedback;
use Illuminate\Http\Request;
use App\Repositories\Feedback\FeedbackRepositoryInterface;

final class SaveFeedbackAction
{
    private $feedbackRepository;

    public function __construct(FeedbackRepositoryInterface $feedbackRepository)
    {
        $this->feedbackRepository = $feedbackRepository;
    }

    public function execute(Request $request)
    {
        return $this->feedbackRepository->saveFeedback($request);
    }
}