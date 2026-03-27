<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Http;
use Statamic\Facades\Form;

class ContactFormController extends Controller{ 
    
    public function submit(Request $request)
    {
        // Verify reCAPTCHA v3
        $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => config('services.recaptcha.secret'),
            'response' => $request->input('recaptcha_token'),
        ]);

        // Validate form data
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email',
            'company' => 'nullable|string|max:255',
            'contact_number' => 'required|string',
            'message' => 'nullable|string',
            'recaptcha_token' => 'required',
        ]);

        // Get reCAPTCHA score threshold from Statamic global
        $recaptchaScore = 0.5; // Default threshold

        if ($validator->fails() || 
            !$response->successful() || 
            !$response->json('success') || 
            $response->json('score') < $recaptchaScore) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        try {
            // Statamic form submission
            $form = Form::find('enquiry');
            $submission = $form->makeSubmission();
            $submission->data([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'company' => $request->company,
                'contact_number' => $request->contact_number,
                'message' => $request->message,
            ]);
            $submission->save();

            return redirect('/thank-you') ->with('success', 'Form submitted successfully.');

        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Failed to submit form.')
                ->withInput();
        }
    }    
}
    
    

