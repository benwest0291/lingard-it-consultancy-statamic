<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactFormController;

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);
Route::post('/contact', [ContactFormController::class, 'submit'])->name('contact.submit');