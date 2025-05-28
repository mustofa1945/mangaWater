<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return Inertia::render('Welcome');
});

Route::get('/home', function () {
  return Inertia::render('Home');
})->name('home');


Route::get('/read', function () {
  return Inertia::render('ReadManga');
})->name('read');

Route::get('/manga', function () {
  return Inertia::render('Manga');
});

Route::get('/search/{genre?}', function (?string $genre = 'default') {
  return Inertia::render('Search');
});


