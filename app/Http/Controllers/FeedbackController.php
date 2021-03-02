<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Actions\Feedback\GetFeedbackAction;
use App\Actions\Feedback\SaveFeedbackAction;

class FeedbackController extends Controller
{
    private $getFeedback;
    private $saveFeedback;

    public function __construct(
        GetFeedbackAction $getFeedback,
        SaveFeedbackAction $saveFeedback
    )
    {
        $this->getFeedback = $getFeedback;
        $this->saveFeedback = $saveFeedback;
        $this->middleware('auth:api');
    }

    public function index()
    {
        $data['feedback']  = $this->getFeedback->execute();
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        return  $this->saveFeedback->execute($request);
    }
}
